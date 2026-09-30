import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { AppNav } from "@/components/app-nav";
import { useEditor } from "@/lib/editor-store";
import { Copy, Download, Dices, FolderOpen, LayoutGrid, List, Plus, RefreshCw, RotateCcw, Search, Skull, Trash2, X } from "lucide-react";
import {
  CATEGORIES,
  CATALOG,
  KEYS,
  SKIN_PREVIEWS,
  blankItem,
  bundledConfig,
  catalogHit,
  clamp,
  clone,
  displayName,
  itemIcon,
  normalizeLoaded,
  num,
  rollCorpse,
  rowsOf,
  tableOf,
  type CorpseRoll,
  type LootRow,
  type ZhConfig,
} from "@/lib/loot";

const STORAGE_CFG = "zh-editor-config";
const STORAGE_SKINS = "zh-skin-previews";
const STORAGE_THEME = "zh-theme";

const THEMES = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "rust", label: "Rust" },
  { id: "ember", label: "Ember" },
  { id: "ash", label: "Ash" },
  { id: "blood", label: "Blood" },
  { id: "rot", label: "Rot" },
  { id: "tide", label: "Tide" },
] as const;

type ThemeId = (typeof THEMES)[number]["id"];

type SortKey = "chance-desc" | "chance-asc" | "name-asc" | "short-asc" | "skin-desc" | "index-asc";

function ItemArt({
  shortname,
  skinId,
  skinUrl,
  large = false,
}: {
  shortname: string;
  skinId?: number;
  skinUrl?: string;
  large?: boolean;
}) {
  const [broken, setBroken] = useState(false);
  const sid = Number(skinId) || 0;
  const box = large ? "h-24 w-24" : "h-11 w-11";
  return (
    <div className={`relative shrink-0 ${box}`}>
      {broken ? (
        <div className={`grid place-items-center rounded-lg bg-bg text-xs text-faint ${box}`}>?</div>
      ) : (
        <img
          src={itemIcon(shortname)}
          alt=""
          className={`rounded-lg bg-bg object-contain ${box}`}
          onError={() => setBroken(true)}
        />
      )}
      {sid > 0 && skinUrl ? (
        <img
          src={skinUrl}
          alt=""
          className="absolute -right-1 -bottom-1 h-6 w-6 rounded border border-line object-cover"
          title={`Workshop ${sid}`}
        />
      ) : null}
      {sid > 0 && !skinUrl ? (
        <span className="absolute -right-1 -bottom-1 rounded bg-raised px-1 text-[10px] font-semibold text-accent">
          SK
        </span>
      ) : null}
    </div>
  );
}

function chanceTone(p: number) {
  if (p >= 0.5) return "bg-accent text-accent-ink";
  if (p >= 0.15) return "bg-raised text-fg";
  return "bg-bg text-muted";
}

export function LootEditor() {
  const config = useEditor((s) => s.config);
  const dirty = useEditor((s) => s.dirty);
  const commit = useEditor((s) => s.commit);
  const markClean = useEditor((s) => s.markClean);
  const replaceBundled = useEditor((s) => s.replaceBundled);
  const hydrate = useEditor((s) => s.hydrate);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<SortKey>("chance-desc");
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const [toast, setToast] = useState("");
  const [hotDrop, setHotDrop] = useState(false);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerQ, setPickerQ] = useState("");
  const [pickerCat, setPickerCat] = useState("all");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [draft, setDraft] = useState<LootRow | null>(null);
  const [bulkOpen, setBulkOpen] = useState(false);
  const [bulkRaw, setBulkRaw] = useState("0.25");
  const [quickOpen, setQuickOpen] = useState(false);
  const [quickShort, setQuickShort] = useState("");
  const [blInput, setBlInput] = useState("");
  const [skins, setSkins] = useState<Record<string, string>>({});
  const [theme, setTheme] = useState<ThemeId>("ember");
  const [roll, setRoll] = useState<CorpseRoll | null>(null);
  const [itemView, setItemView] = useState<"list" | "boxes">("list");
  const [lookupBusy, setLookupBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const toastTimer = useRef<number | null>(null);

  useEffect(() => {
    hydrate();
    try {
      const extra = localStorage.getItem(STORAGE_SKINS);
      if (extra) setSkins(JSON.parse(extra) as Record<string, string>);
      const savedTheme = localStorage.getItem(STORAGE_THEME);
      if (savedTheme && THEMES.some((t) => t.id === savedTheme)) {
        setTheme(savedTheme as ThemeId);
      }
    } catch {
      /* keep bundled */
    }
  }, [hydrate]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(STORAGE_THEME, theme);
  }, [theme]);

  function ping(msg: string) {
    setToast(msg);
    if (toastTimer.current) window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(""), 2200);
  }

  function skinUrl(id: number) {
    const n = Number(id) || 0;
    if (!n) return "";
    return skins[String(n)] || SKIN_PREVIEWS[n] || "";
  }

  const list = rowsOf(config);
  const table = tableOf(config);
  const loot = config["Loot Table"];

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    let rows = list.map((it, i) => ({ it, i }));
    if (category !== "all") {
      rows = rows.filter(({ it }) => (catalogHit(it.Shortname)?.c || "Misc") === category);
    }
    if (q) {
      rows = rows.filter(({ it }) =>
        `${it.Shortname} ${it.ItemName || ""} ${displayName(it)} ${it.SkinID}`.toLowerCase().includes(q),
      );
    }
    const [key, dir] = sort.split("-") as [string, "asc" | "desc"];
    rows.sort((a, b) => {
      let av: string | number;
      let bv: string | number;
      if (key === "chance") {
        av = Number(a.it["Probability (0.0 - 1.0)"]) || 0;
        bv = Number(b.it["Probability (0.0 - 1.0)"]) || 0;
      } else if (key === "name") {
        av = displayName(a.it).toLowerCase();
        bv = displayName(b.it).toLowerCase();
      } else if (key === "short") {
        av = a.it.Shortname;
        bv = b.it.Shortname;
      } else if (key === "skin") {
        av = Number(a.it.SkinID) || 0;
        bv = Number(b.it.SkinID) || 0;
      } else {
        av = a.i;
        bv = b.i;
      }
      if (av < bv) return dir === "asc" ? -1 : 1;
      if (av > bv) return dir === "asc" ? 1 : -1;
      return 0;
    });
    return rows;
  }, [list, filter, category, sort]);

  const expected = list.reduce((s, it) => s + (Number(it["Probability (0.0 - 1.0)"]) || 0), 0);
  const skinCount = list.filter((x) => Number(x.SkinID) > 0).length;
  const named = list.filter((x) => x.ItemName).length;

  function patchRow(i: number, patch: Partial<LootRow>) {
    const next = clone(config);
    Object.assign(rowsOf(next)[i], patch);
    commit(next);
  }

  function addItem(partial: Partial<LootRow>) {
    const next = clone(config);
    const it = Object.assign(blankItem(), partial);
    rowsOf(next).push(it);
    commit(next);
    ping(`Added ${it.Shortname}`);
  }

  function download() {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ZombieHorde.json";
    a.click();
    URL.revokeObjectURL(a.href);
    markClean();
    ping("Downloaded ZombieHorde.json");
  }

  async function copyLoot() {
    try {
      await navigator.clipboard.writeText(JSON.stringify(config["Loot Table"], null, 2));
      ping("Loot Table JSON copied");
    } catch {
      ping("Clipboard blocked");
    }
  }

  function loadFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = normalizeLoaded(JSON.parse(String(reader.result)) as ZhConfig);
        setSelected(new Set());
        commit(parsed, false);
        localStorage.setItem(STORAGE_CFG, JSON.stringify(parsed));
        ping(`Loaded ${file.name} — ${rowsOf(parsed).length} loot rows`);
      } catch (err) {
        ping(err instanceof Error ? err.message : "Could not parse JSON");
      }
    };
    reader.readAsText(file);
  }

  function openEditor(i: number) {
    setEditIndex(i);
    setDraft(clone(list[i]));
  }

  function saveEditor() {
    if (editIndex == null || !draft) return;
    const next = clone(config);
    const it = draft;
    it.Shortname = it.Shortname.trim();
    it.ItemName = (it.ItemName || "").trim();
    it.Minimum = num(it.Minimum, 1);
    it.Maximum = num(it.Maximum, it.Minimum);
    it.SkinID = num(it.SkinID, 0);
    it["Probability (0.0 - 1.0)"] = clamp(Number(it["Probability (0.0 - 1.0)"]), 0, 1);
    it["Minimum condition (0.0 - 1.0)"] = clamp(Number(it["Minimum condition (0.0 - 1.0)"]), 0, 1);
    it["Maximum condition (0.0 - 1.0)"] = clamp(Number(it["Maximum condition (0.0 - 1.0)"]), 0, 1);
    if (it["Spawn with"] && !it["Spawn with"].Shortname.trim()) it["Spawn with"] = null;
    rowsOf(next)[editIndex] = it;
    commit(next);
    setEditIndex(null);
    setDraft(null);
  }

  async function lookupSkin() {
    if (!draft) return;
    const id = num(draft.SkinID, 0);
    if (!id) return ping("Enter a workshop SkinID first");
    setLookupBusy(true);
    try {
      const page = `https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`;
      const proxies = [
        `https://api.allorigins.win/raw?url=${encodeURIComponent(page)}`,
        `https://corsproxy.io/?${encodeURIComponent(page)}`,
      ];
      let html = "";
      for (const url of proxies) {
        try {
          const res = await fetch(url);
          if (res.ok) {
            html = await res.text();
            if (html.includes("og:image")) break;
          }
        } catch {
          /* try next */
        }
      }
      const m = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
      if (m?.[1]) {
        const nextSkins = { ...skins, [String(id)]: m[1] };
        setSkins(nextSkins);
        localStorage.setItem(STORAGE_SKINS, JSON.stringify(nextSkins));
        ping("Skin preview saved in this browser");
      } else {
        ping("Could not fetch preview — workshop link still works");
        window.open(page, "_blank", "noopener");
      }
    } finally {
      setLookupBusy(false);
    }
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        download();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // download closes over latest config via state; rebind when config changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]);

  const pickerList = useMemo(() => {
    const q = pickerQ.trim().toLowerCase();
    let items = CATALOG;
    if (pickerCat !== "all") items = items.filter((x) => x.c === pickerCat);
    if (q) items = items.filter((x) => `${x.s} ${x.n}`.toLowerCase().includes(q));
    return items.slice(0, 120);
  }, [pickerQ, pickerCat]);

  const alphaText = (loot[KEYS.alpha] || []).join("\n");

  return (
    <main
      className="mx-auto max-w-[1480px] px-4 pt-5 pb-24 sm:px-5"
      onDragOver={(e) => {
        e.preventDefault();
        setHotDrop(true);
      }}
      onDragLeave={() => setHotDrop(false)}
      onDrop={(e) => {
        e.preventDefault();
        setHotDrop(false);
        const f = e.dataTransfer.files[0];
        if (f && f.name.endsWith(".json")) loadFile(f);
      }}
    >
      <AppNav />
      <header className="mb-4 flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent font-display text-lg font-bold text-accent-ink">
            ZH
          </div>
          <div>
            <h1 className="font-display text-3xl leading-none font-bold tracking-wide">Zombie Horde Loot Editor</h1>
            <p className={`mt-1 text-sm ${dirty ? "text-accent" : "text-muted"}`}>
              ZombieHorde.json{dirty ? " · unsaved edits" : ""}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn" onClick={() => fileRef.current?.click()}>
            <FolderOpen className="h-4 w-4" /> Load JSON
          </button>
          <button
            type="button"
            className="btn"
            onClick={() => {
              if (window.confirm("Reload the bundled ZombieHorde.json and discard edits?")) {
                setSelected(new Set());
                replaceBundled();
                ping(`Loaded bundled config — ${rowsOf(bundledConfig()).length} loot rows`);
              }
            }}
          >
            <RotateCcw className="h-4 w-4" /> Reload bundled
          </button>
          <button type="button" className="btn-primary" onClick={() => setRoll(rollCorpse(config))}>
            <Dices className="h-4 w-4" /> Roll corpse
          </button>
          <button type="button" className="btn" onClick={() => void copyLoot()}>
            <Copy className="h-4 w-4" /> Copy loot JSON
          </button>
          <button type="button" className="btn-primary" onClick={download}>
            <Download className="h-4 w-4" /> Download ZombieHorde.json
          </button>
          <input
            ref={fileRef}
            type="file"
            accept=".json,application/json"
            hidden
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) loadFile(f);
              e.target.value = "";
            }}
          />
        </div>
      </header>

      <section className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
        <Stat value={String(list.length)} label="Loot rows" />
        <Stat value={`${table[KEYS.min]}–${table[KEYS.max]}`} label="Items rolled per corpse" />
        <Stat value={expected.toFixed(2)} label="Sum of probabilities" />
        <Stat value={String(skinCount)} label="Rows with a skin" />
        <Stat value={String(named)} label="Custom display names" />
      </section>

      {roll ? (
        <section className="panel mb-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3">
            <div>
              <h2 className="font-display text-xl tracking-wide">Corpse drop</h2>
              <p className="text-xs text-muted">
                {roll.mode === "inventory"
                  ? "Drop inventory is on, so the random table is not used."
                  : roll.mode === "murderer"
                    ? "Default murderer loot is on, so the random table is not used."
                    : `${roll.drops.filter((d) => !d.companion).length} of ${roll.slotsWanted} slots filled · stack size is rolled between each row’s min and max`}
              </p>
            </div>
            <div className="flex gap-2">
              <button type="button" className="btn" onClick={() => setRoll(rollCorpse(config))}>
                <RefreshCw className="h-4 w-4" /> Reroll
              </button>
              <button type="button" className="btn" onClick={() => setRoll(null)}>
                Close
              </button>
            </div>
          </div>
          {roll.mode === "table" ? (
            roll.drops.length === 0 ? (
              <p className="px-4 py-6 text-sm text-muted">Nothing passed the probability roll.</p>
            ) : (
              <ul className="divide-y divide-line">
                {roll.drops.map((drop, i) => {
                  const name = "ItemName" in drop.row && drop.row.ItemName ? drop.row.ItemName : displayName(drop.row as LootRow);
                  const known = catalogHit(drop.row.Shortname);
                  return (
                    <li key={i} className={`flex items-center gap-3 px-4 py-2 ${drop.companion ? "bg-bg-2 pl-10" : ""}`}>
                      <ItemArt shortname={drop.row.Shortname} skinId={drop.row.SkinID} skinUrl={skinUrl(drop.row.SkinID)} />
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-semibold">{known && !("ItemName" in drop.row && drop.row.ItemName) ? known.n : name}</div>
                        <code className="text-xs text-faint">
                          {drop.row.Shortname}
                          {"Spawn as blueprint" in drop.row && drop.row["Spawn as blueprint"] ? " · blueprint" : ""}
                          {drop.companion ? " · spawns with" : ""}
                        </code>
                      </div>
                      <span className="font-display text-xl">×{drop.amount}</span>
                    </li>
                  );
                })}
              </ul>
            )
          ) : null}
        </section>
      ) : null}

      <div className="grid gap-3 lg:grid-cols-[300px_1fr]">
        <aside className="panel">
          <h2 className="panel-title">Loot settings</h2>
          <div className="space-y-3 p-4">
            <label className="block text-xs text-muted">
              Theme
              <select
                className="field-input mt-1"
                value={theme}
                onChange={(e) => setTheme(e.target.value as ThemeId)}
              >
                {THEMES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.label}
                  </option>
                ))}
              </select>
            </label>
            <Toggle
              label="Drop inventory instead of table"
              checked={!!loot[KEYS.dropInv]}
              onChange={(v) => {
                const next = clone(config);
                next["Loot Table"][KEYS.dropInv] = v;
                commit(next);
              }}
            />
            <Toggle
              label="Drop default murderer loot"
              checked={!!loot[KEYS.dropMurder]}
              onChange={(v) => {
                const next = clone(config);
                next["Loot Table"][KEYS.dropMurder] = v;
                commit(next);
              }}
            />
            <p className="text-xs leading-relaxed text-muted">
              Keep both off to use the random table. That is how this config is set now.
            </p>
            <label className="block text-xs text-muted">
              Min items per corpse
              <input
                className="field-input mt-1"
                type="number"
                min={0}
                value={table[KEYS.min]}
                onChange={(e) => {
                  const next = clone(config);
                  tableOf(next)[KEYS.min] = num(e.target.value, 1);
                  commit(next);
                }}
              />
            </label>
            <label className="block text-xs text-muted">
              Max items per corpse
              <input
                className="field-input mt-1"
                type="number"
                min={0}
                value={table[KEYS.max]}
                onChange={(e) => {
                  const next = clone(config);
                  const mn = tableOf(next)[KEYS.min];
                  tableOf(next)[KEYS.max] = Math.max(mn, num(e.target.value, 1));
                  commit(next);
                }}
              />
            </label>
            <label className="block text-xs text-muted">
              AlphaLoot profiles (one per line)
              <textarea
                className="field-input mt-1 min-h-16"
                value={alphaText}
                placeholder="leave empty if unused"
                onChange={(e) => {
                  const next = clone(config);
                  next["Loot Table"][KEYS.alpha] = e.target.value
                    .split(/\n+/)
                    .map((s) => s.trim())
                    .filter(Boolean);
                  commit(next);
                }}
              />
            </label>
            <div>
              <p className="mb-1 text-xs text-muted">
                Inventory drop blacklist <span className="text-faint">{loot[KEYS.blacklist].length} entries</span>
              </p>
              <div className="flex gap-2">
                <input
                  className="field-input"
                  value={blInput}
                  placeholder="shortname"
                  onChange={(e) => setBlInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      const s = blInput.trim();
                      if (!s) return;
                      const next = clone(config);
                      if (!next["Loot Table"][KEYS.blacklist].includes(s)) {
                        next["Loot Table"][KEYS.blacklist].push(s);
                      }
                      commit(next);
                      setBlInput("");
                    }
                  }}
                />
                <button
                  type="button"
                  className="btn shrink-0"
                  onClick={() => {
                    const s = blInput.trim();
                    if (!s) return;
                    const next = clone(config);
                    if (!next["Loot Table"][KEYS.blacklist].includes(s)) {
                      next["Loot Table"][KEYS.blacklist].push(s);
                    }
                    commit(next);
                    setBlInput("");
                  }}
                >
                  Add
                </button>
              </div>
              <div className="mt-2 flex max-h-40 flex-wrap gap-1 overflow-auto">
                {loot[KEYS.blacklist].map((s) => (
                  <button
                    key={s}
                    type="button"
                    className="rounded-full border border-line bg-bg px-2 py-1 text-xs text-muted"
                    title="Remove"
                    onClick={() => {
                      const next = clone(config);
                      next["Loot Table"][KEYS.blacklist] = next["Loot Table"][KEYS.blacklist].filter((x) => x !== s);
                      commit(next);
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div
              className={`rounded-xl border border-dashed px-3 py-4 text-center text-xs text-muted ${hotDrop ? "border-accent text-accent" : "border-line"}`}
            >
              Drop a ZombieHorde.json here to replace the working copy.
            </div>
            <p className="text-xs leading-relaxed text-muted">
              The plugin rolls 0–1 per row and keeps items whose probability is at least that roll. Higher % is more
              common. Row min/max is stack size, not how many slots.
            </p>
          </div>
        </aside>

        <section className="panel min-w-0">
          <div className="flex flex-wrap items-center gap-2 border-b border-line p-3">
            <div className="relative min-w-44 flex-1">
              <Search className="pointer-events-none absolute top-2.5 left-2.5 h-4 w-4 text-faint" />
              <input
                className="field-input pl-8"
                type="search"
                placeholder="Search name, shortname, skin id…"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            <select className="field-input w-auto" value={category} onChange={(e) => setCategory(e.target.value)}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c === "all" ? "All categories" : c}
                </option>
              ))}
            </select>
            <select className="field-input w-auto" value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
              <option value="chance-desc">Chance high → low</option>
              <option value="chance-asc">Chance low → high</option>
              <option value="name-asc">Name A–Z</option>
              <option value="short-asc">Shortname A–Z</option>
              <option value="skin-desc">Skinned first</option>
              <option value="index-asc">File order</option>
            </select>
            <span className="text-xs text-muted">{filtered.length} shown</span>
            <button type="button" className="btn" onClick={() => setItemView(itemView === "list" ? "boxes" : "list")}>
              {itemView === "list" ? <LayoutGrid className="h-4 w-4" /> : <List className="h-4 w-4" />}
              {itemView === "list" ? "Boxes" : "List"}
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => setSelected(new Set(filtered.map(({ i }) => i)))}
            >
              Select shown
            </button>
            <button type="button" className="btn" onClick={() => setSelected(new Set())}>
              Clear
            </button>
            <button type="button" className="btn" onClick={() => (selected.size ? setBulkOpen(true) : ping("Select rows first"))}>
              Set %
            </button>
            <button
              type="button"
              className="btn text-danger-soft"
              onClick={() => {
                if (!selected.size) return ping("Select rows first");
                if (!window.confirm(`Delete ${selected.size} rows?`)) return;
                const next = clone(config);
                tableOf(next)[KEYS.list] = rowsOf(next).filter((_, i) => !selected.has(i));
                setSelected(new Set());
                commit(next);
              }}
            >
              <Trash2 className="h-4 w-4" /> Delete selected
            </button>
            <button type="button" className="btn-primary" onClick={() => setPickerOpen(true)}>
              <Plus className="h-4 w-4" /> Add from catalog
            </button>
            <button type="button" className="btn" onClick={() => setQuickOpen(true)}>
              Add shortname
            </button>
          </div>

          {itemView === "boxes" ? (
            <div className="grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 xl:grid-cols-4">
              {filtered.length === 0 ? (
                <p className="col-span-full px-4 py-10 text-center text-muted">No items match this filter.</p>
              ) : (
                filtered.map(({ it, i }) => {
                  const p = Number(it["Probability (0.0 - 1.0)"]) || 0;
                  return (
                    <button
                      key={i}
                      type="button"
                      className={`rounded-2xl border p-3 text-left ${selected.has(i) ? "border-accent bg-bg-2" : "border-line bg-bg hover:border-accent"}`}
                      onClick={() => openEditor(i)}
                    >
                      <ItemArt large shortname={it.Shortname} skinId={it.SkinID} skinUrl={skinUrl(it.SkinID)} />
                      <div className="mt-2 truncate font-semibold">{displayName(it)}</div>
                      <div className="truncate text-xs text-faint">{it.Shortname}</div>
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${chanceTone(p)}`}>
                          {Math.round(p * 100)}%
                        </span>
                        <span className="text-xs text-muted">
                          {it.Minimum}–{it.Maximum}
                        </span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="text-xs tracking-wide text-muted uppercase">
                <tr className="border-b border-line">
                  <th className="w-10 px-3 py-2" />
                  <th className="px-3 py-2">Item / skin</th>
                  <th className="px-3 py-2">Chance</th>
                  <th className="px-3 py-2">Stack</th>
                  <th className="px-3 py-2">SkinID</th>
                  <th className="px-3 py-2" />
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-10 text-center text-muted">
                      No items match this filter.
                    </td>
                  </tr>
                ) : (
                  filtered.map(({ it, i }) => {
                    const p = Number(it["Probability (0.0 - 1.0)"]) || 0;
                    const on = selected.has(i);
                    return (
                      <tr key={i} className={`border-b border-line/70 ${on ? "bg-bg-2" : ""}`}>
                        <td className="px-3 py-2">
                          <input
                            type="checkbox"
                            className="h-4 w-4"
                            checked={on}
                            onChange={(e) => {
                              const next = new Set(selected);
                              if (e.target.checked) next.add(i);
                              else next.delete(i);
                              setSelected(next);
                            }}
                          />
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex items-center gap-3">
                            <ItemArt shortname={it.Shortname} skinId={it.SkinID} skinUrl={skinUrl(it.SkinID)} />
                            <div className="min-w-0">
                              <div className="truncate font-semibold">{displayName(it)}</div>
                              {it.ItemName ? (
                                <div className="truncate text-xs text-accent">{catalogHit(it.Shortname)?.n}</div>
                              ) : null}
                              <code className="text-xs text-faint">
                                {it.Shortname}
                                {it["Spawn as blueprint"] ? " · BP" : ""}
                              </code>
                            </div>
                          </div>
                        </td>
                        <td className="px-3 py-2">
                          <div className="flex items-center gap-2">
                            <input
                              type="range"
                              min={0}
                              max={1}
                              step={0.01}
                              value={p}
                              className="w-28 accent-accent"
                              onChange={(e) =>
                                patchRow(i, { "Probability (0.0 - 1.0)": clamp(Number(e.target.value), 0, 1) })
                              }
                            />
                            <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${chanceTone(p)}`}>
                              {Math.round(p * 100)}%
                            </span>
                          </div>
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <input
                            className="field-input inline w-16"
                            type="number"
                            min={0}
                            value={it.Minimum}
                            onChange={(e) => patchRow(i, { Minimum: num(e.target.value, 1) })}
                          />
                          <span className="mx-1 text-faint">–</span>
                          <input
                            className="field-input inline w-16"
                            type="number"
                            min={0}
                            value={it.Maximum}
                            onChange={(e) => patchRow(i, { Maximum: num(e.target.value, 1) })}
                          />
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <input
                            className="field-input inline w-28"
                            type="number"
                            min={0}
                            value={it.SkinID || 0}
                            onChange={(e) => patchRow(i, { SkinID: num(e.target.value, 0) })}
                          />
                          {Number(it.SkinID) ? (
                            <a
                              className="ml-2 text-xs text-accent underline"
                              target="_blank"
                              rel="noreferrer"
                              href={`https://steamcommunity.com/sharedfiles/filedetails/?id=${it.SkinID}`}
                            >
                              workshop
                            </a>
                          ) : null}
                        </td>
                        <td className="px-3 py-2 whitespace-nowrap">
                          <button type="button" className="btn" onClick={() => openEditor(i)}>
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn ml-1"
                            onClick={() => {
                              const next = clone(config);
                              rowsOf(next).splice(i + 1, 0, clone(rowsOf(next)[i]));
                              commit(next);
                            }}
                          >
                            Copy
                          </button>
                          <button
                            type="button"
                            className="btn ml-1"
                            onClick={() => {
                              const next = clone(config);
                              rowsOf(next).splice(i, 1);
                              const sel = new Set<number>();
                              for (const s of selected) {
                                if (s < i) sel.add(s);
                                else if (s > i) sel.add(s - 1);
                              }
                              setSelected(sel);
                              commit(next);
                            }}
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          )}
        </section>
      </div>

      {editIndex != null && draft ? (
        <Modal title="Edit loot row" onClose={() => setEditIndex(null)}>
          <div className="mb-3 flex items-center gap-3">
            <ItemArt shortname={draft.Shortname} skinId={draft.SkinID} skinUrl={skinUrl(draft.SkinID)} />
            <p className="text-xs text-muted">
              {catalogHit(draft.Shortname)
                ? `Catalog: ${catalogHit(draft.Shortname)?.n} · ${catalogHit(draft.Shortname)?.c}`
                : "Shortname not in catalog — still valid if Rust knows it."}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Shortname">
              <input
                className="field-input"
                value={draft.Shortname}
                onChange={(e) => setDraft({ ...draft, Shortname: e.target.value })}
              />
            </Field>
            <Field label="Custom display name">
              <input
                className="field-input"
                value={draft.ItemName}
                placeholder="optional rename in loot"
                onChange={(e) => setDraft({ ...draft, ItemName: e.target.value })}
              />
            </Field>
            <Field label="Min stack">
              <input
                className="field-input"
                type="number"
                value={draft.Minimum}
                onChange={(e) => setDraft({ ...draft, Minimum: num(e.target.value, 1) })}
              />
            </Field>
            <Field label="Max stack">
              <input
                className="field-input"
                type="number"
                value={draft.Maximum}
                onChange={(e) => setDraft({ ...draft, Maximum: num(e.target.value, 1) })}
              />
            </Field>
            <Field label="Probability 0–1">
              <input
                className="field-input"
                type="number"
                min={0}
                max={1}
                step={0.01}
                value={draft["Probability (0.0 - 1.0)"]}
                onChange={(e) => setDraft({ ...draft, "Probability (0.0 - 1.0)": num(e.target.value, 0) })}
              />
            </Field>
            <Field label="Workshop SkinID">
              <input
                className="field-input"
                type="number"
                value={draft.SkinID}
                onChange={(e) => setDraft({ ...draft, SkinID: num(e.target.value, 0) })}
              />
            </Field>
            <Field label="Min condition">
              <input
                className="field-input"
                type="number"
                min={0}
                max={1}
                step={0.05}
                value={draft["Minimum condition (0.0 - 1.0)"]}
                onChange={(e) => setDraft({ ...draft, "Minimum condition (0.0 - 1.0)": num(e.target.value, 1) })}
              />
            </Field>
            <Field label="Max condition">
              <input
                className="field-input"
                type="number"
                min={0}
                max={1}
                step={0.05}
                value={draft["Maximum condition (0.0 - 1.0)"]}
                onChange={(e) => setDraft({ ...draft, "Maximum condition (0.0 - 1.0)": num(e.target.value, 1) })}
              />
            </Field>
          </div>
          <div className="mt-3 space-y-2">
            <Toggle
              label="Spawn as blueprint"
              checked={!!draft["Spawn as blueprint"]}
              onChange={(v) => setDraft({ ...draft, "Spawn as blueprint": v })}
            />
            <Toggle
              label="Spawn with extra item"
              checked={!!draft["Spawn with"]}
              onChange={(v) =>
                setDraft({
                  ...draft,
                  "Spawn with": v
                    ? {
                        Shortname: draft["Spawn with"]?.Shortname || "",
                        Minimum: draft["Spawn with"]?.Minimum ?? 1,
                        Maximum: draft["Spawn with"]?.Maximum ?? 1,
                        SkinID: draft["Spawn with"]?.SkinID ?? 0,
                        "Spawn as blueprint": false,
                        "Probability (0.0 - 1.0)": 1,
                        "Spawn with": null,
                      }
                    : null,
                })
              }
            />
          </div>
          {draft["Spawn with"] ? (
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <Field label="Companion shortname">
                <input
                  className="field-input"
                  value={draft["Spawn with"].Shortname}
                  onChange={(e) =>
                    setDraft({ ...draft, "Spawn with": { ...draft["Spawn with"]!, Shortname: e.target.value } })
                  }
                />
              </Field>
              <Field label="Companion skin">
                <input
                  className="field-input"
                  type="number"
                  value={draft["Spawn with"].SkinID}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      "Spawn with": { ...draft["Spawn with"]!, SkinID: num(e.target.value, 0) },
                    })
                  }
                />
              </Field>
              <Field label="Companion min">
                <input
                  className="field-input"
                  type="number"
                  value={draft["Spawn with"].Minimum}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      "Spawn with": { ...draft["Spawn with"]!, Minimum: num(e.target.value, 1) },
                    })
                  }
                />
              </Field>
              <Field label="Companion max">
                <input
                  className="field-input"
                  type="number"
                  value={draft["Spawn with"].Maximum}
                  onChange={(e) =>
                    setDraft({
                      ...draft,
                      "Spawn with": { ...draft["Spawn with"]!, Maximum: num(e.target.value, 1) },
                    })
                  }
                />
              </Field>
            </div>
          ) : null}
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" className="btn" disabled={lookupBusy} onClick={() => void lookupSkin()}>
              <Skull className="h-4 w-4" /> {lookupBusy ? "Looking up…" : "Lookup skin icon"}
            </button>
            <button type="button" className="btn-primary" onClick={saveEditor}>
              Save row
            </button>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted">
            Custom ZHH workshop skins already in this table have preview images. New SkinIDs can be looked up here.
            Preview URLs stay in this browser and are not written into the plugin JSON.
          </p>
        </Modal>
      ) : null}

      {pickerOpen ? (
        <Modal title="Add item from catalog" onClose={() => setPickerOpen(false)} wide>
          <div className="mb-3 flex flex-wrap gap-2">
            <input
              className="field-input min-w-40 flex-1"
              type="search"
              placeholder="Search 1200+ Rust items…"
              value={pickerQ}
              onChange={(e) => setPickerQ(e.target.value)}
            />
            <select className="field-input w-auto" value={pickerCat} onChange={(e) => setPickerCat(e.target.value)}>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c === "all" ? "All categories" : c}
                </option>
              ))}
            </select>
            <span className="self-center text-xs text-muted">
              {pickerList.length} shown · {CATALOG.length} in catalog
            </span>
          </div>
          <div className="grid max-h-[60vh] grid-cols-1 gap-2 overflow-auto sm:grid-cols-2">
            {pickerList.map((x) => (
              <button
                key={x.s}
                type="button"
                className="flex items-center gap-3 rounded-xl border border-line bg-bg px-3 py-2 text-left hover:border-accent"
                onClick={() => addItem({ Shortname: x.s })}
              >
                <ItemArt shortname={x.s} />
                <span className="min-w-0">
                  <b className="block truncate">{x.n}</b>
                  <code className="text-xs text-faint">{x.s}</code>
                </span>
              </button>
            ))}
          </div>
        </Modal>
      ) : null}

      {bulkOpen ? (
        <Modal title="Set chance on selected rows" onClose={() => setBulkOpen(false)}>
          <p className="mb-2 text-sm text-muted">{selected.size} rows. Enter 0–1 or a percent like 25.</p>
          <input className="field-input" value={bulkRaw} onChange={(e) => setBulkRaw(e.target.value)} />
          <button
            type="button"
            className="btn-primary mt-3"
            onClick={() => {
              let p = Number(bulkRaw);
              if (p > 1) p = p / 100;
              p = clamp(p, 0, 1);
              const next = clone(config);
              for (const i of selected) rowsOf(next)[i]["Probability (0.0 - 1.0)"] = p;
              commit(next);
              setBulkOpen(false);
            }}
          >
            Apply
          </button>
        </Modal>
      ) : null}

      {quickOpen ? (
        <Modal title="Add by shortname" onClose={() => setQuickOpen(false)}>
          <input
            className="field-input"
            placeholder="scrap, syringe.medical"
            value={quickShort}
            onChange={(e) => setQuickShort(e.target.value)}
          />
          <button
            type="button"
            className="btn-primary mt-3"
            onClick={() => {
              const short = quickShort.trim();
              if (!short) return;
              addItem({ Shortname: short });
              setQuickShort("");
              setQuickOpen(false);
            }}
          >
            Add
          </button>
        </Modal>
      ) : null}

      {toast ? (
        <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg shadow-lg">
          {toast}
        </div>
      ) : null}
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-line bg-surface px-3 py-3">
      <b className="block font-display text-2xl leading-none">{value}</b>
      <span className="mt-1 block text-xs text-muted">{label}</span>
    </div>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex min-h-11 items-center justify-between gap-3 text-sm">
      <span>{label}</span>
      <input type="checkbox" className="h-5 w-5 accent-accent" checked={checked} onChange={(e) => onChange(e.target.checked)} />
    </label>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block text-xs text-muted">
      {label}
      <div className="mt-1">{children}</div>
    </label>
  );
}

function Modal({
  title,
  onClose,
  children,
  wide,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className="fixed inset-0 z-40 grid place-items-end bg-black/60 p-3 sm:place-items-center" onClick={onClose}>
      <div
        className={`max-h-[92vh] w-full overflow-auto rounded-2xl border border-line bg-surface p-4 shadow-2xl ${wide ? "max-w-3xl" : "max-w-xl"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between gap-3">
          <strong className="font-display text-xl tracking-wide">{title}</strong>
          <button type="button" className="btn" onClick={onClose}>
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

import { useEffect, useMemo, useState } from "react";
import { Download, Plus, Search, Trash2 } from "lucide-react";
import { AppNav } from "@/components/app-nav";
import { useEditor } from "@/lib/editor-store";
import { CATALOG, catalogHit, clone, itemIcon } from "@/lib/loot";
import { SLOT_LABEL, NPC_STATS, loadoutsOf, readStat, wearSlot, writeStat, type Loadout, type WearItem } from "@/lib/wear";

const NAMES = "Potential names for zombies using this loadout (chosen at random)";
const PROFILES = "Horde Profiles (profile name, list of applicable loadouts)";

export function ClothingEditor() {
  const config = useEditor((s) => s.config);
  const dirty = useEditor((s) => s.dirty);
  const hydrate = useEditor((s) => s.hydrate);
  const commit = useEditor((s) => s.commit);
  const markClean = useEditor((s) => s.markClean);
  const loadouts = loadoutsOf(config);
  const [index, setIndex] = useState(0);
  const [q, setQ] = useState("");
  const [npcQuery, setNpcQuery] = useState("");
  const [addKind, setAddKind] = useState<"belt" | "wear">("belt");
  const [toast, setToast] = useState("");

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const safeIndex = Math.min(index, Math.max(0, loadouts.length - 1));
  const loadout = loadouts[safeIndex];
  const wear = loadout?.WearItems ?? [];
  const belt = (loadout?.BeltItems as WearItem[] | undefined) ?? [];
  const npcName = loadout?.[NAMES]?.[0] || loadout?.LoadoutID || "NPC";

  const shownNpcs = useMemo(() => {
    const query = npcQuery.trim().toLowerCase();
    return loadouts
      .map((row, i) => ({ row, i }))
      .filter(({ row }) => {
        if (!query) return true;
        const gear = [...(row.WearItems ?? []), ...((row.BeltItems as WearItem[] | undefined) ?? [])]
          .map((item) => `${item.Shortname} ${catalogHit(item.Shortname)?.n ?? ""}`)
          .join(" ");
        const haystack = `${row[NAMES]?.join(" ") ?? ""} ${row.LoadoutID} ${gear}`.toLowerCase();
        return haystack.includes(query);
      });
  }, [loadouts, npcQuery]);

  const catalog = useMemo(() => {
    const query = q.trim().toLowerCase();
    const cats = addKind === "belt" ? new Set(["Weapon", "Tool"]) : new Set(["Attire"]);
    return CATALOG.filter((item) => cats.has(item.c))
      .filter((item) => !query || `${item.s} ${item.n}`.toLowerCase().includes(query))
      .slice(0, 48);
  }, [q, addKind]);

  function writeList(field: "WearItems" | "BeltItems", nextItems: WearItem[]) {
    const next = clone(config);
    const list = loadoutsOf(next);
    if (!list[safeIndex]) return;
    list[safeIndex][field] = nextItems;
    commit(next);
  }

  function rename(name: string) {
    const next = clone(config);
    const list = loadoutsOf(next);
    if (!list[safeIndex]) return;
    const names = list[safeIndex][NAMES];
    if (names?.length) names[0] = name;
    else list[safeIndex][NAMES] = [name];
    commit(next);
  }

  function setStat(key: (typeof NPC_STATS)[number]["key"], raw: string) {
    const spec = NPC_STATS.find((stat) => stat.key === key);
    const value = Number(raw);
    if (!spec || !Number.isFinite(value)) return;
    const next = clone(config);
    const row = loadoutsOf(next)[safeIndex];
    if (!row) return;
    const places = spec.step < 1 ? 2 : 0;
    const snapped = Number((Math.round(value / spec.step) * spec.step).toFixed(places));
    const clamped = Math.max(spec.min, Math.min(spec.max, snapped));
    writeStat(row, key, clamped);
    commit(next);
  }

  function addNpc() {
    const next = clone(config);
    const list = loadoutsOf(next);
    if (!list[0]) return;
    const base = clone(list[0]) as Loadout;
    const used = new Set(list.map((row) => row.LoadoutID));
    let n = list.length;
    let id = `loadout-${n}`;
    while (used.has(id)) {
      n += 1;
      id = `loadout-${n}`;
    }
    base.LoadoutID = id;
    base[NAMES] = ["New NPC"];
    base.WearItems = [];
    base.BeltItems = [];
    base.MainItems = [];
    list.push(base);
    const profiles = next[PROFILES] as Record<string, string[]> | undefined;
    if (profiles) {
      for (const ids of Object.values(profiles)) {
        if (Array.isArray(ids) && !ids.includes(id)) ids.push(id);
      }
    }
    commit(next);
    setIndex(list.length - 1);
    setToast("Added New NPC");
    window.setTimeout(() => setToast(""), 1800);
  }

  function download() {
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "ZombieHorde.json";
    a.click();
    URL.revokeObjectURL(a.href);
    markClean();
    setToast("Downloaded ZombieHorde.json");
    window.setTimeout(() => setToast(""), 1800);
  }

  return (
    <main className="mx-auto max-w-[1480px] px-4 pt-5 pb-24 sm:px-5">
      <AppNav />
      <header className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl leading-none font-bold tracking-wide">NPC table</h1>
          <p className={`mt-1 text-sm ${dirty ? "text-accent" : "text-muted"}`}>
            Wear items on each horde loadout{dirty ? " · unsaved edits" : ""}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn-primary" onClick={addNpc}>
            <Plus className="h-4 w-4" /> Add NPC
          </button>
          <button type="button" className="btn" onClick={download}>
            <Download className="h-4 w-4" /> Download ZombieHorde.json
          </button>
        </div>
      </header>

      <div className="grid gap-3 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="panel max-h-[80vh] overflow-auto">
          <h2 className="panel-title">NPCs</h2>
          <div className="relative px-3 pb-2">
            <Search className="pointer-events-none absolute top-2.5 left-5 h-4 w-4 text-faint" />
            <input
              className="field-input pl-8"
              type="search"
              value={npcQuery}
              placeholder="Search name, weapon, clothing…"
              onChange={(e) => setNpcQuery(e.target.value)}
            />
          </div>
          <ul>
            {shownNpcs.length === 0 ? <li className="px-3 py-4 text-sm text-muted">No NPCs match.</li> : null}
            {shownNpcs.map(({ row, i }) => {
              const name = row[NAMES]?.[0] || row.LoadoutID;
              return (
                <li key={row.LoadoutID || i}>
                  <button
                    type="button"
                    className={`flex min-h-11 w-full items-center px-3 text-left text-sm ${i === safeIndex ? "bg-accent text-accent-ink" : "text-fg hover:bg-bg-2"}`}
                    onClick={() => setIndex(i)}
                  >
                    <span className="min-w-0">
                      <span className="block truncate">{name}</span>
                      <span className={`block text-xs ${i === safeIndex ? "text-accent-ink/80" : "text-faint"}`}>
                        {readStat(row, "health")} hp · {readStat(row, "damage")} dmg
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </aside>

        <section className="panel">
          <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line p-4">
            <label className="min-w-56 flex-1 text-xs text-muted">
              NPC name
              <input className="field-input mt-1 text-base" value={npcName} onChange={(e) => rename(e.target.value)} />
            </label>
            <p className="text-xs text-faint">{loadout?.LoadoutID}</p>
          </div>

          {loadout ? (
            <div className="border-b border-line p-4">
              <h2 className="mb-3 font-display text-xl tracking-wide">Stats</h2>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {NPC_STATS.map((stat) => {
                  const value = readStat(loadout, stat.key);
                  return (
                    <label key={stat.key} className="text-xs text-muted">
                      <span className="flex items-center justify-between gap-2">
                        {stat.label}
                        <span className="font-semibold text-fg">{value}</span>
                      </span>
                      <input
                        className="mt-2 h-8 w-full accent-accent"
                        type="range"
                        min={stat.min}
                        max={stat.max}
                        step={stat.step}
                        value={Math.min(stat.max, Math.max(stat.min, value))}
                        onChange={(e) => setStat(stat.key, e.target.value)}
                      />
                      <input
                        className="field-input mt-1"
                        type="number"
                        min={stat.min}
                        max={stat.max}
                        step={stat.step}
                        value={value}
                        onChange={(e) => setStat(stat.key, e.target.value)}
                      />
                    </label>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div className="grid gap-4 p-4 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div className="space-y-6">
              <GearList
                title="Belt items"
                empty="No weapons on the belt."
                items={belt}
                kind="belt"
                onChange={(next) => writeList("BeltItems", next)}
              />
              <GearList
                title="Worn items"
                empty="Nothing equipped."
                items={wear}
                kind="wear"
                onChange={(next) => writeList("WearItems", next)}
              />
            </div>

            <div>
              <div className="mb-3 flex gap-2">
                <button
                  type="button"
                  className={`inline-flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold ${addKind === "belt" ? "bg-accent text-accent-ink" : "border border-line bg-surface text-muted"}`}
                  onClick={() => setAddKind("belt")}
                >
                  Weapons
                </button>
                <button
                  type="button"
                  className={`inline-flex min-h-11 items-center rounded-xl px-4 text-sm font-semibold ${addKind === "wear" ? "bg-accent text-accent-ink" : "border border-line bg-surface text-muted"}`}
                  onClick={() => setAddKind("wear")}
                >
                  Clothing
                </button>
              </div>
              <input
                className="field-input"
                value={q}
                placeholder={addKind === "belt" ? "Search clubs, guns, tools…" : "Search helmets, jackets, boots…"}
                onChange={(e) => setQ(e.target.value)}
              />
              <ul className="mt-3 grid max-h-[70vh] grid-cols-2 gap-2 overflow-auto">
                {catalog.map((item) => (
                  <li key={item.s}>
                    <button
                      type="button"
                      className="flex min-h-20 w-full flex-col items-center gap-1 rounded-xl border border-line bg-bg px-2 py-2 text-center hover:border-accent"
                      onClick={() => {
                        const piece = { Shortname: item.s, SkinID: 0, Amount: 1 };
                        if (addKind === "belt") writeList("BeltItems", [...belt, piece]);
                        else writeList("WearItems", [...wear, piece]);
                      }}
                    >
                      <img src={itemIcon(item.s)} alt="" className="h-14 w-14 object-contain" />
                      <span className="line-clamp-2 text-xs font-semibold">{item.n}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      {toast ? (
        <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg">
          {toast}
        </div>
      ) : null}
    </main>
  );
}

function GearList({
  title,
  empty,
  items,
  kind,
  onChange,
}: {
  title: string;
  empty: string;
  items: WearItem[];
  kind: "belt" | "wear";
  onChange: (next: WearItem[]) => void;
}) {
  return (
    <div>
      <h2 className="mb-3 font-display text-xl tracking-wide">{title}</h2>
      {items.length === 0 ? <p className="text-sm text-muted">{empty}</p> : null}
      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item, i) => (
          <li key={`${item.Shortname}-${i}`} className="rounded-2xl border border-line bg-bg p-3">
            <div className="flex items-center gap-3">
              <img src={itemIcon(item.Shortname)} alt="" className="h-20 w-20 rounded-xl bg-surface object-contain" />
              <div className="min-w-0 flex-1">
                <div className="truncate text-base font-semibold">{catalogHit(item.Shortname)?.n || item.Shortname}</div>
                <div className="text-sm text-faint">
                  {kind === "wear" ? `${SLOT_LABEL[wearSlot(item.Shortname)]} · ` : ""}
                  {item.Shortname}
                </div>
              </div>
              <button type="button" className="btn" onClick={() => onChange(items.filter((_, n) => n !== i))}>
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className={`mt-3 grid gap-2 ${kind === "belt" ? "grid-cols-2" : ""}`}>
              <label className="block text-xs text-muted">
                SkinID
                <input
                  className="field-input mt-1"
                  type="number"
                  min={0}
                  value={item.SkinID || 0}
                  onChange={(e) =>
                    onChange(items.map((row, n) => (n === i ? { ...row, SkinID: Number(e.target.value) || 0 } : row)))
                  }
                />
              </label>
              {kind === "belt" ? (
                <label className="block text-xs text-muted">
                  Amount
                  <input
                    className="field-input mt-1"
                    type="number"
                    min={1}
                    value={item.Amount || 1}
                    onChange={(e) =>
                      onChange(
                        items.map((row, n) => (n === i ? { ...row, Amount: Math.max(1, Number(e.target.value) || 1) } : row)),
                      )
                    }
                  />
                </label>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

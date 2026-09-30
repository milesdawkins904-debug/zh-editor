import { useEffect, useMemo, useState } from "react";
import { Download, Plus, Trash2 } from "lucide-react";
import { AppNav } from "@/components/app-nav";
import { useEditor } from "@/lib/editor-store";
import { CATALOG, catalogHit, clone, itemIcon } from "@/lib/loot";
import { SLOT_LABEL, loadoutsOf, wearSlot, type Loadout, type WearItem } from "@/lib/wear";

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
  const [toast, setToast] = useState("");

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const safeIndex = Math.min(index, Math.max(0, loadouts.length - 1));
  const loadout = loadouts[safeIndex];
  const wear = loadout?.WearItems ?? [];
  const npcName = loadout?.[NAMES]?.[0] || loadout?.LoadoutID || "NPC";

  const catalog = useMemo(() => {
    const query = q.trim().toLowerCase();
    return CATALOG.filter((item) => item.c === "Attire")
      .filter((item) => !query || `${item.s} ${item.n}`.toLowerCase().includes(query))
      .slice(0, 48);
  }, [q]);

  function writeWear(nextWear: WearItem[]) {
    const next = clone(config);
    const list = loadoutsOf(next);
    if (!list[safeIndex]) return;
    list[safeIndex].WearItems = nextWear;
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
          <h1 className="font-display text-3xl leading-none font-bold tracking-wide">NPC clothing</h1>
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
          <ul>
            {loadouts.map((row, i) => {
              const name = row[NAMES]?.[0] || row.LoadoutID;
              return (
                <li key={row.LoadoutID || i}>
                  <button
                    type="button"
                    className={`flex min-h-11 w-full items-center px-3 text-left text-sm ${i === safeIndex ? "bg-accent text-accent-ink" : "text-fg hover:bg-bg-2"}`}
                    onClick={() => setIndex(i)}
                  >
                    <span className="truncate">{name}</span>
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

          <div className="grid gap-4 p-4 xl:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              <h2 className="mb-3 font-display text-xl tracking-wide">Worn items</h2>
              {wear.length === 0 ? <p className="text-sm text-muted">Nothing equipped.</p> : null}
              <ul className="grid gap-3 sm:grid-cols-2">
                {wear.map((item, i) => (
                  <li key={`${item.Shortname}-${i}`} className="rounded-2xl border border-line bg-bg p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={itemIcon(item.Shortname)}
                        alt=""
                        className="h-20 w-20 rounded-xl bg-surface object-contain"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-base font-semibold">
                          {catalogHit(item.Shortname)?.n || item.Shortname}
                        </div>
                        <div className="text-sm text-faint">
                          {SLOT_LABEL[wearSlot(item.Shortname)]} · {item.Shortname}
                        </div>
                      </div>
                      <button type="button" className="btn" onClick={() => writeWear(wear.filter((_, n) => n !== i))}>
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <label className="mt-3 block text-xs text-muted">
                      SkinID
                      <input
                        className="field-input mt-1"
                        type="number"
                        min={0}
                        value={item.SkinID || 0}
                        onChange={(e) => {
                          const next = wear.map((row, n) =>
                            n === i ? { ...row, SkinID: Number(e.target.value) || 0 } : row,
                          );
                          writeWear(next);
                        }}
                      />
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 font-display text-xl tracking-wide">Add attire</h2>
              <input
                className="field-input"
                value={q}
                placeholder="Search helmets, jackets, boots…"
                onChange={(e) => setQ(e.target.value)}
              />
              <ul className="mt-3 grid max-h-[70vh] grid-cols-2 gap-2 overflow-auto">
                {catalog.map((item) => (
                  <li key={item.s}>
                    <button
                      type="button"
                      className="flex min-h-20 w-full flex-col items-center gap-1 rounded-xl border border-line bg-bg px-2 py-2 text-center hover:border-accent"
                      onClick={() => writeWear([...wear, { Shortname: item.s, SkinID: 0, Amount: 1 }])}
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

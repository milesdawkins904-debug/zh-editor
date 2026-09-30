import bundled from "@/data/default-config.json";
import catalogJson from "@/data/items.json";

export type CatalogItem = { s: string; n: string; c: string; k?: number; id?: number };

export type SpawnWith = {
  Shortname: string;
  Minimum: number;
  Maximum: number;
  SkinID: number;
  "Spawn as blueprint": boolean;
  "Probability (0.0 - 1.0)": number;
  "Spawn with": null;
};

export type LootRow = {
  Shortname: string;
  ItemName: string;
  Minimum: number;
  Maximum: number;
  SkinID: number;
  "Spawn as blueprint": boolean;
  "Probability (0.0 - 1.0)": number;
  "Minimum condition (0.0 - 1.0)": number;
  "Maximum condition (0.0 - 1.0)": number;
  "Spawn with": SpawnWith | null;
};

export type ZhConfig = {
  "Loot Table": {
    "Drop inventory on death instead of random loot": boolean;
    "Drop default murderer loot on death instead of random loot": boolean;
    "Drop one of the specified AlphaLoot profiles as loot": string[];
    "Random loot table": {
      "Minimum amount of items to spawn": number;
      "Maximum amount of items to spawn": number;
      List: LootRow[];
    };
    "Dropped inventory item blacklist (shortnames)": string[];
  };
  [key: string]: unknown;
};

export const KEYS = {
  dropInv: "Drop inventory on death instead of random loot",
  dropMurder: "Drop default murderer loot on death instead of random loot",
  alpha: "Drop one of the specified AlphaLoot profiles as loot",
  table: "Random loot table",
  min: "Minimum amount of items to spawn",
  max: "Maximum amount of items to spawn",
  list: "List",
  blacklist: "Dropped inventory item blacklist (shortnames)",
} as const;

export const SKIN_PREVIEWS: Record<number, string> = {
  3205195553:
    "https://images.steamusercontent.com/ugc/2506889599733075752/C686568A187E8FA504911825951F88D1E9A78884/",
  3241601264:
    "https://images.steamusercontent.com/ugc/2471989872562944227/F0E9792B79326AC00FE9DE6722C9F3E2D13A01A6/",
  3242051288:
    "https://images.steamusercontent.com/ugc/2471990508178575145/5836ED98F561E8D22F757ED906AB3F29776337FA/",
  3242051538:
    "https://images.steamusercontent.com/ugc/2471990508166995052/66E5EC179F7271547E43D7BC33DC36DAD1C6B84D/",
  3242051715:
    "https://images.steamusercontent.com/ugc/2471990508166996481/6E8A70B4E83FD29E756053B3D1C7F46F86D581AC/",
  3242051845:
    "https://images.steamusercontent.com/ugc/2471990508166997686/AFFE99114B61B501B9791A72FBFF3B240C78483D/",
  3242052032:
    "https://images.steamusercontent.com/ugc/2471990508166998884/26370EA79F3B8D9C8AC15D0C67895EACB9B5D84C/",
  3242052177:
    "https://images.steamusercontent.com/ugc/2471990508167000031/1A9D23276F80DF1C36497A3000A0FB0A9D260E54/",
  3242053234:
    "https://images.steamusercontent.com/ugc/2471990508167007929/E017B84D7C403BAEBED17CFA38E0CDA59349D706/",
  3242054597:
    "https://images.steamusercontent.com/ugc/2471990508167019217/4E8AD8659B6249A26EF637DE5A9B0D7DEB2849E4/",
  3242055401:
    "https://images.steamusercontent.com/ugc/2471990508167025888/29DE4D2EF6C7663D07F84DA9B3BAD4E225242DAC/",
  3255499539:
    "https://images.steamusercontent.com/ugc/2450599769593402675/589C9C28B17CD6FCFAA2263E2887484848088EBF/",
};

export const CATALOG = catalogJson as CatalogItem[];

const catalogMap = new Map(CATALOG.map((it) => [it.s, it]));

export const CATEGORIES = [
  "all",
  ...Array.from(new Set(CATALOG.map((x) => x.c))).sort((a, b) => a.localeCompare(b)),
];

export function itemIcon(shortname: string) {
  return `https://wiki.rustclash.com/img/items180/${encodeURIComponent(shortname)}.png`;
}

export function catalogHit(shortname: string) {
  return catalogMap.get(shortname);
}

export function displayName(it: LootRow) {
  if (it.ItemName) return it.ItemName;
  return catalogHit(it.Shortname)?.n ?? it.Shortname;
}

export function blankItem(): LootRow {
  return {
    Shortname: "scrap",
    ItemName: "",
    Minimum: 1,
    Maximum: 1,
    SkinID: 0,
    "Spawn as blueprint": false,
    "Probability (0.0 - 1.0)": 0.25,
    "Minimum condition (0.0 - 1.0)": 1,
    "Maximum condition (0.0 - 1.0)": 1,
    "Spawn with": null,
  };
}

export function clone<T>(o: T): T {
  return JSON.parse(JSON.stringify(o)) as T;
}

export function num(v: unknown, d = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? n : d;
}

export function clamp(n: number, a: number, b: number) {
  if (!Number.isFinite(n)) return a;
  return Math.min(b, Math.max(a, n));
}

export function normalizeLoaded(cfg: ZhConfig): ZhConfig {
  if (!cfg || !cfg["Loot Table"]) throw new Error("Not a ZombieHorde config — missing Loot Table");
  const L = cfg["Loot Table"];
  L[KEYS.table] = L[KEYS.table] || {
    [KEYS.min]: 1,
    [KEYS.max]: 1,
    [KEYS.list]: [],
  };
  L[KEYS.table][KEYS.list] = L[KEYS.table][KEYS.list] || [];
  L[KEYS.alpha] = L[KEYS.alpha] || [];
  L[KEYS.blacklist] = L[KEYS.blacklist] || [];
  L[KEYS.dropInv] = !!L[KEYS.dropInv];
  L[KEYS.dropMurder] = !!L[KEYS.dropMurder];
  for (const it of L[KEYS.table][KEYS.list]) {
    if (it.ItemName == null) it.ItemName = "";
    if (it.SkinID == null) it.SkinID = 0;
    if (it["Probability (0.0 - 1.0)"] == null) it["Probability (0.0 - 1.0)"] = 1;
    if (it.Minimum == null) it.Minimum = 1;
    if (it.Maximum == null) it.Maximum = 1;
    if (it["Minimum condition (0.0 - 1.0)"] == null) it["Minimum condition (0.0 - 1.0)"] = 1;
    if (it["Maximum condition (0.0 - 1.0)"] == null) it["Maximum condition (0.0 - 1.0)"] = 1;
    if (it["Spawn as blueprint"] == null) it["Spawn as blueprint"] = false;
    if (it["Spawn with"] == null) it["Spawn with"] = null;
  }
  return cfg;
}

export function bundledConfig() {
  return normalizeLoaded(clone(bundled as ZhConfig));
}

export function rowsOf(cfg: ZhConfig) {
  return cfg["Loot Table"][KEYS.table][KEYS.list];
}

export function tableOf(cfg: ZhConfig) {
  return cfg["Loot Table"][KEYS.table];
}

export type RolledDrop = {
  row: LootRow | SpawnWith;
  amount: number;
  companion: boolean;
};

export type CorpseRoll = {
  mode: "table" | "inventory" | "murderer";
  slotsWanted: number;
  drops: RolledDrop[];
};

function stackAmount(min: number, max: number) {
  const lo = Math.min(num(min, 1), num(max, 1));
  const hi = Math.max(num(min, 1), num(max, 1));
  return lo + Math.floor(Math.random() * (hi - lo + 1));
}

/** One corpse, matching ZombieHorde: pick a slot count, shuffle the table, keep a row when its probability beats a fresh 0–1 roll, stop at the slot count. Spawn-with items ride along and do not take a slot. */
export function rollCorpse(cfg: ZhConfig): CorpseRoll {
  const loot = cfg["Loot Table"];
  if (loot[KEYS.dropInv]) return { mode: "inventory", slotsWanted: 0, drops: [] };
  if (loot[KEYS.dropMurder]) return { mode: "murderer", slotsWanted: 0, drops: [] };

  const table = tableOf(cfg);
  const minSlots = Math.max(0, num(table[KEYS.min], 0));
  const maxSlots = Math.max(minSlots, num(table[KEYS.max], minSlots));
  const slotsWanted = minSlots + Math.floor(Math.random() * (maxSlots - minSlots + 1));
  const pool = [...rowsOf(cfg)];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const swap = pool[i];
    pool[i] = pool[j];
    pool[j] = swap;
  }

  const drops: RolledDrop[] = [];
  let filled = 0;
  for (const row of pool) {
    if (filled >= slotsWanted) break;
    const p = Number(row["Probability (0.0 - 1.0)"]) || 0;
    if (Math.random() > p) continue;
    drops.push({ row, amount: stackAmount(row.Minimum, row.Maximum), companion: false });
    filled += 1;
    const withItem = row["Spawn with"];
    if (withItem?.Shortname) {
      drops.push({
        row: withItem,
        amount: stackAmount(withItem.Minimum, withItem.Maximum),
        companion: true,
      });
    }
  }
  return { mode: "table", slotsWanted, drops };
}

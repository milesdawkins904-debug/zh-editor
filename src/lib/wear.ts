import type { ZhConfig } from "@/lib/loot";

export type WearItem = { Shortname: string; SkinID: number; Amount: number };

export type Loadout = {
  LoadoutID: string;
  "Potential names for zombies using this loadout (chosen at random)": string[];
  WearItems: WearItem[];
  [key: string]: unknown;
};

export type BodySlot = "head" | "torso" | "legs" | "feet" | "hands" | "full";

export function loadoutsOf(cfg: ZhConfig): Loadout[] {
  const members = cfg["Horde Member Options"] as { Loadouts?: Loadout[] } | undefined;
  return members?.Loadouts ?? [];
}

export function wearSlot(shortname: string): BodySlot {
  const s = shortname.toLowerCase();
  if (s.includes("hazmat") || s.includes("mummysuit") || s.endsWith("suit")) return "full";
  if (s.includes("glove")) return "hands";
  if (s.includes("boot") || s.includes("shoe")) return "feet";
  if (s.includes("pants") || s.includes("legs") || s.includes("kilt") || s.includes("skirt")) return "legs";
  if (
    s.includes("helmet") ||
    s.includes("facemask") ||
    s.includes("mask") ||
    s.includes("hat.") ||
    s.startsWith("hat") ||
    s.includes("hood") ||
    s.includes("bandana") ||
    s.endsWith(".head") ||
    s.endsWith("head")
  ) {
    return "head";
  }
  return "torso";
}

export const SLOT_LABEL: Record<BodySlot, string> = {
  head: "Head",
  torso: "Torso",
  legs: "Legs",
  feet: "Feet",
  hands: "Hands",
  full: "Full body",
};

export type StatKey = "health" | "damage" | "aim" | "attack" | "speed" | "sense" | "listen" | "vision";

export const NPC_STATS: { key: StatKey; label: string; min: number; max: number; step: number }[] = [
  { key: "health", label: "Health", min: 1, max: 500, step: 1 },
  { key: "damage", label: "Damage multiplier", min: 0, max: 5, step: 0.05 },
  { key: "aim", label: "Aim cone scale", min: 0, max: 10, step: 0.1 },
  { key: "attack", label: "Attack range", min: 0, max: 5, step: 0.1 },
  { key: "speed", label: "Move speed", min: 0, max: 15, step: 0.1 },
  { key: "sense", label: "Sense range", min: 0, max: 200, step: 1 },
  { key: "listen", label: "Listen range", min: 0, max: 250, step: 1 },
  { key: "vision", label: "Vision cone", min: 0, max: 180, step: 1 },
];

function group(row: Loadout, key: "Vitals" | "Movement" | "Sensory") {
  const current = row[key];
  if (current && typeof current === "object") return current as Record<string, number>;
  const created: Record<string, number> = {};
  row[key] = created;
  return created;
}

function num(value: unknown, fallback: number) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

export function readStat(row: Loadout, key: StatKey) {
  const vitals = row.Vitals as { Health?: number } | undefined;
  const move = row.Movement as { Speed?: number } | undefined;
  const sense = row.Sensory as Record<string, number> | undefined;
  switch (key) {
    case "health":
      return num(vitals?.Health, 5);
    case "damage":
      return num(row["Damage multiplier"], 0.1);
    case "aim":
      return num(row["Aim cone scale (for projectile weapons)"], 2);
    case "attack":
      return num(sense?.["Attack range multiplier"], 1);
    case "speed":
      return num(move?.Speed, 3.5);
    case "sense":
      return num(sense?.["Sense range"], 48);
    case "listen":
      return num(sense?.["Listen range"], 96);
    case "vision":
      return num(sense?.["Vision cone (0 - 180 degrees)"], 180);
  }
}

export function writeStat(row: Loadout, key: StatKey, value: number) {
  switch (key) {
    case "health":
      group(row, "Vitals").Health = value;
      break;
    case "damage":
      row["Damage multiplier"] = value;
      break;
    case "aim":
      row["Aim cone scale (for projectile weapons)"] = value;
      break;
    case "attack":
      group(row, "Sensory")["Attack range multiplier"] = value;
      break;
    case "speed":
      group(row, "Movement").Speed = value;
      break;
    case "sense":
      group(row, "Sensory")["Sense range"] = value;
      break;
    case "listen":
      group(row, "Sensory")["Listen range"] = value;
      break;
    case "vision":
      group(row, "Sensory")["Vision cone (0 - 180 degrees)"] = value;
      break;
  }
}

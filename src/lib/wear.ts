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

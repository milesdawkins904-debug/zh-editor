export const SETTING_GROUPS = [
  {
    title: "Horde size",
    hint: "How many zombies spawn, how big a horde can get, and how they roam.",
    section: "Horde Options",
  },
  {
    title: "Spawn times",
    hint: "Limit horde spawns to a time of day. Hours are 0.0–24.0.",
    section: "Timed Spawn Options",
  },
  {
    title: "Zombie behavior",
    hint: "Rules that apply to every horde member, not one NPC profile.",
    section: "Horde Member Options",
    skip: ["Loadouts"],
  },
] as const;

export function numberRange(key: string, value: number) {
  const k = key.toLowerCase();
  let min = 0;
  let max = 100;
  let step = 1;
  if (k.includes("0.0 - 24")) {
    max = 24;
    step = 0.1;
  } else if (k.includes("multiplier")) {
    max = 10;
    step = 0.05;
  } else if (k.includes("maximum amount of hordes")) {
    max = 1000;
  } else if (k.includes("amount of zombies") || k.includes("spawned zombies") || k.includes("grows in size")) {
    max = 100;
  } else if (k.includes("distance") || k.includes("roam")) {
    max = 2000;
    step = 5;
  } else if (k.includes("seconds") || k.includes("time")) {
    max = 600;
  } else if (k.includes("range") || k.includes("damage")) {
    max = 200;
  }
  return { min, max: Math.max(max, value), step };
}

export function choiceList(key: string, current: string) {
  const match = key.match(/\(([^)]+)\)/);
  if (!match) return null;
  const parts = match[1]
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length < 2 || parts.some((part) => part.includes(" "))) return null;
  if (current === current.toLowerCase()) return parts.map((part) => part.toLowerCase());
  return parts;
}

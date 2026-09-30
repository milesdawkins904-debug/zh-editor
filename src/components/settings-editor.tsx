import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { AppNav } from "@/components/app-nav";
import { useEditor } from "@/lib/editor-store";
import { clone } from "@/lib/loot";
import { SETTING_GROUPS, choiceList, numberRange } from "@/lib/plugin-settings";

export function SettingsEditor() {
  const config = useEditor((s) => s.config);
  const dirty = useEditor((s) => s.dirty);
  const hydrate = useEditor((s) => s.hydrate);
  const commit = useEditor((s) => s.commit);
  const markClean = useEditor((s) => s.markClean);
  const [toast, setToast] = useState("");

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  function setField(section: string, key: string, value: string | number | boolean) {
    const next = clone(config);
    const bag = next[section];
    if (!bag || typeof bag !== "object") return;
    (bag as Record<string, unknown>)[key] = value;
    commit(next);
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

  const horde = config["Horde Options"] as Record<string, unknown> | undefined;
  const perHorde = Number(horde?.["Maximum amount of spawned zombies per horde"] ?? 0);
  const newHorde = Number(horde?.["Amount of zombies to spawn when a new horde is created"] ?? 0);
  const hordeCap = Number(horde?.["Maximum amount of hordes at any given time"] ?? 0);

  return (
    <main className="mx-auto max-w-[1100px] px-4 pt-5 pb-24 sm:px-5">
      <AppNav />
      <header className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl leading-none font-bold tracking-wide">Horde settings</h1>
          <p className={`mt-1 text-sm ${dirty ? "text-accent" : "text-muted"}`}>
            Plugin options shared by every horde{dirty ? " · unsaved edits" : ""}
          </p>
        </div>
        <button type="button" className="btn" onClick={download}>
          <Download className="h-4 w-4" /> Download ZombieHorde.json
        </button>
      </header>

      <section className="mb-4 grid grid-cols-3 gap-2">
        <Stat value={String(newHorde)} label="Zombies in a new horde" />
        <Stat value={String(perHorde)} label="Max zombies per horde" />
        <Stat value={String(hordeCap)} label="Max hordes on the map" />
      </section>

      <div className="space-y-4">
        {SETTING_GROUPS.map((group) => {
          const bag = config[group.section];
          if (!bag || typeof bag !== "object") return null;
          const skip: readonly string[] = "skip" in group ? group.skip : [];
          const entries = Object.entries(bag as Record<string, unknown>).filter(
            ([key, value]) => !skip.includes(key) && (typeof value === "number" || typeof value === "boolean" || typeof value === "string"),
          );
          const numbers = entries.filter(([, value]) => typeof value === "number");
          const texts = entries.filter(([, value]) => typeof value === "string");
          const flags = entries.filter(([, value]) => typeof value === "boolean");
          return (
            <section key={group.section} className="panel">
              <h2 className="panel-title">{group.title}</h2>
              <div className="space-y-4 p-4">
                <p className="text-sm text-muted">{group.hint}</p>
                {numbers.length ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {numbers.map(([key, value]) => {
                      const current = Number(value);
                      const range = numberRange(key, current);
                      return (
                        <label key={key} className="text-xs text-muted">
                          <span className="flex items-center justify-between gap-2">
                            <span>{key}</span>
                            <span className="font-semibold text-fg">{current}</span>
                          </span>
                          <input
                            className="mt-2 h-8 w-full accent-accent"
                            type="range"
                            min={range.min}
                            max={range.max}
                            step={range.step}
                            value={Math.min(range.max, Math.max(range.min, current))}
                            onChange={(e) => setField(group.section, key, Number(e.target.value))}
                          />
                          <input
                            className="field-input mt-1"
                            type="number"
                            min={range.min}
                            step={range.step}
                            value={current}
                            onChange={(e) => {
                              const next = Number(e.target.value);
                              if (Number.isFinite(next)) setField(group.section, key, next);
                            }}
                          />
                        </label>
                      );
                    })}
                  </div>
                ) : null}
                {texts.length ? (
                  <div className="grid gap-3 sm:grid-cols-2">
                    {texts.map(([key, value]) => {
                      const current = String(value);
                      const choices = choiceList(key, current);
                      return (
                        <label key={key} className="text-xs text-muted">
                          {key}
                          {choices ? (
                            <select
                              className="field-input mt-1"
                              value={current}
                              onChange={(e) => setField(group.section, key, e.target.value)}
                            >
                              {choices.map((choice) => (
                                <option key={choice} value={choice}>
                                  {choice}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              className="field-input mt-1"
                              value={current}
                              onChange={(e) => setField(group.section, key, e.target.value)}
                            />
                          )}
                        </label>
                      );
                    })}
                  </div>
                ) : null}
                {flags.length ? (
                  <div className="grid gap-2 sm:grid-cols-2">
                    {flags.map(([key, value]) => (
                      <label key={key} className="flex min-h-11 items-center justify-between gap-3 rounded-xl border border-line bg-bg px-3 text-sm">
                        <span>{key}</span>
                        <input
                          type="checkbox"
                          className="h-5 w-5 shrink-0 accent-accent"
                          checked={Boolean(value)}
                          onChange={(e) => setField(group.section, key, e.target.checked)}
                        />
                      </label>
                    ))}
                  </div>
                ) : null}
              </div>
            </section>
          );
        })}
      </div>
      {toast ? (
        <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg">
          {toast}
        </div>
      ) : null}
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="panel px-3 py-3">
      <div className="font-display text-2xl leading-none">{value}</div>
      <div className="mt-1 text-xs text-muted">{label}</div>
    </div>
  );
}

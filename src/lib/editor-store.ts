import { create } from "zustand";
import { bundledConfig, normalizeLoaded, type ZhConfig } from "@/lib/loot";

export const STORAGE_CFG = "zh-editor-config";

type EditorStore = {
  config: ZhConfig;
  dirty: boolean;
  hydrated: boolean;
  hydrate: () => void;
  commit: (config: ZhConfig, dirty?: boolean) => void;
  markClean: () => void;
  replaceBundled: () => void;
};

export const useEditor = create<EditorStore>((set, get) => ({
  config: bundledConfig(),
  dirty: false,
  hydrated: false,
  hydrate: () => {
    if (get().hydrated) return;
    set({ hydrated: true });
    try {
      const saved = localStorage.getItem(STORAGE_CFG);
      if (saved) set({ config: normalizeLoaded(JSON.parse(saved) as ZhConfig) });
    } catch {
      /* keep bundled */
    }
  },
  commit: (config, dirty = true) => {
    set({ config, dirty });
    localStorage.setItem(STORAGE_CFG, JSON.stringify(config));
  },
  markClean: () => set({ dirty: false }),
  replaceBundled: () => {
    localStorage.removeItem(STORAGE_CFG);
    set({ config: bundledConfig(), dirty: false });
  },
}));

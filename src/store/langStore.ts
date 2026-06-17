import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Locale } from "@/i18n/translations";

type LangStore = {
  locale: Locale;
  set: (l: Locale) => void;
};

export const useLangStore = create<LangStore>()(
  persist(
    (set) => ({
      locale: "en",
      set: (locale) => set({ locale }),
    }),
    { name: "kink-lang" }
  )
);

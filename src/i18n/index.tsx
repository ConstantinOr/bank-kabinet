import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { config } from "../config";
import { en } from "./en";
import { uk } from "./uk";
import type { Dict, Lang } from "./types";

const DICTS: Record<Lang, Dict> = { uk, en };

type Ctx = {
  lang: Lang;
  t: Dict;
  setLang: (l: Lang) => void;
  availableLangs: Lang[];
};

const I18nCtx = createContext<Ctx | null>(null);

function getInitialLang(): Lang {
  if (typeof window === "undefined") return config.defaultLang;
  const stored = window.localStorage.getItem(config.storageKey) as Lang | null;
  if (stored && config.availableLangs.includes(stored)) return stored;
  return config.defaultLang;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    try {
      document.documentElement.lang = lang;
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(config.storageKey, l);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, t: DICTS[lang], setLang, availableLangs: config.availableLangs }),
    [lang, setLang]
  );

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

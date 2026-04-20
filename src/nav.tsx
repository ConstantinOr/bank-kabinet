import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export type AppScreen =
  | "dashboard"
  | "tenders"
  | "tender-create"
  | "tender-card"
  | "tender-winner"
  | "esg"
  | "contractor-card"
  | "staff"
  | "profile"
  | "notif";

export type PublicScreen = "landing" | "apply" | "apply-confirm";

export type Screen = { kind: "public"; id: PublicScreen } | { kind: "app"; id: AppScreen };

type Ctx = {
  screen: Screen;
  goApp: (id: AppScreen) => void;
  goPublic: (id: PublicScreen) => void;
};

const NavCtx = createContext<Ctx | null>(null);

export function NavProvider({ children }: { children: ReactNode }) {
  const [screen, setScreen] = useState<Screen>({ kind: "public", id: "landing" });

  const goApp = useCallback((id: AppScreen) => {
    setScreen({ kind: "app", id });
    window.scrollTo(0, 0);
  }, []);
  const goPublic = useCallback((id: PublicScreen) => {
    setScreen({ kind: "public", id });
    window.scrollTo(0, 0);
  }, []);

  const value = useMemo(() => ({ screen, goApp, goPublic }), [screen, goApp, goPublic]);

  return <NavCtx.Provider value={value}>{children}</NavCtx.Provider>;
}

export function useNav() {
  const ctx = useContext(NavCtx);
  if (!ctx) throw new Error("useNav must be used inside NavProvider");
  return ctx;
}

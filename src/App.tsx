import { useEffect, useState, type ReactNode } from "react";
import { I18nProvider } from "./i18n";
import { NavProvider, useNav } from "./nav";
import { Landing } from "./screens/Landing";
import { Apply, ApplyConfirm } from "./screens/Apply";
import { AppShell } from "./screens/AppShell";
import { config } from "./config";

function Router() {
  const { screen } = useNav();
  if (screen.kind === "app") return <AppShell />;
  switch (screen.id) {
    case "landing":
      return <Landing />;
    case "apply":
      return <Apply />;
    case "apply-confirm":
      return <ApplyConfirm />;
  }
}

function PasswordGate({ children }: { children: ReactNode }) {
  const [value, setValue] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(config.passwordStorageKey);
      if (saved === "ok") {
        setAuthorized(true);
      }
    } finally {
      setChecking(false);
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === config.password) {
      setAuthorized(true);
      window.localStorage.setItem(config.passwordStorageKey, "ok");
      setError("");
    } else {
      setError("Невірний пароль");
    }
  };

  if (checking) return null;

  if (!authorized) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          color: "white",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <form
          onSubmit={onSubmit}
          style={{
            padding: "2rem",
            borderRadius: "0.75rem",
            background: "rgba(15,23,42,0.9)",
            boxShadow:
              "0 20px 40px rgba(15,23,42,0.7), 0 0 0 1px rgba(148,163,184,0.2)",
            width: "100%",
            maxWidth: "360px",
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              marginBottom: "0.5rem",
              fontWeight: 600,
            }}
          >
            Вхід до кабінету
          </h1>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#cbd5f5",
              marginBottom: "1.5rem",
            }}
          >
            Введіть пароль для доступу до застосунку.
          </p>
          <label
            style={{
              display: "block",
              fontSize: "0.8rem",
              marginBottom: "0.35rem",
              color: "#e5e7eb",
            }}
          >
            Пароль
          </label>
          <input
            type="password"
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              width: "100%",
              padding: "0.6rem 0.75rem",
              borderRadius: "0.5rem",
              border: "1px solid #4b5563",
              backgroundColor: "#020617",
              color: "white",
              outline: "none",
              fontSize: "0.9rem",
              boxSizing: "border-box",
              marginBottom: error ? "0.5rem" : "1rem",
            }}
          />
          {error && (
            <div
              style={{
                color: "#fecaca",
                fontSize: "0.8rem",
                marginBottom: "0.75rem",
              }}
            >
              {error}
            </div>
          )}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.6rem 0.75rem",
              borderRadius: "0.5rem",
              border: "none",
              fontWeight: 500,
              background:
                "linear-gradient(135deg, #38bdf8 0%, #6366f1 40%, #a855f7 100%)",
              color: "white",
              cursor: "pointer",
              fontSize: "0.95rem",
            }}
          >
            Увійти
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}

export default function App() {
  return (
    <PasswordGate>
      <I18nProvider>
        <NavProvider>
          <Router />
        </NavProvider>
      </I18nProvider>
    </PasswordGate>
  );
}

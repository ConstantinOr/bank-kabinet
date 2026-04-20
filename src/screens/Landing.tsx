import { useI18n } from "../i18n";
import { useNav } from "../nav";
import { LogoIcon } from "../icons";
import { LangSwitcher } from "../components/LangSwitcher";

export function Landing() {
  const { t } = useI18n();
  const { goApp, goPublic } = useNav();

  return (
    <div style={{ position: "relative" }}>
      <div className="landing-topbar">
        <LangSwitcher />
      </div>
      <div className="auth-wrap">
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <div className="logo-icon">
              <LogoIcon />
            </div>
            <span style={{ fontSize: 22, fontWeight: 600 }}>{t.appName}</span>
            <span
              style={{
                fontSize: 11,
                background: "var(--blue)",
                color: "#fff",
                padding: "2px 7px",
                borderRadius: 4,
                fontWeight: 600,
              }}
            >
              {t.bankBadge}
            </span>
          </div>
          <h1 className="landing-title">
            {t.landingTitle1}
            <br />
            <span>{t.landingTitle2}</span>
          </h1>
          <p className="landing-desc">{t.landingDesc}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 28 }}>
            <button
              className="btn btn-primary"
              style={{ height: 44, padding: "0 28px", fontSize: 15 }}
              onClick={() => goApp("dashboard")}
            >
              {t.landingLogin}
            </button>
            <button
              className="btn btn-outline"
              style={{ height: 44, padding: "0 28px", fontSize: 15 }}
              onClick={() => goPublic("apply")}
            >
              {t.landingRegister}
            </button>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 16,
            maxWidth: 680,
          }}
        >
          <FeatureCard
            bg="var(--accent-light)"
            color="#059669"
            path="M3 3v18h18 M7 16l4-4 4 4 4-4"
            title={t.feat1Title}
            desc={t.feat1Desc}
          />
          <FeatureCard
            bg="var(--blue-light)"
            color="#2563eb"
            path="M9 12h6M9 16h6M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"
            title={t.feat2Title}
            desc={t.feat2Desc}
          />
          <FeatureCard
            bg="var(--amber-light)"
            color="#d97706"
            path="CIRCLE"
            title={t.feat3Title}
            desc={t.feat3Desc}
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  bg,
  color,
  path,
  title,
  desc,
}: {
  bg: string;
  color: string;
  path: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: 20,
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          background: bg,
          borderRadius: 10,
          margin: "0 auto 12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {path === "CIRCLE" ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="1.8" />
            <path d="M12 6v6l4 2" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d={path} stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
      <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{desc}</div>
    </div>
  );
}

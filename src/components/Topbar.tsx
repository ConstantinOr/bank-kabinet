import { useI18n } from "../i18n";
import { useNav, type AppScreen } from "../nav";
import { BellIcon } from "../icons";
import { LangSwitcher } from "./LangSwitcher";

export function Topbar() {
  const { t } = useI18n();
  const { screen, goApp } = useNav();
  const id: AppScreen = screen.kind === "app" ? screen.id : "dashboard";
  const titles: Record<AppScreen, string> = {
    dashboard: t.titleDashboard,
    tenders: t.titleTenders,
    "tender-create": t.titleTenderCreate,
    "tender-card": t.titleTenderCard,
    "tender-winner": t.titleTenderWinner,
    esg: t.titleEsg,
    "contractor-card": t.titleContractor,
    staff: t.titleStaff,
    profile: t.titleProfile,
    notif: t.titleNotif,
  };

  return (
    <div className="topbar">
      <div className="page-title">{titles[id]}</div>
      <div className="topbar-right">
        <div style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--mono)" }}>
          {t.company}
        </div>
        <LangSwitcher />
        <button className="notif-btn" onClick={() => goApp("notif")} aria-label={t.navNotif}>
          <BellIcon width={16} height={16} stroke="var(--text-muted)" />
          <span className="notif-dot" />
        </button>
      </div>
    </div>
  );
}

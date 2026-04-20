import { useI18n } from "../i18n";
import { useNav, type AppScreen } from "../nav";
import {
  LogoIcon,
  DashIcon,
  TenderIcon,
  EsgIcon,
  StaffIcon,
  ProfileIcon,
  BellIcon,
  LogoutIcon,
} from "../icons";

export function Sidebar() {
  const { t } = useI18n();
  const { screen, goApp, goPublic } = useNav();
  const current: AppScreen = screen.kind === "app" ? screen.id : "dashboard";

  const sectionFor = (id: AppScreen): AppScreen => {
    if (id === "tender-create" || id === "tender-card" || id === "tender-winner") return "tenders";
    if (id === "contractor-card") return "esg";
    return id;
  };
  const active = sectionFor(current);

  const item = (id: AppScreen, icon: JSX.Element, label: string, badge?: string) => (
    <button className={`nav-item${active === id ? " active" : ""}`} onClick={() => goApp(id)}>
      {icon}
      {label}
      {badge && <span className="nav-badge">{badge}</span>}
    </button>
  );

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon" style={{ width: 32, height: 32, borderRadius: 6 }}>
          <LogoIcon />
        </div>
        <span>{t.appName}</span>
        <span className="sidebar-badge">{t.bankBadge}</span>
      </div>

      <div className="sidebar-section">
        {item("dashboard", <DashIcon />, t.navDashboard)}
        {item("tenders", <TenderIcon />, t.navTenders, "12")}
        {item("esg", <EsgIcon />, t.navEsg)}
      </div>

      <div className="sidebar-section" style={{ marginTop: 8 }}>
        <div className="sidebar-label">{t.navAccount}</div>
        {item("staff", <StaffIcon />, t.navStaff)}
        {item("profile", <ProfileIcon />, t.navProfile)}
        {item("notif", <BellIcon />, t.navNotif, "3")}
      </div>

      <div className="sidebar-footer">
        <div className="user-chip">
          <div className="user-avatar">ОІ</div>
          <div>
            <div className="user-name">{t.userName}</div>
            <div className="user-role">{t.userRole}</div>
          </div>
        </div>
        <div style={{ padding: 8, marginTop: 4 }}>
          <button
            className="nav-item"
            style={{ padding: "6px 8px" }}
            onClick={() => goPublic("landing")}
          >
            <LogoutIcon />
            <span style={{ fontSize: 12 }}>{t.logout}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

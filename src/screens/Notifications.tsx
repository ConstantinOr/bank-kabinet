import { useI18n } from "../i18n";
import { TenderIcon, EsgIcon, CheckIcon, WarnIcon } from "../icons";

export function Notifications() {
  const { t } = useI18n();

  const items = [
    {
      iconBg: "var(--accent-light)",
      icon: <TenderIcon width={16} height={16} stroke="#059669" />,
      title: t.n1Title,
      sub: t.n1Sub,
      time: t.n1Time,
      unread: true,
    },
    {
      iconBg: "var(--blue-light)",
      icon: <EsgIcon width={16} height={16} stroke="#2563eb" />,
      title: t.n2Title,
      sub: t.n2Sub,
      time: t.n2Time,
      unread: true,
    },
    {
      iconBg: "var(--blue-light)",
      icon: <CheckIcon width={16} height={16} stroke="#2563eb" />,
      title: t.n3Title,
      sub: t.n3Sub,
      time: t.n3Time,
      unread: true,
    },
    {
      iconBg: "var(--amber-light)",
      icon: <WarnIcon width={16} height={16} stroke="#d97706" />,
      title: t.n4Title,
      sub: t.n4Sub,
      time: t.n4Time,
      unread: false,
    },
    {
      iconBg: "var(--gray-light)",
      icon: <TenderIcon width={16} height={16} stroke="var(--text-muted)" />,
      title: t.n5Title,
      sub: t.n5Sub,
      time: t.n5Time,
      unread: false,
    },
  ];

  return (
    <div style={{ maxWidth: 680 }}>
      <div className="card" style={{ padding: "0 20px" }}>
        {items.map((n, i) => (
          <div key={i} className="notif-item">
            <div className="notif-icon" style={{ background: n.iconBg }}>
              {n.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div className="notif-title2">{n.title}</div>
              <div className="notif-sub2">{n.sub}</div>
              <div className="notif-time2">{n.time}</div>
            </div>
            {n.unread && <div className="notif-unread" />}
          </div>
        ))}
      </div>
    </div>
  );
}

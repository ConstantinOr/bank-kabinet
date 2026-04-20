import { useState } from "react";
import { useI18n } from "../i18n";

export function Staff() {
  const { t } = useI18n();
  const [modalOpen, setModalOpen] = useState(false);

  const rows = [
    {
      initials: "ОІ",
      bg: "var(--blue-light)",
      color: "#1e40af",
      name: "Іваненко Олег Миколайович",
      email: "o.ivanenko@bank.ua",
      role: t.roleAdmin,
      roleBadge: "badge-amber",
      statusActive: true,
      invited: "01.02.2025",
      last: `${t.timeToday}, 09:15`,
    },
    {
      initials: "МК",
      bg: "var(--accent-light)",
      color: "#065f46",
      name: "Коваленко Марина Сергіївна",
      email: "m.kovalenko@bank.ua",
      role: t.roleAnalyst,
      roleBadge: "badge-blue",
      statusActive: true,
      invited: "15.02.2025",
      last: `${t.timeYesterday}, 17:40`,
    },
    {
      initials: "ДП",
      bg: "var(--gray-light)",
      color: "var(--text-muted)",
      name: "Петрук Дмитро Андрійович",
      email: "d.petruk@bank.ua",
      role: t.roleAnalyst,
      roleBadge: "badge-blue",
      statusActive: false,
      invited: "17.05.2025",
      last: t.dash,
    },
  ];

  return (
    <>
      <div className="filter-row">
        <input className="form-input" style={{ width: 260 }} placeholder={t.searchStaffPh} />
        <div style={{ marginLeft: "auto" }}>
          <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
            {t.addEmployee}
          </button>
        </div>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>{t.colEmployee}</th>
              <th>{t.colRole}</th>
              <th>{t.colStatusS}</th>
              <th>{t.colInvited}</th>
              <th>{t.colLastLogin}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.email}>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: r.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        fontWeight: 600,
                        color: r.color,
                      }}
                    >
                      {r.initials}
                    </div>
                    <div>
                      <div style={{ fontWeight: 500 }}>{r.name}</div>
                      <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{r.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`badge ${r.roleBadge}`} style={{ fontSize: 10 }}>
                    {r.role}
                  </span>
                </td>
                <td>
                  {r.statusActive ? (
                    <span className="badge badge-green">{t.statusActiveS}</span>
                  ) : (
                    <span className="badge badge-gray">{t.statusInvited}</span>
                  )}
                </td>
                <td style={{ fontFamily: "var(--mono)", fontSize: 12 }}>{r.invited}</td>
                <td
                  style={{
                    fontFamily: r.last !== t.dash ? "var(--mono)" : undefined,
                    fontSize: 12,
                    color: r.last === t.dash ? "var(--text-muted)" : undefined,
                  }}
                >
                  {r.last}
                </td>
                <td>
                  <button className="btn btn-ghost btn-sm">•••</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={`modal-overlay${modalOpen ? " open" : ""}`}>
        <div className="modal">
          <div className="modal-title">{t.addEmpTitle}</div>
          <p className="modal-sub">{t.addEmpSub}</p>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">{t.fFirst}</label>
              <input className="form-input" placeholder={t.fFirstPh} />
            </div>
            <div className="form-group">
              <label className="form-label">{t.fLast}</label>
              <input className="form-input" placeholder={t.fLastPh} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">{t.fEmail}</label>
            <input className="form-input" type="email" placeholder={t.fEmailEmpPh} />
          </div>
          <div className="form-group">
            <label className="form-label">{t.colRole}</label>
            <select className="form-select">
              <option>{t.roleAnalyst}</option>
              <option>{t.roleAdmin}</option>
            </select>
          </div>
          <div className="modal-actions">
            <button className="btn btn-outline" onClick={() => setModalOpen(false)}>
              {t.cancel}
            </button>
            <button className="btn btn-primary" onClick={() => setModalOpen(false)}>
              {t.sendInvite}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

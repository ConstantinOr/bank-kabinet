import { useI18n } from "../i18n";
import { useNav } from "../nav";

export function TenderCard() {
  const { t } = useI18n();
  const { goApp } = useNav();

  const rows = [
    {
      name: t.c_kyivBud,
      exp: 12,
      city: t.city_kyiv,
      esg: 91,
      cls: "esg-high",
      fill: "",
      stars: "★★★★★",
      projects: 8,
      volume: "1 200",
      submitted: "12.05.2025",
    },
    {
      name: t.c_galychyna,
      exp: 7,
      city: t.city_lviv,
      esg: 87,
      cls: "esg-high",
      fill: "",
      stars: "★★★★☆",
      projects: 5,
      volume: "950",
      submitted: "14.05.2025",
    },
    {
      name: t.c_budHarkiv,
      exp: 5,
      city: t.city_harkiv,
      esg: 68,
      cls: "esg-mid",
      fill: "warn",
      stars: "★★★☆☆",
      projects: 3,
      volume: "1 100",
      submitted: "15.05.2025",
    },
    {
      name: t.c_odesaStroy,
      exp: 4,
      city: t.city_odesa,
      esg: 72,
      cls: "esg-mid",
      fill: "warn",
      stars: "★★★☆☆",
      projects: 3,
      volume: "800",
      submitted: "16.05.2025",
    },
    {
      name: t.c_dniproBud,
      exp: 9,
      city: t.city_dnipro,
      esg: 83,
      cls: "esg-high",
      fill: "",
      stars: "★★★★☆",
      projects: 6,
      volume: "1 050",
      submitted: "17.05.2025",
    },
  ];

  return (
    <>
      <div className="breadcrumb">
        <button className="crumb-link" onClick={() => goApp("tenders")}>
          {t.breadTenders}
        </button>
        <span>/</span>
        <span className="crumb-current">{t.p_podolski}</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 24,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 600 }}>{t.p_podolski}</h2>
          <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>
            {t.city_kyiv} · {t.district_podilsky} · {t.created} 01.05.2025
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <span className="badge badge-green">{t.statusCollecting}</span>
          <span style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--mono)" }}>
            {t.deadlineLbl} 30.05.2025
          </span>
          <button className="btn btn-outline btn-sm">{t.edit}</button>
        </div>
      </div>

      <div className="metric-grid" style={{ gridTemplateColumns: "repeat(3,1fr)", marginBottom: 24 }}>
        <div className="metric metric-blue">
          <div className="metric-label">{t.mBidsSubmitted}</div>
          <div className="metric-value">7</div>
          <div className="metric-sub">{t.mBidsSubmittedSub}</div>
        </div>
        <div className="metric">
          <div className="metric-label">{t.mAvgEsgParticipants}</div>
          <div className="metric-value">71%</div>
          <div className="metric-sub">{t.mAvgEsgParticipantsSub}</div>
        </div>
        <div className="metric">
          <div className="metric-label">{t.mDaysLeft}</div>
          <div className="metric-value">12</div>
          <div className="metric-sub">{t.mDaysLeftSub}</div>
        </div>
      </div>

      <div className="section-header">
        <div>
          <div className="section-title">{t.participants}</div>
          <div className="section-sub">{t.participantsSub}</div>
        </div>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>{t.colContractor}</th>
              <th>{t.colCity}</th>
              <th>{t.colEsg}</th>
              <th>{t.colProjectsDone}</th>
              <th>{t.colAvgExec}</th>
              <th>{t.colDeclaredVolume}</th>
              <th>{t.colSubmitted}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.name}
                style={{ cursor: "pointer" }}
                onClick={() => goApp("contractor-card")}
              >
                <td>
                  <div style={{ fontWeight: 500 }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                    {t.experienceYears(r.exp)}
                  </div>
                </td>
                <td>{r.city}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div className={`esg-score ${r.cls}`} style={{ width: 34, height: 34, fontSize: 12 }}>
                      {r.esg}
                    </div>
                    <div className="stars" style={{ fontSize: 11 }}>
                      {r.stars}
                    </div>
                  </div>
                </td>
                <td style={{ fontFamily: "var(--mono)" }}>{r.projects}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div className="progress-bar" style={{ width: 70 }}>
                      <div className={`progress-fill ${r.fill}`} style={{ width: `${r.esg}%` }} />
                    </div>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 12 }}>{r.esg}%</span>
                  </div>
                </td>
                <td style={{ fontFamily: "var(--mono)" }}>{r.volume} т</td>
                <td style={{ fontSize: 12, fontFamily: "var(--mono)" }}>{r.submitted}</td>
                <td>
                  <button className="btn btn-ghost btn-sm">{t.esgLink}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 20 }}>
        <div className="warning-box">
          <div style={{ color: "var(--amber)", flexShrink: 0 }}>ℹ</div>
          <div className="warning-text">{t.tenderNoteWinner}</div>
        </div>
      </div>
    </>
  );
}

import { useI18n } from "../i18n";
import { useNav } from "../nav";
import { CheckIcon } from "../icons";

export function TenderWinner() {
  const { t } = useI18n();
  const { goApp } = useNav();

  const scans = [
    { date: "18.05 09:40", type: t.typePlastic, badge: "badge-green", volume: "14" },
    { date: "17.05 14:20", type: t.typeCardboard, badge: "badge-blue", volume: "22" },
    { date: "16.05 11:00", type: t.typeFilm, badge: "badge-amber", volume: "8" },
    { date: "15.05 16:45", type: t.typePlastic, badge: "badge-green", volume: "19" },
    { date: "14.05 10:30", type: t.typeMetal, badge: "badge-gray", volume: "6" },
  ];

  return (
    <>
      <div className="breadcrumb">
        <button className="crumb-link" onClick={() => goApp("tenders")}>
          {t.breadTenders}
        </button>
        <span>/</span>
        <span className="crumb-current">{t.p_brovary}</span>
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
          <h2 style={{ fontSize: 20, fontWeight: 600 }}>{t.p_brovary}</h2>
          <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>
            {t.city_brovary} · {t.tenderClosedOn}
          </div>
        </div>
        <span className="badge badge-blue">{t.statusInProgress}</span>
      </div>

      <div className="success-box" style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <CheckIcon width={18} height={18} />
        <span>
          {t.winnerBadge} <strong>{t.c_kyivBud}</strong> · {t.declaredPkg}{" "}
          <strong style={{ fontFamily: "var(--mono)" }}>1 400 т</strong>
        </span>
      </div>

      <div className="metric-grid" style={{ gridTemplateColumns: "repeat(4,1fr)", marginBottom: 24 }}>
        <div className="metric">
          <div className="metric-label">{t.mDeclaredVolume}</div>
          <div className="metric-value">1 400 т</div>
          <div className="metric-sub">{t.mDeclaredVolumeSub}</div>
        </div>
        <div className="metric metric-accent">
          <div className="metric-label">{t.mScanned}</div>
          <div className="metric-value">854 т</div>
          <div className="metric-sub">{t.mScannedSub}</div>
        </div>
        <div className="metric">
          <div className="metric-label">{t.mEsgExec}</div>
          <div className="metric-value" style={{ color: "var(--accent)" }}>
            61%
          </div>
          <div className="metric-sub">
            <div className="progress-bar" style={{ marginTop: 6 }}>
              <div className="progress-fill" style={{ width: "61%" }} />
            </div>
          </div>
        </div>
        <div className="metric">
          <div className="metric-label">{t.mLastScan}</div>
          <div className="metric-value" style={{ fontSize: 16, fontFamily: "var(--mono)" }}>
            18.05
          </div>
          <div className="metric-sub">{t.mLastScanSub}</div>
        </div>
      </div>

      <div className="two-col">
        <div>
          <div className="section-title" style={{ marginBottom: 14 }}>
            {t.scanDynamics}
          </div>
          <div className="card">
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 10 }}>
              {t.lastWeeks}
            </div>
            <div className="mini-chart" style={{ height: 72 }}>
              {[35, 55, 70, 48, 80, 65, 90, 75].map((h, i) => (
                <div
                  key={i}
                  className={`bar${i === 7 ? " hi" : ""}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 6,
                fontSize: 10,
                color: "var(--text-light)",
              }}
            >
              <span>24 {t.timeToday === "Today" ? "Mar" : "бер"}</span>
              <span>18 {t.timeToday === "Today" ? "May" : "трав"}</span>
            </div>
            <hr className="divider" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
              <div className="metric" style={{ padding: 10 }}>
                <div className="metric-label" style={{ fontSize: 10 }}>
                  {t.thisWeek}
                </div>
                <div className="metric-value" style={{ fontSize: 18 }}>
                  103 т
                </div>
              </div>
              <div className="metric" style={{ padding: 10 }}>
                <div className="metric-label" style={{ fontSize: 10 }}>
                  {t.thisMonth}
                </div>
                <div className="metric-value" style={{ fontSize: 18 }}>
                  310 т
                </div>
              </div>
              <div className="metric metric-accent" style={{ padding: 10 }}>
                <div className="metric-label" style={{ fontSize: 10 }}>
                  {t.totalLbl}
                </div>
                <div className="metric-value" style={{ fontSize: 18 }}>
                  854 т
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="section-title" style={{ marginBottom: 14 }}>
            {t.recentScans}
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>{t.colDate}</th>
                  <th>{t.colType}</th>
                  <th>{t.colVolume}</th>
                  <th>{t.colStatus}</th>
                </tr>
              </thead>
              <tbody>
                {scans.map((s) => (
                  <tr key={s.date}>
                    <td style={{ fontFamily: "var(--mono)", fontSize: 12 }}>{s.date}</td>
                    <td>
                      <span className={`badge ${s.badge}`} style={{ fontSize: 10 }}>
                        {s.type}
                      </span>
                    </td>
                    <td style={{ fontFamily: "var(--mono)" }}>{s.volume} т</td>
                    <td>
                      <span className="badge badge-green">✓</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: 16 }}>
            <div className="section-title" style={{ marginBottom: 12, fontSize: 13 }}>
              {t.winnerProfile}
            </div>
            <div className="card" style={{ cursor: "pointer" }} onClick={() => goApp("contractor-card")}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div className="esg-score esg-high">91</div>
                <div>
                  <div style={{ fontWeight: 600 }}>{t.c_kyivBud}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>
                    {t.city_kyiv} · {t.yearsOnMarket(12)}
                  </div>
                </div>
                <div className="stars" style={{ marginLeft: "auto" }}>
                  ★★★★★
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, fontSize: 12 }}>
                <div
                  style={{
                    textAlign: "center",
                    padding: 8,
                    background: "var(--gray-light)",
                    borderRadius: 6,
                  }}
                >
                  <div style={{ color: "var(--text-muted)" }}>{t.projectsCount}</div>
                  <div style={{ fontWeight: 600, fontFamily: "var(--mono)" }}>8</div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    padding: 8,
                    background: "var(--accent-light)",
                    borderRadius: 6,
                  }}
                >
                  <div style={{ color: "#065f46" }}>{t.avgEsg}</div>
                  <div style={{ fontWeight: 600, fontFamily: "var(--mono)", color: "#065f46" }}>91%</div>
                </div>
                <div
                  style={{
                    textAlign: "center",
                    padding: 8,
                    background: "var(--gray-light)",
                    borderRadius: 6,
                  }}
                >
                  <div style={{ color: "var(--text-muted)" }}>{t.tendersCount}</div>
                  <div style={{ fontWeight: 600, fontFamily: "var(--mono)" }}>3</div>
                </div>
              </div>
              <div style={{ textAlign: "right", marginTop: 10 }}>
                <span style={{ fontSize: 12, color: "var(--accent)" }}>{t.fullEsgProfile}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

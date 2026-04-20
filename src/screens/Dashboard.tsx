import { useI18n } from "../i18n";
import { useNav } from "../nav";
import { TenderIcon, EsgIcon, CheckIcon } from "../icons";

export function Dashboard() {
  const { t } = useI18n();
  const { goApp } = useNav();

  return (
    <>
      <div className="metric-grid">
        <div className="metric metric-blue">
          <div className="metric-label">{t.mActiveTenders}</div>
          <div className="metric-value">12</div>
          <div className="metric-sub">{t.mActiveTendersSub}</div>
        </div>
        <div className="metric">
          <div className="metric-label">{t.mContractors}</div>
          <div className="metric-value">34</div>
          <div className="metric-sub">{t.mContractorsSub}</div>
        </div>
        <div className="metric metric-accent">
          <div className="metric-label">{t.mAvgEsg}</div>
          <div className="metric-value">74%</div>
          <div className="metric-sub">{t.mAvgEsgSub}</div>
        </div>
        <div className="metric">
          <div className="metric-label">{t.mCompleted}</div>
          <div className="metric-value">8</div>
          <div className="metric-sub">{t.mCompletedSub}</div>
        </div>
      </div>

      <div className="two-col gap">
        <div>
          <div className="section-header">
            <div>
              <div className="section-title">{t.activeTenders}</div>
              <div className="section-sub">{t.activeTendersSub}</div>
            </div>
            <button className="btn btn-primary btn-sm" onClick={() => goApp("tender-create")}>
              {t.newTender}
            </button>
          </div>
          <div style={{ display: "grid", gap: 10 }}>
            <div className="tender-card" onClick={() => goApp("tender-card")}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 10,
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.p_podolski}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
                    {t.city_kyiv} · {t.district_podilsky}
                  </div>
                </div>
                <span className="badge badge-green">{t.statusCollecting}</span>
              </div>
              <div style={{ display: "flex", gap: 16, fontSize: 12, color: "var(--text-muted)" }}>
                <span>
                  {t.bidsCount} <strong style={{ color: "var(--text)" }}>7</strong>
                </span>
                <span>
                  {t.deadline} <strong style={{ color: "var(--text)" }}>30.05.2025</strong>
                </span>
              </div>
            </div>

            <div className="tender-card" onClick={() => goApp("tender-card")}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 10,
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.p_arsenal}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
                    {t.city_kyiv} · {t.district_pechersky}
                  </div>
                </div>
                <span className="badge badge-green">{t.statusCollecting}</span>
              </div>
              <div style={{ display: "flex", gap: 16, fontSize: 12, color: "var(--text-muted)" }}>
                <span>
                  {t.bidsCount} <strong style={{ color: "var(--text)" }}>4</strong>
                </span>
                <span>
                  {t.deadline} <strong style={{ color: "var(--text)" }}>15.06.2025</strong>
                </span>
              </div>
            </div>

            <div className="tender-card" onClick={() => goApp("tender-winner")}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 10,
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.p_brovary}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
                    {t.city_brovary}
                  </div>
                </div>
                <span className="badge badge-blue">{t.statusWinnerSelected}</span>
              </div>
              <div style={{ marginBottom: 8, fontSize: 12, color: "var(--text-muted)" }}>
                {t.winner} <strong style={{ color: "var(--text)" }}>{t.c_kyivBud}</strong>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "61%" }} />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 5,
                  fontSize: 11,
                  color: "var(--text-muted)",
                }}
              >
                <span>{t.esgExecution}</span>
                <span style={{ fontFamily: "var(--mono)" }}>61%</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="section-header">
            <div className="section-title">{t.topContractors}</div>
            <button className="btn-ghost btn-sm" onClick={() => goApp("esg")}>
              {t.allLink}
            </button>
          </div>
          <div className="card" style={{ padding: "0 20px", marginBottom: 20 }}>
            {[
              { esg: 91, cls: "esg-high", name: t.c_kyivBud, city: t.city_kyiv, projects: 8, stars: 5 },
              { esg: 87, cls: "esg-high", name: t.c_galychyna, city: t.city_lviv, projects: 5, stars: 4 },
              { esg: 68, cls: "esg-mid", name: t.c_odesaStroy, city: t.city_odesa, projects: 3, stars: 3 },
              { esg: 42, cls: "esg-low", name: t.c_harkivProm, city: t.city_harkiv, projects: 2, stars: 2 },
            ].map((r, i, arr) => (
              <div
                key={r.name}
                style={{
                  padding: "12px 0",
                  borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  cursor: "pointer",
                }}
                onClick={() => goApp("contractor-card")}
              >
                <div className={`esg-score ${r.cls}`}>{r.esg}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500, fontSize: 13 }}>{r.name}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>
                    {r.projects} · {r.city}
                  </div>
                </div>
                <div className="stars">{"★".repeat(r.stars) + "☆".repeat(5 - r.stars)}</div>
              </div>
            ))}
          </div>

          <div className="section-header">
            <div className="section-title">{t.recentEvents}</div>
          </div>
          <div className="card" style={{ padding: "0 20px" }}>
            <div className="activity-item">
              <div className="activity-dot" style={{ background: "var(--accent-light)" }}>
                <TenderIcon width={14} height={14} stroke="#059669" />
              </div>
              <div>
                <div className="activity-text">
                  {t.actNewBid}
                  <strong>{t.p_podolski}</strong>
                </div>
                <div className="activity-time">
                  {t.timeToday}, 11:20 · {t.c_kyivBud}
                </div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot" style={{ background: "var(--blue-light)" }}>
                <CheckIcon width={14} height={14} stroke="#2563eb" />
              </div>
              <div>
                <div className="activity-text">
                  {t.actWinnerAssigned}
                  <strong>{t.p_brovary}</strong>
                </div>
                <div className="activity-time">
                  {t.timeYesterday}, 15:40 · {t.c_kyivBud}
                </div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot" style={{ background: "var(--accent-light)" }}>
                <EsgIcon width={14} height={14} stroke="#059669" />
              </div>
              <div>
                <div className="activity-text">
                  {t.actEsgUpdate}
                  <strong>{t.p_brovary}</strong>
                </div>
                <div className="activity-time">
                  {t.timeYesterday}, 09:15 · {t.c_kyivBud}
                </div>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-dot" style={{ background: "var(--gray-light)" }}>
                <TenderIcon width={14} height={14} stroke="var(--text-muted)" />
              </div>
              <div>
                <div className="activity-text">
                  {t.actTenderCreated}
                  <strong>{t.p_arsenal}</strong>
                </div>
                <div className="activity-time">16.05, 10:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

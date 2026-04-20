import { useState } from "react";
import { useI18n } from "../i18n";
import { useNav } from "../nav";

type Tab = "projects" | "dynamics" | "tenders" | "info";

export function ContractorCard() {
  const { t } = useI18n();
  const { goApp } = useNav();
  const [tab, setTab] = useState<Tab>("projects");

  return (
    <>
      <div className="breadcrumb">
        <button className="crumb-link" onClick={() => goApp("esg")}>
          {t.breadEsg}
        </button>
        <span>/</span>
        <span className="crumb-current">{t.c_kyivBud}</span>
      </div>

      <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 28, flexWrap: "wrap" }}>
        <div className="esg-score esg-high" style={{ width: 64, height: 64, fontSize: 22 }}>
          91
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 20, fontWeight: 600 }}>{t.c_kyivBud}</h2>
          <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>
            {t.city_kyiv} · {t.contractorType}
          </div>
          <div className="stars" style={{ marginTop: 6, fontSize: 15 }}>
            ★★★★★{" "}
            <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "var(--font)" }}>
              {t.topRatingInSystem}
            </span>
          </div>
        </div>
      </div>

      <div className="metric-grid" style={{ gridTemplateColumns: "repeat(4,1fr)", marginBottom: 24 }}>
        <div className="metric metric-accent">
          <div className="metric-label">{t.mEsgRating}</div>
          <div className="metric-value">91%</div>
          <div className="metric-sub">{t.mEsgRatingSub}</div>
        </div>
        <div className="metric">
          <div className="metric-label">{t.mProjectsDone}</div>
          <div className="metric-value">8</div>
          <div className="metric-sub">{t.mProjectsDoneSub}</div>
        </div>
        <div className="metric metric-blue">
          <div className="metric-label">{t.mTendersWon}</div>
          <div className="metric-value">3</div>
          <div className="metric-sub">{t.mTendersWonSub}</div>
        </div>
        <div className="metric">
          <div className="metric-label">{t.mTotalScanned}</div>
          <div className="metric-value">4 820 т</div>
          <div className="metric-sub">{t.mTotalScannedSub}</div>
        </div>
      </div>

      <div className="tabs">
        {(
          [
            ["projects", t.tabProjects],
            ["dynamics", t.tabDynamics],
            ["tenders", t.tabTenders],
            ["info", t.tabInfo],
          ] as [Tab, string][]
        ).map(([id, label]) => (
          <button
            key={id}
            className={`tab${tab === id ? " active" : ""}`}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "projects" && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>{t.colTender}</th>
                <th>{t.colCity}</th>
                <th>{t.colStatus}</th>
                <th>{t.colWorkType}</th>
                <th>{t.colDeclaredVolume}</th>
                <th>{t.mScanned}</th>
                <th>ESG</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: t.p_brovary,
                  city: t.district_brovary,
                  statusBadge: "badge-blue",
                  statusText: t.statusActiveProj,
                  work: t.workBuildMount,
                  declared: "1 400",
                  scanned: "854",
                  pct: 61,
                },
                {
                  name: t.p_ozerny,
                  city: t.city_kyiv,
                  statusBadge: "badge-green",
                  statusText: t.statusCompletedProj,
                  work: t.workBuild,
                  declared: "980",
                  scanned: "934",
                  pct: 95,
                },
                {
                  name: t.p_panorama,
                  city: t.city_kyiv,
                  statusBadge: "badge-green",
                  statusText: t.statusCompletedProj,
                  work: t.workRecon,
                  declared: "650",
                  scanned: "643",
                  pct: 99,
                },
                {
                  name: t.p_podolSity,
                  city: t.city_kyiv,
                  statusBadge: "badge-green",
                  statusText: t.statusCompletedProj,
                  work: t.workBuild,
                  declared: "1 100",
                  scanned: "1 010",
                  pct: 92,
                },
              ].map((r) => (
                <tr key={r.name}>
                  <td>
                    <div style={{ fontWeight: 500 }}>{r.name}</div>
                  </td>
                  <td>{r.city}</td>
                  <td>
                    <span className={`badge ${r.statusBadge}`}>{r.statusText}</span>
                  </td>
                  <td style={{ fontSize: 12, color: "var(--text-muted)" }}>{r.work}</td>
                  <td style={{ fontFamily: "var(--mono)" }}>{r.declared} т</td>
                  <td style={{ fontFamily: "var(--mono)" }}>{r.scanned} т</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div className="progress-bar" style={{ width: 50 }}>
                        <div className="progress-fill" style={{ width: `${r.pct}%` }} />
                      </div>
                      <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)" }}>
                        {r.pct}%
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "dynamics" && (
        <div className="two-col">
          <div className="card">
            <div className="section-title" style={{ marginBottom: 6 }}>
              {t.balanceTitle}
            </div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }}>
              {t.balanceSub}
            </div>
            <div style={{ display: "grid", gap: 12 }}>
              <BalanceRow label={t.scanOnTime} pct={87} color="var(--accent)" fill="" />
              <BalanceRow label={t.scanDelayed} pct={11} color="var(--amber)" fill="warn" />
              <BalanceRow label={t.notScanned} pct={2} color="var(--red)" fill="red" />
            </div>
            <hr className="divider" />
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 10 }}>
              {t.execByYears}
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              <YearRow year="2023" pct={84} color="var(--text-muted)" />
              <YearRow year="2024" pct={93} color="var(--accent)" />
              <YearRow year="2025" pct={61} color="var(--amber)" />
            </div>
          </div>

          <div className="card">
            <div className="section-title" style={{ marginBottom: 6 }}>
              {t.pkgTypesTitle}
            </div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 16 }}>
              {t.pkgTypesSub}
            </div>
            <div style={{ display: "grid", gap: 10 }}>
              {[
                { label: t.typePlastic, pct: 38, vol: "1 832" },
                { label: t.typeCardboard, pct: 29, vol: "1 398" },
                { label: t.typeFilm, pct: 16, vol: "771" },
                { label: t.typeMetal, pct: 11, vol: "530" },
                { label: t.typeOther, pct: 6, vol: "289" },
              ].map((p) => (
                <div
                  key={p.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: 10,
                    background: "var(--gray-light)",
                    borderRadius: "var(--radius)",
                  }}
                >
                  <span style={{ fontSize: 13 }}>{p.label}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div className="progress-bar" style={{ width: 80 }}>
                      <div className="progress-fill" style={{ width: `${p.pct}%` }} />
                    </div>
                    <span style={{ fontFamily: "var(--mono)", fontSize: 13, fontWeight: 600 }}>
                      {p.vol} т
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === "tenders" && (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>{t.colTender}</th>
                <th>{t.colYear}</th>
                <th>{t.colParticipationStatus}</th>
                <th>{t.colDeclaredVolume}</th>
                <th>{t.esgExecution}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: t.p_brovary, year: 2025, bd: "badge-blue", st: t.statusWinner, vol: "1 400", pct: 61, pctNote: "" },
                { name: t.p_ozerny, year: 2024, bd: "badge-blue", st: t.statusWinner, vol: "980", pct: 95, pctNote: "" },
                { name: t.p_panorama, year: 2024, bd: "badge-blue", st: t.statusWinner, vol: "650", pct: 99, pctNote: "" },
                { name: t.p_podolski, year: 2025, bd: "badge-amber", st: t.statusApplied, vol: "1 200", pct: -1, pctNote: t.tenderOpen },
                { name: t.p_holosiiv, year: 2023, bd: "badge-gray", st: t.statusNotWon, vol: "1 100", pct: -1, pctNote: t.dash },
              ].map((r) => (
                <tr key={r.name + r.year}>
                  <td style={{ fontWeight: 500 }}>{r.name}</td>
                  <td style={{ fontFamily: "var(--mono)" }}>{r.year}</td>
                  <td>
                    <span className={`badge ${r.bd}`}>{r.st}</span>
                  </td>
                  <td style={{ fontFamily: "var(--mono)" }}>{r.vol} т</td>
                  <td>
                    {r.pct >= 0 ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div className="progress-bar" style={{ width: 70 }}>
                          <div className="progress-fill" style={{ width: `${r.pct}%` }} />
                        </div>
                        <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--accent)" }}>
                          {r.pct}%
                        </span>
                      </div>
                    ) : (
                      <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{r.pctNote}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "info" && (
        <div className="two-col">
          <div className="card">
            <div className="section-title" style={{ marginBottom: 16 }}>
              {t.infoGeneral}
            </div>
            <InfoRow k={t.iName} v={t.c_kyivBud} bold />
            <InfoRow k={t.iCity} v={t.city_kyiv} />
            <InfoRow k={t.iType} v={t.generalContractor} />
            <InfoRow k={t.iScope} v={t.scopeHousingComm} />
            <InfoRow k={t.iRegions} v={t.regionsKyiv} />
            <InfoRow k={t.iEdrpou} v="12345678" mono />
            <InfoRow k={t.iInSince} v={t.sinceFeb2024} mono />
          </div>
          <div className="card">
            <div className="section-title" style={{ marginBottom: 16 }}>
              {t.infoSummary}
            </div>
            <div className="info-row">
              <div className="info-key">{t.iCurrentRating}</div>
              <div className="info-val">
                <div className="esg-score esg-high" style={{ width: 36, height: 36, fontSize: 13 }}>
                  91
                </div>
              </div>
            </div>
            <InfoRow k={t.iTotalProjects} v="8" mono />
            <InfoRow k={t.iTotalScanned} v="4 820 т" mono />
            <InfoRow k={t.iBestProject} v={`${t.p_panorama} — 99%`} />
            <InfoRow k={t.iActive} v="1" mono />
            <InfoRow k={t.iWinRate} v="3 / 5" mono />
          </div>
        </div>
      )}
    </>
  );
}

function InfoRow({ k, v, mono, bold }: { k: string; v: string; mono?: boolean; bold?: boolean }) {
  return (
    <div className="info-row">
      <div className="info-key">{k}</div>
      <div
        className="info-val"
        style={{
          fontFamily: mono ? "var(--mono)" : undefined,
          fontWeight: bold ? 500 : undefined,
        }}
      >
        {v}
      </div>
    </div>
  );
}

function BalanceRow({
  label,
  pct,
  color,
  fill,
}: {
  label: string;
  pct: number;
  color: string;
  fill: string;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          marginBottom: 4,
        }}
      >
        <span>{label}</span>
        <span style={{ fontFamily: "var(--mono)", color }}>{pct}%</span>
      </div>
      <div className="progress-bar">
        <div className={`progress-fill ${fill}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function YearRow({ year, pct, color }: { year: string; pct: number; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontFamily: "var(--mono)", fontSize: 12, width: 36, color: "var(--text-muted)" }}>
        {year}
      </span>
      <div className="progress-bar" style={{ flex: 1 }}>
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
      <span style={{ fontFamily: "var(--mono)", fontSize: 12, color }}>{pct}%</span>
    </div>
  );
}

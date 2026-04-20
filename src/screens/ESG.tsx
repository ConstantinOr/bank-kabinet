import { useI18n } from "../i18n";
import { useNav } from "../nav";

export function ESG() {
  const { t } = useI18n();
  const { goApp } = useNav();

  const rows = [
    {
      name: t.c_kyivBud,
      years: 12,
      city: t.city_kyiv,
      esg: 91,
      cls: "esg-high",
      fill: "",
      stars: "★★★★★",
      projects: 8,
      tenders: 3,
      last: "18.05.2025",
    },
    {
      name: t.c_galychyna,
      years: 7,
      city: t.city_lviv,
      esg: 87,
      cls: "esg-high",
      fill: "",
      stars: "★★★★☆",
      projects: 5,
      tenders: 1,
      last: "10.05.2025",
    },
    {
      name: t.c_dniproBud,
      years: 9,
      city: t.city_dnipro,
      esg: 83,
      cls: "esg-high",
      fill: "",
      stars: "★★★★☆",
      projects: 6,
      tenders: 2,
      last: "05.05.2025",
    },
    {
      name: t.c_odesaStroy,
      years: 4,
      city: t.city_odesa,
      esg: 72,
      cls: "esg-mid",
      fill: "warn",
      stars: "★★★☆☆",
      projects: 3,
      tenders: 1,
      last: "01.04.2025",
    },
    {
      name: t.c_budHarkiv,
      years: 5,
      city: t.city_harkiv,
      esg: 68,
      cls: "esg-mid",
      fill: "warn",
      stars: "★★★☆☆",
      projects: 3,
      tenders: 1,
      last: "20.03.2025",
    },
    {
      name: t.c_zahidBud,
      years: 2,
      city: t.city_uzhhorod,
      esg: 42,
      cls: "esg-low",
      fill: "red",
      stars: "★★☆☆☆",
      projects: 1,
      tenders: 0,
      last: "10.02.2025",
    },
  ];

  return (
    <>
      <div className="filter-row">
        <input className="form-input" style={{ width: 260 }} placeholder={`${t.search}...`} />
        <select className="form-select" style={{ width: 160 }}>
          <option>{t.filterAllCities}</option>
          <option>{t.city_kyiv}</option>
          <option>{t.city_lviv}</option>
          <option>{t.city_odesa}</option>
          <option>{t.city_harkiv}</option>
          <option>{t.city_dnipro}</option>
        </select>
        <select className="form-select" style={{ width: 180 }}>
          <option>{t.filterAllRatings}</option>
          <option>{t.ratingHigh}</option>
          <option>{t.ratingMid}</option>
          <option>{t.ratingLow}</option>
        </select>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>{t.colContractor}</th>
              <th>{t.colCity}</th>
              <th>ESG</th>
              <th>{t.colRating}</th>
              <th>{t.colProjects}</th>
              <th>{t.colAvgExec}</th>
              <th>{t.colTenders}</th>
              <th>{t.colLastProject}</th>
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
                    {t.yearsOnMarket(r.years)}
                  </div>
                </td>
                <td>{r.city}</td>
                <td>
                  <div className={`esg-score ${r.cls}`} style={{ width: 36, height: 36, fontSize: 13 }}>
                    {r.esg}
                  </div>
                </td>
                <td>
                  <div className="stars">{r.stars}</div>
                </td>
                <td style={{ fontFamily: "var(--mono)" }}>{r.projects}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div className="progress-bar" style={{ width: 60 }}>
                      <div className={`progress-fill ${r.fill}`} style={{ width: `${r.esg}%` }} />
                    </div>
                    <span style={{ fontSize: 12, fontFamily: "var(--mono)" }}>{r.esg}%</span>
                  </div>
                </td>
                <td style={{ fontFamily: "var(--mono)" }}>{r.tenders}</td>
                <td style={{ fontSize: 12, fontFamily: "var(--mono)" }}>{r.last}</td>
                <td>
                  <button className="btn btn-ghost btn-sm">{t.profileLink}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

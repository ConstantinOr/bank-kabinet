import { useI18n } from "../i18n";
import { useNav, type AppScreen } from "../nav";

type Row = {
  name: string;
  subDistrict: string;
  city: string;
  status: "collecting" | "closedIntake" | "inProgress" | "draft";
  bids: number;
  deadline: string;
  winner: string | null;
  target: AppScreen | null;
};

export function Tenders() {
  const { t } = useI18n();
  const { goApp } = useNav();

  const rows: Row[] = [
    {
      name: t.p_podolski,
      subDistrict: t.district_podilsky,
      city: t.city_kyiv,
      status: "collecting",
      bids: 7,
      deadline: "30.05.2025",
      winner: null,
      target: "tender-card",
    },
    {
      name: t.p_arsenal,
      subDistrict: t.district_pechersky,
      city: t.city_kyiv,
      status: "collecting",
      bids: 4,
      deadline: "15.06.2025",
      winner: null,
      target: "tender-card",
    },
    {
      name: t.p_brovary,
      subDistrict: t.district_brovary,
      city: t.city_kyivObl,
      status: "inProgress",
      bids: 11,
      deadline: "01.04.2025",
      winner: t.c_kyivBud,
      target: "tender-winner",
    },
    {
      name: t.p_ozerny,
      subDistrict: t.district_obolonsky,
      city: t.city_kyiv,
      status: "closedIntake",
      bids: 9,
      deadline: "10.05.2025",
      winner: t.notSelected,
      target: "tender-card",
    },
    {
      name: t.p_goldgate,
      subDistrict: t.district_shevchenkivsky,
      city: t.city_kyiv,
      status: "draft",
      bids: 0,
      deadline: t.dash,
      winner: null,
      target: null,
    },
  ];

  const badgeFor = (s: Row["status"]) => {
    switch (s) {
      case "collecting":
        return <span className="badge badge-green">{t.statusCollecting}</span>;
      case "closedIntake":
        return <span className="badge badge-amber">{t.statusClosedIntake}</span>;
      case "inProgress":
        return <span className="badge badge-blue">{t.statusInProgress}</span>;
      case "draft":
        return <span className="badge badge-gray">{t.statusDraft}</span>;
    }
  };

  return (
    <>
      <div className="filter-row">
        <input className="form-input" style={{ width: 260 }} placeholder={t.searchTendersPh} />
        <select className="form-select" style={{ width: 180 }}>
          <option>{t.filterAllStatuses}</option>
          <option>{t.statusCollecting}</option>
          <option>{t.statusClosedIntake}</option>
          <option>{t.statusWinnerSelected}</option>
          <option>{t.statusInProgress}</option>
        </select>
        <div style={{ marginLeft: "auto" }}>
          <button className="btn btn-primary" onClick={() => goApp("tender-create")}>
            {t.newTender}
          </button>
        </div>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>{t.colTender}</th>
              <th>{t.colCity}</th>
              <th>{t.colStatus}</th>
              <th>{t.colBids}</th>
              <th>{t.colDeadline}</th>
              <th>{t.colWinner}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr
                key={r.name}
                style={{ cursor: r.target ? "pointer" : "default" }}
                onClick={() => r.target && goApp(r.target)}
              >
                <td>
                  <div style={{ fontWeight: 500 }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{r.subDistrict}</div>
                </td>
                <td>{r.city}</td>
                <td>{badgeFor(r.status)}</td>
                <td style={{ fontFamily: "var(--mono)" }}>{r.bids}</td>
                <td style={{ fontFamily: "var(--mono)", fontSize: 12 }}>{r.deadline}</td>
                <td style={{ color: "var(--text-muted)", fontSize: 12 }}>
                  {r.winner ?? t.dash}
                </td>
                <td>
                  <button className="btn btn-ghost btn-sm">{t.open}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

import { useI18n } from "../i18n";

export function Profile() {
  const { t } = useI18n();
  return (
    <div className="two-col">
      <div>
        <div className="card gap">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <div className="section-title">{t.bankProfile}</div>
            <button className="btn btn-outline btn-sm">{t.edit}</button>
          </div>
          <Row k={t.iBankName} v={t.company} bold />
          <Row k={t.iBankEdrpou} v="09807750" mono />
          <Row k={t.iBankMfo} v="351005" mono />
          <Row k={t.iLegalAddress} v="вул. Андріївська 2/12, Київ, 04070" />
          <Row k={t.iContactPerson} v="Іваненко Олег Миколайович" />
          <Row k={t.fPhone} v="+380 44 230-00-00" />
          <Row k={t.fEmail} v="esg@ukrsibbank.ua" accent />
          <Row k={t.iWebsite} v="ukrsibbank.ua" accent />
        </div>
      </div>
      <div>
        <div className="card">
          <div className="section-title" style={{ marginBottom: 16 }}>
            {t.summaryStats}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div className="metric metric-blue">
              <div className="metric-label">{t.sActiveTenders}</div>
              <div className="metric-value" style={{ fontSize: 20 }}>
                12
              </div>
            </div>
            <div className="metric">
              <div className="metric-label">{t.sCompletedTenders}</div>
              <div className="metric-value" style={{ fontSize: 20 }}>
                8
              </div>
            </div>
            <div className="metric metric-accent">
              <div className="metric-label">{t.sTrackedContractors}</div>
              <div className="metric-value" style={{ fontSize: 20 }}>
                34
              </div>
            </div>
            <div className="metric">
              <div className="metric-label">{t.sAccountOpened}</div>
              <div className="metric-value" style={{ fontSize: 16, fontFamily: "var(--mono)" }}>
                02.2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  k,
  v,
  mono,
  bold,
  accent,
}: {
  k: string;
  v: string;
  mono?: boolean;
  bold?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="info-row">
      <div className="info-key">{k}</div>
      <div
        className="info-val"
        style={{
          fontFamily: mono ? "var(--mono)" : undefined,
          fontWeight: bold ? 500 : undefined,
          color: accent ? "var(--accent)" : undefined,
        }}
      >
        {v}
      </div>
    </div>
  );
}

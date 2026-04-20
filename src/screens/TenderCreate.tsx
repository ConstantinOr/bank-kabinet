import { useI18n } from "../i18n";
import { useNav } from "../nav";

export function TenderCreate() {
  const { t } = useI18n();
  const { goApp } = useNav();

  return (
    <div style={{ maxWidth: 640 }}>
      <div className="breadcrumb">
        <button className="crumb-link" onClick={() => goApp("tenders")}>
          {t.breadTenders}
        </button>
      </div>
      <div className="card">
        <div className="section-title" style={{ marginBottom: 20 }}>
          {t.newTenderTitle}
        </div>
        <div className="form-group">
          <label className="form-label">{t.fObjectName}</label>
          <input className="form-input" placeholder={t.fObjectNamePh} />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">{t.fCity}</label>
            <input className="form-input" placeholder={t.fCityPh} />
          </div>
          <div className="form-group">
            <label className="form-label">{t.fDistrict}</label>
            <input className="form-input" placeholder={t.fDistrictPh} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">{t.fIntakeStart}</label>
            <input className="form-input" type="date" />
          </div>
          <div className="form-group">
            <label className="form-label">{t.fIntakeEnd}</label>
            <input className="form-input" type="date" />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">{t.fBuildType}</label>
          <select className="form-select">
            <option>{t.buildResidential}</option>
            <option>{t.buildBusiness}</option>
            <option>{t.buildLogistic}</option>
            <option>{t.buildMixed}</option>
            <option>{t.buildInfra}</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">{t.fDescription}</label>
          <textarea className="form-textarea" placeholder={t.fDescriptionPh} />
        </div>
        <div
          style={{
            background: "var(--gray-light)",
            borderRadius: "var(--radius)",
            padding: 12,
            fontSize: 13,
            color: "var(--text-muted)",
            marginBottom: 20,
          }}
        >
          {t.createNote}
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <button className="btn btn-primary" onClick={() => goApp("tender-card")}>
            {t.publishTender}
          </button>
          <button className="btn btn-outline" onClick={() => goApp("tenders")}>
            {t.saveDraft}
          </button>
        </div>
      </div>
    </div>
  );
}

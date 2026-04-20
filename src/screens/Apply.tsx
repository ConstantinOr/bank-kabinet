import { useI18n } from "../i18n";
import { useNav } from "../nav";
import { LogoIcon, CheckIcon } from "../icons";
import { LangSwitcher } from "../components/LangSwitcher";

export function Apply() {
  const { t } = useI18n();
  const { goApp, goPublic } = useNav();

  return (
    <div style={{ position: "relative" }}>
      <div className="landing-topbar">
        <LangSwitcher />
      </div>
      <div className="auth-wrap">
        <div className="auth-card">
          <div className="auth-logo">
            <div className="logo-icon">
              <LogoIcon />
            </div>
            <span style={{ fontSize: 17, fontWeight: 600 }}>{t.appName}</span>
            <span
              style={{
                fontSize: 10,
                background: "var(--blue)",
                color: "#fff",
                padding: "2px 6px",
                borderRadius: 4,
                fontWeight: 600,
              }}
            >
              {t.bankBadge}
            </span>
          </div>
          <h1 className="auth-title">{t.applyTitle}</h1>
          <p className="auth-sub">{t.applySub}</p>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">{t.fBankName}</label>
              <input className="form-input" placeholder={t.fBankNamePh} />
            </div>
            <div className="form-group">
              <label className="form-label">{t.fEdrpou}</label>
              <input className="form-input" placeholder={t.fEdrpouPh} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">{t.fContact}</label>
              <input className="form-input" placeholder={t.fContactPh} />
            </div>
            <div className="form-group">
              <label className="form-label">{t.fPosition}</label>
              <input className="form-input" placeholder={t.fPositionPh} />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">{t.fEmail}</label>
            <input className="form-input" type="email" placeholder={t.fEmailPh} />
          </div>
          <div className="form-group">
            <label className="form-label">{t.fPhone}</label>
            <input className="form-input" placeholder={t.fPhonePh} />
          </div>
          <div className="form-group">
            <label className="form-label">{t.fComment}</label>
            <textarea className="form-textarea" placeholder={t.fCommentPh} />
          </div>
          <button
            className="btn btn-primary btn-full"
            onClick={() => goPublic("apply-confirm")}
          >
            {t.sendApplication}
          </button>
          <div style={{ textAlign: "center", marginTop: 16, fontSize: 13, color: "var(--text-muted)" }}>
            {t.haveAccount}{" "}
            <button className="btn-link" onClick={() => goApp("dashboard")}>
              {t.login}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ApplyConfirm() {
  const { t } = useI18n();
  const { goPublic } = useNav();
  return (
    <div style={{ position: "relative" }}>
      <div className="landing-topbar">
        <LangSwitcher />
      </div>
      <div className="auth-wrap">
        <div className="confirm-card">
          <div className="confirm-icon" style={{ background: "var(--accent-light)" }}>
            <CheckIcon />
          </div>
          <h2 className="confirm-title">{t.applySent}</h2>
          <p className="confirm-text">
            {t.applySentText}
            <br />
            {t.applySentSupport}
            <span style={{ color: "var(--accent)" }}>support@greenbin.app</span>
          </p>
          <button className="btn btn-primary" onClick={() => goPublic("landing")}>
            {t.toMain}
          </button>
        </div>
      </div>
    </div>
  );
}

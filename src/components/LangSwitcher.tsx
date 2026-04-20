import { useI18n } from "../i18n";
import type { Lang } from "../i18n/types";

export function LangSwitcher() {
  const { lang, setLang, availableLangs } = useI18n();
  return (
    <select
      className="lang-select"
      value={lang}
      onChange={(e) => setLang(e.target.value as Lang)}
      aria-label="Language"
    >
      {availableLangs.map((l) => (
        <option key={l} value={l}>
          {l === "uk" ? "UA" : l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}

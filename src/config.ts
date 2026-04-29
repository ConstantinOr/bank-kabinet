import type { Lang } from "./i18n/types";

export const config = {
  defaultLang: "uk" as Lang,
  availableLangs: ["uk", "en"] as Lang[],
  storageKey: "bankcabinet.lang",
  password: "295014",
  passwordStorageKey: "bankcabinet.password.ok",
};

import { I18nProvider } from "./i18n";
import { NavProvider, useNav } from "./nav";
import { Landing } from "./screens/Landing";
import { Apply, ApplyConfirm } from "./screens/Apply";
import { AppShell } from "./screens/AppShell";

function Router() {
  const { screen } = useNav();
  if (screen.kind === "app") return <AppShell />;
  switch (screen.id) {
    case "landing":
      return <Landing />;
    case "apply":
      return <Apply />;
    case "apply-confirm":
      return <ApplyConfirm />;
  }
}

export default function App() {
  return (
    <I18nProvider>
      <NavProvider>
        <Router />
      </NavProvider>
    </I18nProvider>
  );
}

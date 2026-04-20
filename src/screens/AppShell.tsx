import { useNav } from "../nav";
import { Sidebar } from "../components/Sidebar";
import { Topbar } from "../components/Topbar";
import { Dashboard } from "./Dashboard";
import { Tenders } from "./Tenders";
import { TenderCreate } from "./TenderCreate";
import { TenderCard } from "./TenderCard";
import { TenderWinner } from "./TenderWinner";
import { ESG } from "./ESG";
import { ContractorCard } from "./ContractorCard";
import { Staff } from "./Staff";
import { Profile } from "./Profile";
import { Notifications } from "./Notifications";

export function AppShell() {
  const { screen } = useNav();
  const id = screen.kind === "app" ? screen.id : "dashboard";

  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Topbar />
        <div className="content">
          {id === "dashboard" && <Dashboard />}
          {id === "tenders" && <Tenders />}
          {id === "tender-create" && <TenderCreate />}
          {id === "tender-card" && <TenderCard />}
          {id === "tender-winner" && <TenderWinner />}
          {id === "esg" && <ESG />}
          {id === "contractor-card" && <ContractorCard />}
          {id === "staff" && <Staff />}
          {id === "profile" && <Profile />}
          {id === "notif" && <Notifications />}
        </div>
      </main>
    </div>
  );
}

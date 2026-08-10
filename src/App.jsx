/*imports*/
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import PageContent from "./pages/PageContent";
import Login from "./pages/Login";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState("Dashboard");
  const [menuOpen, setMenuOpen] = useState(false);

  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="app-shell">
      <Sidebar page={page} onNavigate={setPage} open={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="main-wrap">
        <Navbar onMenu={() => setMenuOpen(true)} onLogout={() => setLoggedIn(false)} />
        <main className="main-content">{page === "Dashboard" ? <Dashboard /> : <PageContent page={page} />}</main>
        <footer>© 2026 Buddy Log</footer>
      </div>
    </div>
  );
}

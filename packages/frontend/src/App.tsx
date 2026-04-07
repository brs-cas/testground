import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Campaigns } from "./pages/Campaigns";

export function App() {
  return (
    <div>
      <nav>
        <h1>Marketing Platform</h1>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
        </Routes>
      </main>
    </div>
  );
}

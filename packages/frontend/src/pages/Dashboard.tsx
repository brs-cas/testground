import { useEffect, useState } from "react";
import type { DashboardSummary } from "@marketing-platform/shared";

export function Dashboard() {
  const [summary, setSummary] = useState<DashboardSummary | null>(null);

  useEffect(() => {
    fetch("/api/analytics/summary")
      .then((res) => res.json())
      .then(setSummary)
      .catch(console.error);
  }, []);

  if (!summary) return <p>Loading...</p>;

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <div>
          <h3>Total Spend</h3>
          <p>${summary.totalSpend.toLocaleString()}</p>
        </div>
        <div>
          <h3>Total Revenue</h3>
          <p>${summary.totalRevenue.toLocaleString()}</p>
        </div>
        <div>
          <h3>ROAS</h3>
          <p>{summary.averageRoas.toFixed(2)}x</p>
        </div>
        <div>
          <h3>Active Campaigns</h3>
          <p>{summary.activeCampaigns}</p>
        </div>
      </div>
    </div>
  );
}

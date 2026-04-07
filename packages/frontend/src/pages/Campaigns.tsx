import { useEffect, useState } from "react";
import type { Campaign } from "@marketing-platform/shared";

export function Campaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    fetch("/api/campaigns")
      .then((res) => res.json())
      .then((data) => setCampaigns(data.campaigns))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Campaigns</h2>
      {campaigns.length === 0 ? (
        <p>No campaigns yet. Create your first campaign to get started.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Channel</th>
              <th>Status</th>
              <th>Daily Budget</th>
              <th>ROAS</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.channel}</td>
                <td>{c.status}</td>
                <td>${c.dailyBudget}</td>
                <td>-</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

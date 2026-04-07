import type { Request, Response } from "express";
import type { DashboardSummary } from "@marketing-platform/shared";

export async function getDashboardSummary(_req: Request, res: Response) {
  // TODO: aggregate from database
  const summary: DashboardSummary = {
    totalSpend: 0,
    totalRevenue: 0,
    totalConversions: 0,
    averageRoas: 0,
    averageCpa: 0,
    activeCampaigns: 0,
    dateRange: { start: "", end: "" },
  };
  res.json(summary);
}

export async function getCampaignMetrics(req: Request, res: Response) {
  const { id } = req.params;
  // TODO: query metrics from database
  res.json({ campaignId: id, metrics: [] });
}

import { Router } from "express";
import { getDashboardSummary, getCampaignMetrics } from "../controllers/analyticsController";

export const analyticsRoutes = Router();

analyticsRoutes.get("/summary", getDashboardSummary);
analyticsRoutes.get("/campaigns/:id/metrics", getCampaignMetrics);

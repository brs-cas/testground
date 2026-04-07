export interface CampaignMetrics {
  campaignId: string;
  date: string;
  impressions: number;
  clicks: number;
  conversions: number;
  spend: number;
  revenue: number;
  ctr: number;
  cpc: number;
  cpa: number;
  roas: number;
}

export interface DashboardSummary {
  totalSpend: number;
  totalRevenue: number;
  totalConversions: number;
  averageRoas: number;
  averageCpa: number;
  activeCampaigns: number;
  dateRange: { start: string; end: string };
}

export type DateGranularity = "hour" | "day" | "week" | "month";

export interface AnalyticsQuery {
  campaignIds?: string[];
  dateRange: { start: string; end: string };
  granularity: DateGranularity;
}

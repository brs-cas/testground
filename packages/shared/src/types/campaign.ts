export type Channel = "google_ads" | "meta" | "tiktok" | "linkedin" | "twitter";

export type CampaignStatus = "draft" | "active" | "paused" | "completed" | "archived";

export type BidStrategy = "manual_cpc" | "target_cpa" | "target_roas" | "maximize_conversions";

export interface Campaign {
  id: string;
  name: string;
  channel: Channel;
  status: CampaignStatus;
  bidStrategy: BidStrategy;
  dailyBudget: number;
  totalBudget: number;
  startDate: string;
  endDate: string | null;
  targetAudiences: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateCampaignInput {
  name: string;
  channel: Channel;
  bidStrategy: BidStrategy;
  dailyBudget: number;
  totalBudget: number;
  startDate: string;
  endDate?: string;
  targetAudiences?: string[];
}

export interface UpdateCampaignInput {
  name?: string;
  status?: CampaignStatus;
  bidStrategy?: BidStrategy;
  dailyBudget?: number;
  totalBudget?: number;
  endDate?: string | null;
  targetAudiences?: string[];
}

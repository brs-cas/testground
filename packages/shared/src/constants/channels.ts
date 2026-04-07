import type { Channel } from "../types/campaign";

export const CHANNEL_LABELS: Record<Channel, string> = {
  google_ads: "Google Ads",
  meta: "Meta (Facebook & Instagram)",
  tiktok: "TikTok Ads",
  linkedin: "LinkedIn Ads",
  twitter: "X (Twitter) Ads",
};

export const SUPPORTED_CHANNELS: Channel[] = [
  "google_ads",
  "meta",
  "tiktok",
  "linkedin",
  "twitter",
];

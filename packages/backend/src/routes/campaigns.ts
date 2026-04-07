import { Router } from "express";
import {
  listCampaigns,
  getCampaign,
  createCampaign,
  updateCampaign,
  deleteCampaign,
} from "../controllers/campaignController";

export const campaignRoutes = Router();

campaignRoutes.get("/", listCampaigns);
campaignRoutes.get("/:id", getCampaign);
campaignRoutes.post("/", createCampaign);
campaignRoutes.patch("/:id", updateCampaign);
campaignRoutes.delete("/:id", deleteCampaign);

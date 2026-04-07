import type { Request, Response } from "express";
import type { CreateCampaignInput, UpdateCampaignInput } from "@marketing-platform/shared";

export async function listCampaigns(_req: Request, res: Response) {
  // TODO: implement with database query
  res.json({ campaigns: [], total: 0 });
}

export async function getCampaign(req: Request, res: Response) {
  const { id } = req.params;
  // TODO: implement with database query
  res.json({ id });
}

export async function createCampaign(req: Request, res: Response) {
  const input: CreateCampaignInput = req.body;
  // TODO: validate with zod, persist to database
  res.status(201).json({ id: "new-campaign-id", ...input });
}

export async function updateCampaign(req: Request, res: Response) {
  const { id } = req.params;
  const input: UpdateCampaignInput = req.body;
  // TODO: validate with zod, update in database
  res.json({ id, ...input });
}

export async function deleteCampaign(req: Request, res: Response) {
  const { id } = req.params;
  // TODO: soft-delete in database
  res.status(204).send();
}

import "dotenv/config";
import express from "express";
import cors from "cors";
import { campaignRoutes } from "./routes/campaigns";
import { analyticsRoutes } from "./routes/analytics";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/campaigns", campaignRoutes);
app.use("/api/analytics", analyticsRoutes);

app.listen(port, () => {
  console.log(`Marketing Platform API running on port ${port}`);
});

export default app;

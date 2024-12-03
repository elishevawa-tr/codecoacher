import type { Express } from "express";
import axios from "axios";

const API_BASE = "https://stg-codecoacher-ai.azurewebsites.net/api/CodeCoacherHttp";

export function registerRoutes(app: Express) {
  app.get("/api/recommendations/:username/:email/:fromDate/:toDate", async (req, res) => {
    try {
      const { username, email, fromDate, toDate } = req.params;
      
      const response = await axios.get(
        `${API_BASE}/${username}/${email}/${fromDate}/${toDate}`
      );
      
      res.json(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        res.status(error.response?.status || 500).json({
          error: "Failed to get recommendations. Please try again later.",
          details: error.response?.data
        });
      } else {
        res.status(500).json({
          error: "An unexpected error occurred"
        });
      }
    }
  });
}

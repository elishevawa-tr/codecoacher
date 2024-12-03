import { FormData } from "./schemas";
import { format } from "date-fns";

const API_BASE = "/api/recommendations";

export async function getRecommendations(data: FormData) {
  const { githubUsername, email, fromDate, toDate } = data;
  
  const fromDateStr = format(fromDate, "yyyy-MM-dd");
  const toDateStr = format(toDate, "yyyy-MM-dd");
  
  const response = await fetch(
    `${API_BASE}/${githubUsername}/${email}/${fromDateStr}/${toDateStr}`
  );

  if (!response.ok) {
    throw new Error("Failed to get recommendations. Please try again later.");
  }

  return response.json();
}

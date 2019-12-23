import httpClient from "../utils/httpClient";
import { apiUrl } from "../config.json";

export function getGenres() {
  return httpClient.get(apiUrl + "/genres");
}

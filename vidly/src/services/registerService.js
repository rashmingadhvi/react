import httpClient from "../utils/httpClient";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user){
    return httpClient.post(apiEndpoint, user);
}
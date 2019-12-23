import httpClient from "../utils/httpClient";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/movies";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return httpClient.get(apiEndpoint);
}

export function getMovie(movieId) {
  return httpClient.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return httpClient.put(movieUrl(movie._id), body);
  }

  return httpClient.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
  return httpClient.delete(movieUrl(movieId));
}

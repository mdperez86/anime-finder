import { Anime, PaginatedResponse, SearchAnimeRequest } from "@this/types";
import { get } from "../httpClient";

export async function getAnimeSearch(params: SearchAnimeRequest) {
  return get<PaginatedResponse<Anime>>("/v4/anime", params);
}

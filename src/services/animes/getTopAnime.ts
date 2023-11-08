import { Anime, PaginatedResponse } from "@this/types";
import { get } from "../httpClient";

export async function getTopAnime(params: TopAnimeRequest) {
  return get<PaginatedResponse<Anime>>("/v4/top/anime", params);
}

export interface TopAnimeRequest extends Record<string, any> {
  page?: number;
  limit?: number;
  type?: "tv" | "movie" | "ova" | "special" | "ona" | "music";
  filter?: "airing" | "upcoming" | "bypopularity" | "favorite";
}

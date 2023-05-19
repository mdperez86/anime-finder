import { AnimeVideoEpisode, PaginatedResponse } from "@this/types";
import { get } from "../httpClient";

export async function getAnimeVideosEpisodes(
  animeId: number,
  params: GetAnimeVideosEpisodesRequest = {}
) {
  return get<PaginatedResponse<AnimeVideoEpisode>>(
    `/v4/anime/${animeId}/videos/episodes`,
    params
  );
}

export interface GetAnimeVideosEpisodesRequest extends Record<string, any> {
  page?: number;
}

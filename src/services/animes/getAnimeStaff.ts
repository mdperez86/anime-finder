import { AnimeStaff, Response } from "@this/types";
import { get } from "../httpClient";

export async function getAnimeStaff(animeId: number) {
  return get<Response<AnimeStaff[]>>(`/v4/anime/${animeId}/staff`);
}

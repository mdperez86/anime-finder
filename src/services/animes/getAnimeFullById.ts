import { Anime, Response } from "@this/types";
import { get } from "../httpClient";

export async function getAnimeFullById(id: number) {
  return get<Response<Anime>>(`/v4/anime/${id}/full`);
}

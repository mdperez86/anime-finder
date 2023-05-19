import { AnimeCharacterVoiceActors, Response } from "@this/types";
import { get } from "../httpClient";

export async function getAnimeCharacters(animeId: number) {
  return get<Response<AnimeCharacterVoiceActors[]>>(
    `/v4/anime/${animeId}/characters`
  ).then(({ data }) => {
    return {
      data: data
        .sort((a, b) => a.character.mal_id - b.character.mal_id)
        .map(({ voice_actors, ...other }) => ({
          ...other,
          voice_actors: voice_actors.splice(0, 1),
        })),
    };
  });
}

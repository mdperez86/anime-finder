import { Anime } from "@this/types";

export function getYear(anime: Anime) {
  if (anime.year) return `${anime.year}`;
  if (anime.aired.from)
    return new Date(anime.aired.from).toLocaleDateString(undefined, {
      year: "numeric",
    });
  return `Unknow year`;
}

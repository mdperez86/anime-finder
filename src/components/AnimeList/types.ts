import { Anime } from "@this/types";

export type AnimeListProps = React.OlHTMLAttributes<HTMLOListElement> & {
  animes: Anime[];
};

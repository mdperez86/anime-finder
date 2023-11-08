import { getAnimeCharacters } from "@this/services/animes";
import { Card } from "../Card";
import { CharactesAndVoicesActorsListItem } from "../CharactesAndVoicesActorsListItem";
import { Link } from "../Link";

import { CharactesAndVoicesActorsListProps } from "./types";

export async function CharactesAndVoicesActorsList({
  anime,
}: CharactesAndVoicesActorsListProps) {
  const { data: characters } = await getAnimeCharacters(anime.mal_id);

  return (
    <Card>
      <h2 className="text-primary-400 font-semibold text-lg p-4">
        Charactes & Voices Actors
      </h2>
      <ul className="divide-y divide-secondary-700/50">
        {characters.splice(0, 6).map((item) => (
          <CharactesAndVoicesActorsListItem
            key={item.character.mal_id}
            characterVoiceActors={item}
          />
        ))}
      </ul>

      <div className="flex items-center justify-end p-4 text-sm">
        <Link href={`/animes/${anime.mal_id}/characters`}>See all</Link>
      </div>
    </Card>
  );
}

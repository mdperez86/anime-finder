import { Score } from "@this/components/Score";
import {
  getAnimeFullById,
  getAnimeCharacters,
  getAnimeStaff,
} from "@this/services/animes";
import Image from "next/image";
import { PageProps } from "../../types";
import { Card } from "@this/components/Card";
import { PlayCircleIcon, PlayIcon } from "@heroicons/react/24/solid";
import { ButtonLink } from "@this/components/ButtonLink";
import { Link } from "@this/components/Link";
import { NavigationListItem } from "@this/components/NavigationListItem";
import { CharactesAndVoicesActorsListItem } from "@this/components/CharactesAndVoicesActorsListItem";
import { StaffListItem } from "@this/components/StaffListItem";

export default async function Page({ params }: PageProps) {
  const { data: anime } = await getAnimeFullById(
    Number.parseInt(params.id as string, 10)
  );
  const { data: characters } = await getAnimeCharacters(anime.mal_id);
  const { data: staff } = await getAnimeStaff(anime.mal_id);

  return (
    <main className="overflow-hidden relative">
      <div className="w-full h-full fixed top-0">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={anime.images.webp.large_image_url ?? ""}
            sizes="100vw"
            fill
            alt={anime.titles[0].title}
            className="object-cover pointer-events-none"
          />
        </div>
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-secondary-800/50 to-secondary-950 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto space-y-4 p-4 relative">
        <Card className="flex flex-col sm:flex-row gap-6 p-4">
          {anime.trailer.embed_url ? (
            <iframe
              src={anime.trailer.embed_url}
              title={anime.titles[0].title}
              className="aspect-video rounded-md flex-grow"
            />
          ) : (
            <div className="relative aspect-[3/4] w-full sm:max-w-xs overflow-hidden rounded-md self-center">
              <Image
                src={anime.images.webp.large_image_url ?? ""}
                sizes="100vw"
                priority
                fill
                alt={anime.titles[0].title}
                className="object-cover pointer-events-none"
              />
            </div>
          )}

          <div className="space-y-2 flex-grow">
            <p className="text-sm">{anime.type}</p>

            <h1 className="truncate text-ellipsis font-bold text-2xl">
              {anime.titles[0].title}
            </h1>

            <p>{anime.year}</p>

            <div className="flex items-center gap-2">
              <Score score={anime.score ?? 0} />
              <p>
                by <span>{(anime.scored_by ?? 0).toLocaleString()}</span> users
              </p>
            </div>

            <p>
              <span>Ranked #{(anime.rank ?? 0).toLocaleString()}</span>
              {", "}
              <span>
                Popularity #{(anime.popularity ?? 0).toLocaleString()}
              </span>
              {", "}
              <span>Favorites {(anime.favorites ?? 0).toLocaleString()}</span>
              {", "}
              <span>Members {(anime.members ?? 0).toLocaleString()}</span>{" "}
            </p>

            <p>{anime.rating}</p>

            <ul className="inline-block gap-2">
              {anime.genres.map((genre) => (
                <li key={genre.mal_id} className="inline-block mr-1 mb-1">
                  <Link
                    href={genre.url}
                    rel="nofollow noreferrer"
                    target="_blank"
                  >
                    {genre.name}
                  </Link>
                </li>
              ))}
            </ul>

            {anime.episodes && (
              <>
                <p>
                  EP: {anime.episodes} - {anime.duration}
                </p>
                <ButtonLink href={`/animes/${anime.mal_id}/episodes`}>
                  <PlayIcon className="w-7" />
                  <span>Watch episodes</span>
                </ButtonLink>
              </>
            )}
          </div>
        </Card>

        <Card>
          <h2 className="text-primary-400 font-semibold text-lg p-4">
            Watch on
          </h2>
          <ul className="flex flex-col divide-y divide-secondary-700/50">
            {anime.streaming.map((streaming) => (
              <NavigationListItem
                key={streaming.name}
                href={streaming.url}
                rel="nofollow noreferrer"
                target="_blank"
              >
                <div className="flex items-center gap-4 uppercase">
                  <PlayCircleIcon className="aspect-square w-8 text-accent-400" />
                  <span>{streaming.name}</span>
                </div>
              </NavigationListItem>
            ))}
          </ul>
        </Card>

        <Card className="space-y-4 p-4">
          <h2 className="text-primary-400 font-semibold text-lg">Synopsis</h2>
          <p>{anime.synopsis}</p>
        </Card>

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

        <Card>
          <h2 className="text-primary-400 font-semibold text-lg p-4">Staff</h2>
          <ul className="divide-y divide-secondary-700/50">
            {staff.splice(0, 6).map((item) => (
              <StaffListItem key={item.person.mal_id} staff={item} />
            ))}
          </ul>

          <div className="flex items-center justify-end p-4 text-sm">
            <Link href={`/animes/${anime.mal_id}/staff`}>See all</Link>
          </div>
        </Card>

        <Card>
          <h2 className="text-primary-400 font-semibold text-lg p-4">
            Producers
          </h2>
          <ul className="divide-y divide-secondary-700/50">
            {anime.producers.map((producer) => (
              <NavigationListItem
                key={producer.mal_id}
                href={producer.url}
                rel="nofollow noreferrer"
                target="_blank"
              >
                <p>{producer.name}</p>
              </NavigationListItem>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-primary-400 font-semibold text-lg p-4">
            Licensors
          </h2>
          <ul className="divide-y divide-secondary-700/50">
            {anime.licensors.map((licensor) => (
              <NavigationListItem
                key={licensor.mal_id}
                href={licensor.url}
                rel="nofollow noreferrer"
                target="_blank"
              >
                <p>{licensor.name}</p>
              </NavigationListItem>
            ))}
          </ul>
        </Card>

        <Card>
          <h2 className="text-primary-400 font-semibold text-lg p-4">
            Studios
          </h2>
          <ul className="flex flex-col divide-y divide-secondary-700/50">
            {anime.studios.map((studio) => (
              <NavigationListItem
                key={studio.mal_id}
                href={studio.url}
                rel="nofollow noreferrer"
                target="_blank"
              >
                <p>{studio.name}</p>
              </NavigationListItem>
            ))}
          </ul>
        </Card>
      </div>
    </main>
  );
}

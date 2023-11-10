import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { getAnimeSearch } from "@this/services/animes";
import { Card } from "@this/components/Card";
import { Score } from "@this/components/Score";
import { Anime } from "@this/types";
import { ButtonLink } from "@this/components/ButtonLink";

import { PageProps } from "../types";

function getYear(anime: Anime) {
  if (anime.year) return `${anime.year}`;
  if (anime.aired.from)
    return new Date(anime.aired.from).toLocaleDateString(undefined, {
      year: "numeric",
    });
  return `Unknow year`;
}

export default async function Page({ searchParams }: PageProps) {
  const page = searchParams.page
    ? Number.parseInt(searchParams.page as string, 10)
    : 1;
  const limit = searchParams.limit
    ? Number.parseInt(searchParams.limit as string, 10)
    : 12;
  const q = (searchParams.q as string) ?? "";
  const response = await getAnimeSearch({
    page,
    limit,
    q,
  });

  return (
    <main>
      {response.data.length && (
        <div className="w-full h-full fixed top-0">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={response.data[0].images.webp.large_image_url ?? ""}
              sizes="100vw"
              fill
              alt={response.data[0].titles[0].title}
              className="object-cover pointer-events-none"
            />
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-secondary-800/50 to-secondary-950 backdrop-blur-sm" />
        </div>
      )}
      <div className="container mx-auto p-4 space-y-4 relative">
        <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {response.data.map((anime) => (
            <li key={anime.mal_id} className="aspect-[9/16]">
              <Link href={`/animes/${anime.mal_id}`}>
                <Card className="flex flex-col h-full transition duration-500 transform-gpu hover:scale-105">
                  <div className="flex flex-grow overflow-hidden relative">
                    <Image
                      src={anime.images.webp.large_image_url ?? ""}
                      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                      fill
                      alt={anime.titles[0].title}
                      className="object-cover pointer-events-none"
                    />
                  </div>
                  <div className="p-2 space-y-1">
                    <h2 className="truncate text-ellipsis font-semibold text-primary-400">
                      {anime.titles[0].title}
                    </h2>
                    <div className="text-sm space-y-1">
                      <Score score={anime.score ?? 0} />
                      <p>{getYear(anime)}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            </li>
          ))}
        </ol>

        <div className="flex items-center justify-center md:justify-end gap-4 pb-8">
          {page > 1 && (
            <ButtonLink href={`/animes?page=${page - 1}&limit=${limit}&q=${q}`}>
              <ChevronLeftIcon className="h-6" aria-label="Prev page" />
            </ButtonLink>
          )}
          {response.pagination.has_next_page && (
            <ButtonLink href={`/animes?page=${page + 1}&limit=${limit}&q=${q}`}>
              <ChevronRightIcon className="h-6" aria-label="Next page" />
            </ButtonLink>
          )}
        </div>
      </div>
    </main>
  );
}

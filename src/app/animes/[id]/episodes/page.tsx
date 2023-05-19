import { getAnimeVideosEpisodes } from "@this/services/animes";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@this/components/Card";
import { PageProps } from "@this/app/types";
import { ButtonLink } from "@this/components/ButtonLink";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default async function Page({ params, searchParams }: PageProps) {
  const animeId = Number.parseInt(params.id, 10);
  const page = searchParams.page
    ? Number.parseInt(searchParams.page as string, 10)
    : 1;
  const response = await getAnimeVideosEpisodes(animeId, {
    page,
  });

  return (
    <main>
      {response.data.length && response.data[0].images.jpg.image_url && (
        <div className="w-full h-full fixed top-0">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={response.data[0].images.jpg.image_url ?? ""}
              sizes="60vw"
              fill
              alt={response.data[0].title}
              className="object-cover pointer-events-none"
            />
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-secondary-800/50 to-secondary-950 backdrop-blur-sm" />
        </div>
      )}

      <div className="container mx-auto p-4 space-y-8 relative">
        <h1 className="font-bold text-2xl">Episodes</h1>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {response.data.map((episode) => (
            <li key={episode.mal_id} className="aspect-[4/3]">
              <Link
                href={episode.url}
                rel="nofollow noreferrer"
                target="_blank"
              >
                <Card className="flex flex-col h-full transition duration-500 transform-gpu hover:scale-105">
                  <div className="grow overflow-hidden relative">
                    <Image
                      src={episode.images.jpg.image_url ?? ""}
                      sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                      fill
                      alt={episode.title}
                      className="object-cover pointer-events-none"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h2 className="truncate text-ellipsis font-semibold text-lg text-primary-400">
                      {episode.episode}
                    </h2>
                    <div className="line-clamp-1">{episode.title}</div>
                  </div>
                </Card>
              </Link>
            </li>
          ))}
        </ol>

        <div className="flex items-center justify-center md:justify-end gap-4 pb-8">
          {page > 1 && (
            <ButtonLink href={`/animes/${animeId}/episodes?page=${page - 1}`}>
              <ChevronLeftIcon className="h-6" aria-label="Prev page" />
            </ButtonLink>
          )}
          {response.pagination.has_next_page && (
            <ButtonLink href={`/animes/${animeId}/episodes?page=${page + 1}`}>
              <ChevronRightIcon className="h-6" aria-label="Next page" />
            </ButtonLink>
          )}
        </div>
      </div>
    </main>
  );
}

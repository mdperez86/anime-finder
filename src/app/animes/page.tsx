import { Suspense } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { getAnimeSearch } from "@this/services/animes";
import {
  AnimeList,
  Skeleton as AnimeListSkeleton,
} from "@this/components/AnimeList";
import { ButtonLink } from "@this/components/ButtonLink";

import { PageProps } from "../types";

export const metadata = {
  title: "Search animes",
};

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
      <h1 className="sr-only">{metadata.title}</h1>

      {Boolean(response.data.length) && (
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
        <Suspense fallback={<AnimeListSkeleton />}>
          <AnimeList animes={response.data} />
        </Suspense>

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

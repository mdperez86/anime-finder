import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { getYear } from "@this/utils";

import { Card } from "../Card";
import { Score } from "../Score";
import { AnimeListProps } from "./types";

export function AnimeList({ animes, className, ...props }: AnimeListProps) {
  return (
    <ol
      {...props}
      className={classNames(
        className,
        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
      )}
    >
      {animes.map((anime) => (
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
  );
}

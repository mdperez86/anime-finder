import { Card } from "@this/components/Card";
import { Score } from "@this/components/Score";
import { Swiper, SwiperSlide } from "@this/components/Swiper";
import { getTopAnime } from "@this/services/animes";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const upcomingResponse = await getTopAnime({ limit: 6, filter: "upcoming" });
  const popularResponse = await getTopAnime({
    limit: 6,
    filter: "bypopularity",
  });
  const airingResponse = await getTopAnime({
    limit: 6,
    filter: "airing",
  });

  return (
    <main className="container mx-auto p-4 space-y-4 relative">
      <Swiper>
        {upcomingResponse.data.map((anime) => (
          <SwiperSlide key={anime.mal_id} className="aspect-[3/4]">
            <Link href={`/animes/${anime.mal_id}`}>
              <Card className="flex flex-col h-full">
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
                <div className="p-4 pb-10 space-y-2 absolute right-0 bottom-0 left-0 bg-secondary-900/80 backdrop-blur-sm shadow-sm">
                  <h2 className="truncate text-ellipsis text-lg font-semibold text-white">
                    {anime.titles[0].title}
                  </h2>
                  <p className="line-clamp-3">{anime.synopsis}</p>
                </div>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2>Popular</h2>
      <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {popularResponse.data.map((anime) => (
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
                    {/* <p>{getYear(anime)}</p> */}
                  </div>
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ol>

      <h2>Airing</h2>
      <ol className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {airingResponse.data.map((anime) => (
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
                    {/* <p>{getYear(anime)}</p> */}
                  </div>
                </div>
              </Card>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}

import { Skeleton as AnimeList } from "@this/components/AnimeList";

export default function Loading() {
  return (
    <div role="presentation" aria-label="Loading animes...">
      <div className="container mx-auto p-4 space-y-4 relative">
        <AnimeList />

        <div className="flex items-center justify-center md:justify-end gap-4 pb-8">
          <div className="animate-pulse bg-white/20 w-14 h-12 rounded-md" />
          <div className="animate-pulse bg-white/20 w-14 h-12 rounded-md" />
        </div>
      </div>
    </div>
  );
}

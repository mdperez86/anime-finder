import { Card } from "../Card";

export function Skeleton() {
  return (
    <div
      role="presentation"
      aria-label="Loading animes..."
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
    >
      {Array.from({ length: 16 }).map((_, index) => (
        <div key={index} className="aspect-[9/16]">
          <Card className="flex flex-col h-full">
            <div className="flex flex-grow animate-pulse bg-white/20" />

            <div className="p-2 space-y-1">
              <div className="animate-pulse bg-white/20 w-full h-6 rounded-md" />
              <div className="text-sm space-y-1">
                <div className="animate-pulse bg-white/20 w-full h-5 rounded-md" />

                <div className="animate-pulse bg-white/20 w-14 h-5 rounded-md" />
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}

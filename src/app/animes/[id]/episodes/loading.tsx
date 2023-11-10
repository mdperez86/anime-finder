import { Card } from "@this/components/Card";

export default function Loading() {
  return (
    <div role="presentation" aria-label="Loading episodes...">
      <div className="container mx-auto p-4 space-y-8 relative">
        <div>
          <div className="animate-pulse bg-white/20 rounded-md h-8 w-60" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 24 }).map((_, index) => (
            <div key={index} className="aspect-[4/3]">
              <Card className="flex flex-col h-full transition duration-500 transform-gpu hover:scale-105">
                <div className="grow animate-pulse bg-white/20" />

                <div className="p-4 space-y-1">
                  <div className="animate-pulse bg-white/20 w-full h-6 rounded-md" />

                  <div className="animate-pulse bg-white/20 w-full h-5 rounded-md" />
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center md:justify-end gap-4 pb-8">
          <div className="animate-pulse bg-white/20 w-14 h-12 rounded-md" />
          <div className="animate-pulse bg-white/20 w-14 h-12 rounded-md" />
        </div>
      </div>
    </div>
  );
}

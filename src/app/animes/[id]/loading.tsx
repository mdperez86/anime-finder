import { Card } from "@this/components/Card";
import { Skeleton as NavigationListItem } from "@this/components/NavigationListItem";
import { Skeleton as CharactersAndVoicesActorsList } from "@this/components/CharactersAndVoicesActorsList";
import { Skeleton as StaffList } from "@this/components/StaffList";

export default function Loading() {
  return (
    <div
      className="overflow-hidden relative"
      role="presentation"
      aria-label="Loading anime..."
    >
      <div className="container mx-auto space-y-4 p-4 relative">
        <Card className="flex flex-col sm:flex-row gap-6 p-4">
          <div className="aspect-video rounded-md flex-grow animate-pulse bg-white/20" />

          <div className="space-y-2 flex-grow">
            <div className="text-sm">
              <div className="animate-pulse bg-white/20 rounded-md h-5 w-10" />
            </div>

            <div className="truncate text-ellipsis font-bold text-2xl">
              <div className="animate-pulse bg-white/20 rounded-md h-8 w-60" />
            </div>

            <div>
              <div className="animate-pulse bg-white/20 rounded-md h-6 w-24" />
            </div>

            <div className="flex items-center gap-2">
              <div className="animate-pulse bg-white/20 rounded-md h-6 w-32" />
            </div>

            <div>
              <div className="animate-pulse bg-white/20 rounded-md h-6 w-full" />
            </div>

            <div>
              <div className="animate-pulse bg-white/20 rounded-md h-6 w-32" />
            </div>

            <div className="inline-block gap-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="inline-block mr-1 mb-1 animate-pulse bg-white/20 rounded-md h-6 w-16"
                />
              ))}
            </div>

            <div>
              <div className="animate-pulse bg-white/20 rounded-md h-6 w-32" />
            </div>

            <div className="animate-pulse bg-white/20 rounded-md h-14 w-full" />
          </div>
        </Card>

        <Card>
          <div className="p-4">
            <div className="animate-pulse bg-white/20 rounded-md h-7 w-60" />
          </div>

          <div className="flex flex-col divide-y divide-secondary-700/50">
            {Array.from({ length: 4 }).map((_, index) => (
              <NavigationListItem key={index}>
                <div className="flex items-center gap-4 uppercase">
                  <div className="aspect-square w-8 animate-pulse bg-white/20 rounded-full" />

                  <div className="animate-pulse bg-white/20 rounded-md h-6 w-32" />
                </div>
              </NavigationListItem>
            ))}
          </div>
        </Card>

        <Card className="space-y-4 p-4">
          <div className="p-4">
            <div className="animate-pulse bg-white/20 rounded-md h-7 w-60" />
          </div>

          <div className="animate-pulse bg-white/20 rounded-md h-96 w-full" />
        </Card>

        <CharactersAndVoicesActorsList />

        <StaffList />

        <Card>
          <div className="p-4">
            <div className="animate-pulse bg-white/20 rounded-md h-7 w-60" />
          </div>

          <div className="divide-y divide-secondary-700/50">
            {Array.from({ length: 4 }).map((_, index) => (
              <NavigationListItem key={index}>
                <div className="animate-pulse bg-white/20 rounded-md h-6 w-32" />
              </NavigationListItem>
            ))}
          </div>
        </Card>

        <Card>
          <div className="p-4">
            <div className="animate-pulse bg-white/20 rounded-md h-7 w-60" />
          </div>

          <div className="divide-y divide-secondary-700/50">
            {Array.from({ length: 4 }).map((_, index) => (
              <NavigationListItem key={index}>
                <div className="animate-pulse bg-white/20 rounded-md h-6 w-32" />
              </NavigationListItem>
            ))}
          </div>
        </Card>

        <Card>
          <div className="p-4">
            <div className="animate-pulse bg-white/20 rounded-md h-7 w-60" />
          </div>

          <div className="divide-y divide-secondary-700/50">
            {Array.from({ length: 4 }).map((_, index) => (
              <NavigationListItem key={index}>
                <div className="animate-pulse bg-white/20 rounded-md h-6 w-32" />
              </NavigationListItem>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

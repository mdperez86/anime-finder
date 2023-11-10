import { Card } from "@this/components/Card";
import { Skeleton as CharactersAndVoicesActorsListItem } from "@this/components/CharactersAndVoicesActorsListItem";

export default function Loading() {
  return (
    <div role="presentation" aria-label="Loading characters...">
      <div className="container mx-auto p-4 space-y-4 relative">
        <Card>
          <div className="p-4">
            <div className="animate-pulse bg-white/20 rounded-md h-7 w-60" />
          </div>

          <div className="divide-y divide-secondary-700/50">
            {Array.from({ length: 24 }).map((_, index) => (
              <CharactersAndVoicesActorsListItem key={index} />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

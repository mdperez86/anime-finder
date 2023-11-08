import { Card } from "../Card";
import { Skeleton as CharactesAndVoicesActorsListItem } from "../CharactesAndVoicesActorsListItem";

export function Skeleton() {
  return (
    <Card>
      <div className="p-4">
        <div className="animate-pulse bg-white/20 rounded-md h-7 w-60" />
      </div>
      <div className="divide-y divide-secondary-700/50">
        {Array.from({ length: 6 }).map((_, index) => (
          <CharactesAndVoicesActorsListItem key={index} />
        ))}
      </div>

      <div className="flex items-center justify-end p-4 text-sm">
        <div className="animate-pulse bg-white/20 rounded-md h-5 w-10" />
      </div>
    </Card>
  );
}

import { Skeleton as NavigationListItem } from "../NavigationListItem";

export function Skeleton() {
  return (
    <NavigationListItem>
      <div className="flex grow gap-4">
        <div className="flex items-start shrink-0">
          <div className="relative aspect-square rounded-full w-16 bg-white/20 overflow-hidden animate-pulse" />
        </div>
        <div className="flex flex-col grow justify-center gap-1">
          <div className="animate-pulse bg-white/20 rounded-md h-6" />

          <div className="flex flex-col">
            <div className="animate-pulse bg-white/20 rounded-md h-5 w-32" />
          </div>
        </div>
      </div>
    </NavigationListItem>
  );
}

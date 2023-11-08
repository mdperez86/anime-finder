import { Skeleton as NavigationListItem } from "../NavigationListItem";

export function Skeleton() {
  return (
    <NavigationListItem>
      <div className="w-full flex gap-4">
        <div className="flex">
          <div className="relative aspect-square rounded-full w-16 bg-white/20 overflow-hidden shrink-0 animate-pulse" />
        </div>
        <div className="flex flex-col w-full overflow-hidden justify-center gap-1">
          <div className="animate-pulse bg-white/20 rounded-md h-6" />

          <div className="flex gap-2 items-center">
            <div className="relative aspect-square rounded-full w-7 bg-white/20 overflow-hidden shrink-0 animate-pulse" />
            <div className="animate-pulse bg-white/20 rounded-md h-5 w-full" />
          </div>
        </div>
      </div>
    </NavigationListItem>
  );
}

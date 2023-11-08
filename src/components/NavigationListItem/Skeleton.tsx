import { PropsWithChildren } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export function Skeleton({ children }: PropsWithChildren) {
  return (
    <div role="presentation">
      <div className="flex px-4 py-2 gap-4">
        <div className="flex flex-auto overflow-hidden">{children}</div>
        <div className="flex w-4 shrink-0 items-center justify-center">
          <ChevronRightIcon className="aspect-square w-4" />
        </div>
      </div>
    </div>
  );
}

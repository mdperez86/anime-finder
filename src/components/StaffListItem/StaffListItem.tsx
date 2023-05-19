import Image from "next/image";
import { NavigationListItem } from "../NavigationListItem";
import { StaffListItemProps } from "./types";

export function StaffListItem({ staff }: StaffListItemProps) {
  return (
    <NavigationListItem
      href={staff.person.url}
      target="_blank"
      rel="nofollow noreferrer"
    >
      <div className="flex grow gap-4 hover:bg-white/10">
        <div className="flex items-start shrink-0">
          <figure className="relative aspect-square rounded-full w-16 bg-white/20 overflow-hidden">
            <Image
              src={staff.person.images.jpg.image_url ?? ""}
              sizes="100vw"
              fill
              alt={staff.person.name}
              className="object-cover pointer-events-nonel"
            />
          </figure>
        </div>
        <div className="flex flex-col grow justify-center gap-1">
          <p className="truncate text-ellipsis text-primary-400">
            {staff.person.name}
          </p>
          <ul className="flex flex-col">
            {staff.positions.map((position) => (
              <li key={position} className="pl-0">
                <p className="text-sm truncate text-ellipsis pr-2">
                  {position}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </NavigationListItem>
  );
}

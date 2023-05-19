import classNames from "classnames";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { NavigationListItemProps } from "./types";

export function NavigationListItem({
  href,
  target,
  rel,
  className,
  children,
  ...props
}: NavigationListItemProps) {
  return (
    <li {...props} className={classNames(className)}>
      <Link
        href={href}
        target={target}
        rel={rel}
        className="flex px-4 py-2 gap-4 hover:bg-white/10"
      >
        <div className="flex flex-auto overflow-hidden">{children}</div>
        <div className="flex w-4 shrink-0 items-center justify-center">
          <ChevronRightIcon className="aspect-square w-4" />
        </div>
      </Link>
    </li>
  );
}

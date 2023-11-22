"use client";

import { getUrl } from "@this/utils";
import { usePathname, useSearchParams } from "next/navigation";
import { ArrowLongDownIcon, ArrowLongUpIcon } from "@heroicons/react/24/solid";

import { Dropdown } from "../Dropdown";
import { Link } from "../Link";
import { Card } from "../Card";
import { AnimeSearchOrderByDropdownProps } from "./types";

export function AnimeSearchOrderByDropdown({
  orderByValues,
}: AnimeSearchOrderByDropdownProps) {
  const pathname = usePathname();
  const params = Array.from(useSearchParams().entries()).reduce<
    Record<string, string>
  >((current, [key, value]) => ({ ...current, [key]: value }), {});
  const selectedValue = orderByValues.find(
    (value) => value.order_by == params.order_by && value.sort == params.sort
  );

  return (
    <Dropdown
      Toggle={({ onToggle }) => (
        <button onClick={onToggle} className="inline-flex gap-1 items-center">
          <span>{selectedValue?.label}</span>
          {params.sort == "desc" ? (
            <ArrowLongDownIcon className="shrink-0 w-4 aspect-square" />
          ) : (
            <ArrowLongUpIcon className="shrink-0 w-4 aspect-square" />
          )}
        </button>
      )}
      Menu={({ className, onClose }) => (
        <Card className={className}>
          <ul className="w-max max-w-[10rem]">
            {orderByValues.map((value) => (
              <li
                key={String(value.order_by) + String(value.sort)}
                onClick={onClose}
              >
                <Link
                  href={getUrl(pathname, {
                    ...params,
                    order_by: value.order_by,
                    sort: value.sort,
                  })}
                  className="block truncate w-full px-3 py-1 hover:bg-white/10 -outline-offset-2"
                >
                  {value.label}
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      )}
    />
  );
}

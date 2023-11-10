"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import classNames from "classnames";

import { Link } from "../Link";
import { HeaderProps } from "./types";

export function Header({ title }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);
  const params = useSearchParams();
  const defaultSearchValue = params.get("q") ?? "";
  const [searchValue, setSearchValue] = useState(defaultSearchValue);

  useEffect(focusSearchInput, []);

  return (
    <div className="sticky top-0 w-full h-16 z-30 bg-gradient-to-br from-secondary-600/40 to-secondary-800/60 backdrop-blur-xl border-b border-secondary-700/50 shadow-xl flex items-center gap-4">
      <header className="container mx-auto px-4 flex items-center gap-4">
        {pathname != "/" && (
          <button
            className="w-9 h-9 flex flex-shrink-0 items-center justify-center rounded-full hover:bg-white/30"
            onClick={handleBackButtonClick}
          >
            <ChevronLeftIcon aria-label="Back" className="w-6 h-6" />
          </button>
        )}

        {pathname == "/" && (
          <div className="flex">
            <Link href="/" className="uppercase">
              {title}
            </Link>
          </div>
        )}

        <div className="flex grow justify-end">
          <form
            className={classNames(
              "flex w-fit items-center justify-end bg-white/20 rounded-full",
              "transition-all ease-linear duration-100",
              {
                "w-9 focus-within:w-full focus-within:max-w-xs": !searchValue,
                "w-full max-w-xs": searchValue,
              }
            )}
            onSubmit={handleSearchSubmit}
          >
            <input
              ref={searchRef}
              type="text"
              name="q"
              className={classNames(
                "appearance-none bg-transparent outline-none",
                {
                  "w-0 focus:w-full focus:pl-3": !searchValue,
                  "w-full pl-3": searchValue,
                }
              )}
              aria-label="Search"
              value={searchValue}
              onChange={handleSeachInputChange}
            />

            <button
              type="button"
              className="w-9 h-9 shrink-0 flex items-center justify-center"
              onClick={handleSearchButtonClick}
              tabIndex={-1}
            >
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>
          </form>
        </div>
      </header>
    </div>
  );

  function focusSearchInput() {
    searchRef.current?.focus();
  }

  function handleBackButtonClick() {
    router.back();
  }

  function handleSeachInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function handleSearchButtonClick() {
    focusSearchInput();
  }

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    router.push(`/animes?q=${event.currentTarget.q.value}`);
  }
}

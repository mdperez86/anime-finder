"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import { Link } from "../Link";
import { HeaderProps } from "./types";

export function Header({ title }: HeaderProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="sticky top-0 w-full h-16 z-30 bg-gradient-to-br from-secondary-600/40 to-secondary-800/60 backdrop-blur-xl border-b border-secondary-700/50 shadow-xl flex items-center gap-4">
      <header className="container mx-auto p-4 flex items-center gap-4">
        {pathname != "/" && (
          <button
            className="w-8 h-8 flex flex-shrink-0 items-center justify-center rounded-full hover:bg-white/30"
            onClick={handleBackButtonClick}
          >
            <ChevronLeftIcon aria-label="Back" className="w-6 h-6" />
          </button>
        )}

        <div className="flex w-full justify-center">
          <Link href="/" className="uppercase">
            {title}
          </Link>
        </div>

        {pathname != "/" && (
          <div className="w-8 h-8 flex-shrink-0" role="presentation" />
        )}
      </header>
    </div>
  );

  function handleBackButtonClick() {
    router.back();
  }
}

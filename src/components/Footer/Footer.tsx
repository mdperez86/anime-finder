"use client";

import { Link } from "../Link";
import { FooterProps } from "./types";

export function Footer({}: FooterProps) {
  return (
    <footer className="sticky top-full w-full bg-gradient-to-br from-secondary-600/40 to-secondary-800/60 backdrop-blur-xl border-b border-secondary-700/50">
      <div className="container mx-auto p-4">
        <p className="text-center">
          <span>&copy; {new Date().getFullYear()}</span>
          <span>{" - "}</span>
          <Link href="//github.com/mdperez86" target="_blank" rel="noreferrer">
            mdperez86
          </Link>
        </p>
        <p className="text-center">
          <span>Powered by </span>
          <Link href="//nextjs.org" target="_blank" rel="noreferrer">
            NextJs
          </Link>
          <span> and </span>
          <Link href="//docs.api.jikan.moe/" target="_blank" rel="noreferrer">
            Jikan API
          </Link>
        </p>
      </div>
    </footer>
  );
}

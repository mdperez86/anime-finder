import "./globals.css";
import { Inter } from "next/font/google";
import { LayoutProps } from "./types";
import classNames from "classnames";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime finder",
  description: "The anime finder we site",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={classNames(
          inter.className,
          "text-secondary-200 text-base bg-secondary-950 min-h-screen"
        )}
      >
        {children}
      </body>
    </html>
  );
}

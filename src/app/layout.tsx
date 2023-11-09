import { Inter } from "next/font/google";
import { LayoutProps } from "./types";
import classNames from "classnames";

import "./globals.css";
import { Header } from "@this/components/Header";
import { Footer } from "@this/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime finder",
  description: "The anime finder web site",
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
        <Header title={metadata.title} />

        {children}

        <Footer />
      </body>
    </html>
  );
}

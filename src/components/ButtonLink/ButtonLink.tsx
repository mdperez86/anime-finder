import classNames from "classnames";
import Link from "next/link";
import { ButtonLinkProps } from "./types";

export function ButtonLink({ className, ...props }: ButtonLinkProps) {
  return (
    <Link
      {...props}
      className={classNames(
        className,
        "px-4 py-3 inline-flex items-center justify-center rounded-md gap-2",
        "bg-accent-500 text-secondary-900 uppercase font-semibold",
        "transition-all transform-gpu hover:bg-accent-400 hover:text-secondary-800 hover:shadow-lg"
      )}
    />
  );
}

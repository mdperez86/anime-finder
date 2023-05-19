import classNames from "classnames";
import BaseLink from "next/link";
import { LinkProps } from "./types";

export function Link({ className, ...props }: LinkProps) {
  return (
    <BaseLink
      {...props}
      className={classNames(className, "text-accent-500 underline")}
    />
  );
}

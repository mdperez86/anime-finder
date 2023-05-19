import { LinkProps as BaseLinkProps } from "next/link";

export type LinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof BaseLinkProps
> &
  BaseLinkProps &
  React.RefAttributes<HTMLAnchorElement>;

import { DetailedHTMLProps, LiHTMLAttributes } from "react";
import { LinkProps } from "../Link";

export type NavigationListItemProps = DetailedHTMLProps<
  LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> &
  Pick<LinkProps, "href" | "target" | "rel">;

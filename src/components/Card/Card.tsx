import classNames from "classnames";
import { CardProps } from "./types";

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={classNames(
        className,
        "bg-gradient-to-br from-secondary-600/40 to-secondary-800/60 backdrop-blur-xl",
        "border border-secondary-700/50 rounded-md overflow-hidden shadow-md"
      )}
    >
      {children}
    </div>
  );
}

import { StarIcon as SolidIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineIcon } from "@heroicons/react/24/outline";
import { ScoreProps } from "./types";

export function Score({ score, ...props }: ScoreProps) {
  const base5Score = (score * 5) / 10;
  return (
    <div {...props} className="inline-flex items-center gap-x-2 h-5">
      <div
        className="relative"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={5}
        aria-valuenow={base5Score}
      >
        <ul
          className="flex text-primary-400 absolute overflow-hidden"
          style={{
            width: `${(base5Score * 100) / 5}%`,
          }}
          role="presentation"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item}>
              <SolidIcon className="aspect-square h-5" />
            </li>
          ))}
        </ul>
        <ul
          className="relative flex w-fit text-primary-400"
          role="presentation"
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <li key={item}>
              <OutlineIcon className="aspect-square h-5" />
            </li>
          ))}
        </ul>
      </div>
      <span className="shrink-0 inline-flex">
        {base5Score.toLocaleString(undefined, {
          maximumFractionDigits: 1,
        })}
      </span>
    </div>
  );
}

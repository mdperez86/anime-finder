import { StarIcon as SolidIcon } from "@heroicons/react/24/solid";
import { StarIcon as OutlineIcon } from "@heroicons/react/24/outline";
import { ScoreProps } from "./types";

export function Score({ score }: ScoreProps) {
  const base5Score = (score * 5) / 10;
  return (
    <div className="flex items-center gap-2 h-5">
      <ul className="grid grid-cols-5 w-fit h-full text-primary-400">
        {[1, 2, 3, 4, 5].map((item) => (
          <li key={item}>
            {base5Score >= item ? (
              <SolidIcon className="aspect-square h-full" />
            ) : (
              <OutlineIcon className="aspect-square h-full" />
            )}
          </li>
        ))}
      </ul>
      <span className="flex">{base5Score.toLocaleString()}</span>
    </div>
  );
}

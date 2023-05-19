import Image from "next/image";
import { NavigationListItem } from "../NavigationListItem";
import { CharactesAndVoicesActorsListItemProps } from "./types";

export function CharactesAndVoicesActorsListItem({
  characterVoiceActors,
}: CharactesAndVoicesActorsListItemProps) {
  const character = characterVoiceActors.character;
  const voiceActor = characterVoiceActors.voice_actors[0];

  return (
    <NavigationListItem
      href={characterVoiceActors.character.url}
      target="_blank"
      rel="nofollow noreferrer"
    >
      <div className="w-full flex gap-4">
        <div className="flex">
          <figure className="relative aspect-square rounded-full w-16 bg-white/20 overflow-hidden shrink-0">
            <Image
              src={character.images.webp.image_url ?? ""}
              sizes="100vw"
              fill
              alt={character.name}
              className="object-cover pointer-events-nonel"
            />
          </figure>
        </div>
        <div className="flex flex-col overflow-hidden justify-center gap-1">
          <p className="truncate text-ellipsis text-primary-400">
            {character.name}
          </p>

          {voiceActor && (
            <div className="flex gap-2 items-center">
              <figure className="relative aspect-square rounded-full w-7 bg-white/20 overflow-hidden shrink-0">
                <Image
                  src={voiceActor.person.images.jpg.image_url ?? ""}
                  sizes="50vw"
                  fill
                  alt={voiceActor.person.name}
                  className="object-cover pointer-events-none"
                />
              </figure>
              <p className="text-sm truncate text-ellipsis">
                <strong>{voiceActor.person.name}</strong>{" "}
                <span>({voiceActor.language})</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </NavigationListItem>
  );
}

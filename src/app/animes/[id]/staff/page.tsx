import Image from "next/image";
import { getAnimeStaff } from "@this/services/animes";
import { PageProps } from "@this/app/types";
import { Card } from "@this/components/Card";
import { StaffListItem } from "@this/components/StaffListItem";

export const metadata = {
  title: "Staff",
};

export default async function Page({ params }: PageProps) {
  const animeId = Number.parseInt(params.id, 10);
  const response = await getAnimeStaff(animeId);

  return (
    <main>
      {response.data.length && response.data[0].person.images.jpg.image_url && (
        <div className="w-full h-full fixed top-0">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={response.data[0].person.images.jpg.image_url ?? ""}
              sizes="60vw"
              fill
              alt={response.data[0].person.name}
              className="object-cover pointer-events-none"
            />
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-secondary-800/50 to-secondary-950 backdrop-blur-sm" />
        </div>
      )}

      <div className="container mx-auto p-4 space-y-4 relative">
        <Card>
          <h1 className="text-primary-400 font-semibold text-lg p-4">
            {metadata.title}
          </h1>

          <ul className="divide-y divide-secondary-700/50">
            {response.data.map((item) => (
              <StaffListItem key={item.person.mal_id} staff={item} />
            ))}
          </ul>
        </Card>
      </div>
    </main>
  );
}

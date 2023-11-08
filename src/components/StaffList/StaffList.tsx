import { getAnimeStaff } from "@this/services/animes";
import { Card } from "../Card";
import { Link } from "../Link";
import { StaffListItem } from "../StaffListItem";

import { StaffListProps } from "./types";

export async function StaffList({ anime }: StaffListProps) {
  const { data: staff } = await getAnimeStaff(anime.mal_id);

  return (
    <Card>
      <h2 className="text-primary-400 font-semibold text-lg p-4">Staff</h2>

      <ul className="divide-y divide-secondary-700/50">
        {staff.splice(0, 6).map((item) => (
          <StaffListItem key={item.person.mal_id} staff={item} />
        ))}
      </ul>

      <div className="flex items-center justify-end p-4 text-sm">
        <Link href={`/animes/${anime.mal_id}/staff`}>See all</Link>
      </div>
    </Card>
  );
}

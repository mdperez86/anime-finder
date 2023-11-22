import { Anime, PaginatedResponse, SearchAnimeRequest } from "@this/types";
import { get } from "../httpClient";

export async function getAnimeSearch(params: SearchAnimeRequest) {
  return get<PaginatedResponse<Anime>>("/v4/anime", params);
}

export async function getOrderByValues() {
  return [
    {
      label: "Default",
    },
    {
      order_by: "title",
      sort: "asc",
      label: "Title",
    },
    {
      order_by: "start_date",
      sort: "asc",
      label: "Date (asc)",
    },
    {
      order_by: "start_date",
      sort: "desc",
      label: "Date (desc)",
    },
    {
      order_by: "score",
      sort: "desc",
      label: "Score",
    },
    {
      order_by: "popularity",
      sort: "desc",
      label: "Popularity",
    },
    {
      order_by: "rank",
      sort: "desc",
      label: "Rank",
    },
  ];
}

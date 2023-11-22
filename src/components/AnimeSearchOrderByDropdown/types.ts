export type AnimeSearchOrderBy = {
  order_by?: string;
  sort?: string;
  label: string;
};

export type AnimeSearchOrderByDropdownProps = {
  orderByValues: AnimeSearchOrderBy[];
};

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page?: number;
  items?: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface Response<T> {
  data: T;
}

export interface PaginatedResponse<T> extends Response<T[]> {
  pagination: Pagination;
}

export interface SearchAnimeRequest extends Record<string, any> {
  page?: number;
  limit?: number;
  q?: string;
}

export interface AnimeMetadata {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface AnimeImageSizes {
  image_url?: string;
  small_image_url?: string;
  medium_image_url?: string;
  large_image_url?: string;
  maximum_image_url?: string;
}

export interface AnimeTitle {
  type: string;
  title: string;
}

export interface Anime {
  mal_id: number;
  url: string;
  images: {
    jpg: AnimeImageSizes;
    webp: AnimeImageSizes;
  };
  trailer: {
    youtube_id?: string;
    url?: string;
    embed_url?: string;
    images?: AnimeImageSizes;
  };
  approved: boolean;
  titles: AnimeTitle[];
  type?: "TV" | "OVA" | "Movie" | "Special" | "ONA" | "Music";
  source?: string;
  episodes?: number;
  status?: "Finished Airing" | "Currently Airing" | "Not yet aired";
  airing: boolean;
  aired: {
    from?: string;
    to?: string;
  };
  duration?: string;
  rating?:
    | "G - All Ages"
    | "PG - Children"
    | "PG-13 - Teens 13 or older"
    | "R - 17+ (violence & profanity)"
    | "R+ - Mild Nudity"
    | "Rx - Hentai";
  score?: number;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  members?: number;
  favorites?: number;
  synopsis?: string;
  background?: string;
  season?: "summer" | "winter" | "spring" | "fall";
  year?: number;
  broadcast: {
    day?: string;
    time?: string;
    timezone?: string;
    string?: string;
  };
  producers: AnimeMetadata[];
  licensors: AnimeMetadata[];
  studios: AnimeMetadata[];
  genres: AnimeMetadata[];
  explicit_genres: AnimeMetadata[];
  themes: AnimeMetadata[];
  demographics: AnimeMetadata[];
  streaming: AnimeMetadata[];
}

export interface AnimeCharacterVoiceActors {
  character: Person;
  role: string;
  favorites: number;
  voice_actors: VoiceActor[];
}

export interface Person {
  mal_id: number;
  url: string;
  images: {
    jpg: AnimeImageSizes;
    webp: AnimeImageSizes;
  };
  name: string;
}

export interface VoiceActor {
  person: Person;
  language: string;
}

export interface AnimeStaff {
  person: Person;
  positions: string[];
}

export interface AnimeVideoEpisode {
  mal_id: number;
  title: string;
  episode: string;
  url: string;
  images: {
    jpg: AnimeImageSizes;
  };
}

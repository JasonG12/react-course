import { Genre } from "./Genre";
import { Platform } from "./Platform";


export interface Game {
  id: number;
  name: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  slug: string;
  genres:Genre[];
  metacritic: number;
  rating_top: number;
  rating: number;
}

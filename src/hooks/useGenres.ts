


import { useQuery } from '@tanstack/react-query';
import ApiClient, {FetchResponse} from '../services/api-client';
import genres from '../data/genres';

const apiClient = new ApiClient<Genre>('/genres') ;

export interface Genre {
  id: number,
  name: string,    
  image_background: string
}
export const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
    staleTime : 60 * 60 * 24 * 1000, //24 hrs
    initialData: {count: genres.length, results: genres, next: null}
  })
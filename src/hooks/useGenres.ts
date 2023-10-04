


import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { FetchResponse } from './useData';
import genres from '../data/genres';
export interface Genre {
  id: number,
  name: string,    
  image_background: string
}
export const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => apiClient
    .get<FetchResponse<Genre>>('/genres')
    .then(res => res.data) ,
    staleTime : 60 * 60 * 24 * 1000, //24 hrs
    initialData: {count: genres.length, results: genres}
  })
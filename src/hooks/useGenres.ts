


import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api-client';
import genres from '../data/genres';
import ms from 'ms';
import { Genre } from '../entities/Genre';


const apiClient = new ApiClient<Genre>('/genres') ;

export const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
    staleTime : ms('24h'),
    initialData: genres
  })
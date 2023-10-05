import { useQuery } from "@tanstack/react-query"
import ApiClient, {FetchResponse} from "../services/api-client"
import platforms from "../data/platforms"

const apiClient = new ApiClient<Platform>("/latforms/lists/parents");

export interface Platform {
    id: number,
    name: string,
    slug: string
}

const usePlatform = () => useQuery({
    queryKey:  ['platforms'],
    queryFn: apiClient.getAll,
    initialData: {count: platforms.length, results: platforms, next: null},
    staleTime: 24 * 60 * 60 * 1000 //24h
})
export default usePlatform
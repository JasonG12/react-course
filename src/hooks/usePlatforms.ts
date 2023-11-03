import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
import platforms from "../data/platforms"
import ms from "ms";

export interface Platform {
    id: number,
    name: string,
    slug: string
}
const apiClient = new ApiClient<Platform>("/platforms/lists/parents");


const usePlatforms = () => useQuery({
    queryKey:  ['platforms'],
    queryFn: apiClient.getAll,
    initialData: platforms,
    staleTime: ms('24h')
})
export default usePlatforms
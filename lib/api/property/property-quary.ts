import { useMutation, useQuery } from "@tanstack/react-query"
import { GetAllPropertyApi, GetPropertyApi } from "./property-api"

export const GetAllProperty = () => useQuery({
    queryKey: ['property-list'],
    queryFn: GetAllPropertyApi,
    select: (data: any) => data.data
  })
export const GetProperty = () => useMutation({
  mutationKey: ['property'],
  mutationFn: (id: number) => GetPropertyApi(id),
})
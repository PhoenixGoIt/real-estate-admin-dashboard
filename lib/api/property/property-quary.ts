import { useQuery } from "@tanstack/react-query";
import { GetAllPropertyApi, GetPropertyApi } from "./property-api";

export const GetPropertyList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["property-list"],
    queryFn: GetAllPropertyApi,
  });
  return { data, isLoading, error };
};

export const GetPropertyById = (id: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["property", id],
    queryFn: () => GetPropertyApi(id),
    enabled: !!id,
  });
  return { data, isLoading, error };
};

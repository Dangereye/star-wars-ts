import { useInfiniteQuery, QueryFunctionContext } from "@tanstack/react-query";

const fetchData = async ({ queryKey, pageParam = 1 }: QueryFunctionContext) => {
  if (queryKey !== null) {
    const res = await fetch(
      `https://swapi.py4e.com/api/${queryKey}/?page=${pageParam}`
    );
    const data = await res.json();
    return data;
  }
};

export default function useInfiniteFetchData<T>(
  endPoint: string | null,
  getNextPageParam: (lastPage: T) => string | null
) {
  return useInfiniteQuery<T>([endPoint], fetchData, { getNextPageParam });
}

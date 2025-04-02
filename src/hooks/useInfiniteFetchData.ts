import { useInfiniteQuery, QueryFunctionContext } from "@tanstack/react-query";

const fetchData = async ({ queryKey, pageParam = 1 }: QueryFunctionContext) => {
  const [endPoint] = queryKey as [string]; // safely extract
  if (!endPoint) throw new Error("No endpoint provided");

  const res = await fetch(`https://swapi.py4e.com/api/${endPoint}/?page=${pageParam}`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Fetch failed: ${res.status} - ${text}`);
  }

  return res.json();
};

export default function useInfiniteFetchData<T>(
  endPoint: string | null,
  getNextPageParam: (lastPage: T) => string | null
) {
  return useInfiniteQuery<T>([endPoint], fetchData, { getNextPageParam });
}

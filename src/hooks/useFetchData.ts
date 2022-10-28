import { useQuery } from "@tanstack/react-query";

async function getData(endPoint: string | null) {
  if (endPoint !== null) {
    const res = await fetch(endPoint);
    return res.json();
  }
}

export default function useFetchData<T>(endPoint: string) {
  return useQuery<T>([endPoint], () => getData(endPoint));
}

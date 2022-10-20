import { useQuery } from "@tanstack/react-query";

async function getData(endPoint: string) {
  const res = await fetch(`https://swapi.py4e.com/api/${endPoint}`);
  return res.json();
}

export default function useFetchData<T>(endPoint: string) {
  return useQuery<T>([endPoint], () => getData(endPoint));
}

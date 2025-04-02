import { useQuery } from '@tanstack/react-query';

async function getData(endPoint: string | null) {
  if (!endPoint) throw new Error('No endpoint provided');

  const res = await fetch(endPoint);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Fetch failed: ${res.status} - ${text}`);
  }

  return res.json();
}

export default function useFetchData<T>(endPoint: string | null) {
  return useQuery<T>([endPoint], () => getData(endPoint), {
    enabled: !!endPoint, // Prevent fetch if endPoint is falsy
  });
}

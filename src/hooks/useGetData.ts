import { useEffect, useState } from "react";

export default function useGetData<T>(
  endPoint: string,
  initialState: T
): [T, boolean, boolean] {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://swapi.dev/api/${endPoint}`);
        const data = await res.json();
        if (!res.ok) {
          console.log(res);
          setIsLoading(false);
          setIsError(true);
          return;
        } else {
          setData(data);
          setIsLoading(false);
          setIsError(false);
        }
      } catch {
        setIsLoading(false);
        setIsError(true);
      }
    };
    getData();
  }, []);
  return [data, isLoading, isError];
}

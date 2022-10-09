import { useState, useEffect } from "react";

export default function useGetData<T>(
  endPoint: string,
  initialState: T
): [boolean, boolean, T] {
  const [data, setData] = useState<T>(initialState);
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
          setIsLoading(false);
          setIsError(false);
          setData(data.results);
        }
      } catch {
        setIsLoading(false);
        setIsError(true);
      }
    };
    getData();
  }, [endPoint]);

  return [isLoading, isError, data];
}

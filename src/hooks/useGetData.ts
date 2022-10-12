import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function useGetData(endPoint: string): {} {
  const { appData, setAppData } = useContext(AppContext);
  const key = endPoint as keyof typeof appData;

  useEffect(() => {
    const getData = async () => {
      try {
        setAppData({ ...appData, isLoading: true });
        const res = await fetch(`https://swapi.dev/api/${endPoint}`);
        const data = await res.json();
        if (!res.ok) {
          console.log(res);
          setAppData({ ...appData, isLoading: false, isError: false });
          return;
        } else {
          setAppData({
            ...appData,
            [key]: data.results,
            isLoading: false,
            isError: false,
          });
        }
      } catch {
        setAppData({ ...appData, isLoading: false, isError: true });
      }
    };

    getData();
  }, []);
  return {};
}

import { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function useGetData(endPoint: string): {} {
  const { data, setData } = useContext(AppContext);
  const key = endPoint as keyof typeof data;

  useEffect(() => {
    const getData = async () => {
      try {
        setData({ ...data, isLoading: true });
        const res = await fetch(`https://swapi.dev/api/${endPoint}`);
        const newData = await res.json();
        if (!res.ok) {
          console.log(res);
          setData({ ...data, isLoading: false, isError: false });
          return;
        } else {
          setData({
            ...data,
            [key]: newData.results,
            isLoading: false,
            isError: false,
          });
        }
      } catch {}
    };

    getData();
  }, [endPoint]);
  return {};
}

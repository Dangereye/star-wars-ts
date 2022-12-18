import { useRef, useEffect } from "react";
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  InfiniteData,
} from "@tanstack/react-query";

// Interfaces
import { IFilm } from "../interfaces/film";
import { IPage } from "../interfaces/page";
import { IPeople } from "../interfaces/people";
import { IPlanet } from "../interfaces/planet";
import { ISpecies } from "../interfaces/species";
import { IStarship } from "../interfaces/starship";
import { IVehicle } from "../interfaces/vehicle";

export default function useObserver(
  data:
    | InfiniteData<
        IPage<IFilm | IPeople | ISpecies | IPlanet | IStarship | IVehicle>
      >
    | undefined,
  hasNextPage: boolean | undefined,
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<
    InfiniteQueryObserverResult<
      IPage<IFilm | IPeople | ISpecies | IPlanet | IStarship | IVehicle>,
      unknown
    >
  >
) {
  const lastCard = useRef(null);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.isIntersecting && hasNextPage) {
      fetchNextPage();
      observer.disconnect();
    }
  };
  const options = { rootMargin: "400px", threshold: 0.1 };
  const observer = new IntersectionObserver(callback, options);

  useEffect(() => {
    if (lastCard.current) observer.observe(lastCard.current);

    return () => {
      if (lastCard.current) observer.unobserve(lastCard.current);
    };
  }, [data, observer]);
  return lastCard;
}

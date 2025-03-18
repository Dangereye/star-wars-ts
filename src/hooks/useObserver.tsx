import { useRef, useEffect } from 'react';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  InfiniteData,
} from '@tanstack/react-query';

// Interfaces
import { IFilm } from '../interfaces/film';
import { IPage } from '../interfaces/page';
import { IPeople } from '../interfaces/people';
import { IPlanet } from '../interfaces/planet';
import { ISpecies } from '../interfaces/species';
import { IStarship } from '../interfaces/starship';
import { IVehicle } from '../interfaces/vehicle';

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
  const lastCard = useRef<HTMLAnchorElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!lastCard.current || !hasNextPage) return;

    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      },
      { rootMargin: '400px', threshold: 0.1 }
    );

    observer.current.observe(lastCard.current);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [data, hasNextPage, fetchNextPage]);

  return lastCard;
}

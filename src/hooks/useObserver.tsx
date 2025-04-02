import { useCallback, useRef } from 'react';
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';

import { IFilm } from '../interfaces/film';
import { IPage } from '../interfaces/page';
import { IPeople } from '../interfaces/people';
import { IPlanet } from '../interfaces/planet';
import { ISpecies } from '../interfaces/species';
import { IStarship } from '../interfaces/starship';
import { IVehicle } from '../interfaces/vehicle';

type ItemType = IFilm | IPeople | ISpecies | IPlanet | IStarship | IVehicle;
type PageType = IPage<ItemType>;

export default function useObserver(
  hasNextPage: boolean | undefined,
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<InfiniteQueryObserverResult<PageType, unknown>>
) {
  const observer = useRef<IntersectionObserver | null>(null);

  const lastCardRef = useCallback(
    (node: HTMLAnchorElement | null) => {
      if (!hasNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            fetchNextPage().catch((err) =>
              console.error('Error fetching next page:', err)
            );
          }
        },
        {
          rootMargin: '400px',
          threshold: 0.1,
        }
      );

      if (node) observer.current.observe(node);
    },
    [hasNextPage, fetchNextPage]
  );

  return lastCardRef;
}

// Hooks
import useInfiniteFetchData from '../hooks/useInfiniteFetchData';
import useObserver from '../hooks/useObserver';

// Components
import IsLoading from '../components/shared/is_loading/IsLoading';
import IsError from '../components/shared/is_error/IsError';
import InfiniteDataCards from '../components/shared/cards/InfiniteDataCards';
import InfiniteDataCard from '../components/shared/cards/InfiniteDataCard';

// Interfaces
import { IPage } from '../interfaces/page';
import { IFilm } from '../interfaces/film';

// Utilities
import FormatDate from '../utilities/FormatDate';
import Image from '../components/shared/Image';
import { formatImageName } from '../utilities/formatImageName';

export default function FilmsPage() {
  const getNextPageParam = (lastPage: IPage<IFilm>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/films/?page=`, '')
      : null;

  const {
    isLoading,
    isError,
    data: films,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteFetchData<IPage<IFilm>>('films', getNextPageParam);

  const lastCard = useObserver(hasNextPage, fetchNextPage);

  if (isLoading) {
    return <IsLoading message='Films' />;
  }

  if (isError) {
    return <IsError message='Unable to retrieve films' />;
  }

  return (
    <InfiniteDataCards title='Films' data={films}>
      {films?.pages.map((page) =>
        page?.results
          .sort((a, b) => a.episode_id - b.episode_id)
          .map((film, i) => {
            if (i + 1 === page.results.length) {
              return (
                <InfiniteDataCard
                  ref={lastCard}
                  key={film.title}
                  type='films'
                  image={() => (
                    <Image
                      src={`/images/films/${formatImageName(film.title)}.webp`}
                      fallback='/images/films/error_600x900.webp'
                      width={600}
                      height={900}
                      alt={film.title}
                    />
                  )}
                  url={film.url}
                  heading={film.title}
                  body={<FormatDate date={film.release_date} />}
                />
              );
            }
            return (
              <InfiniteDataCard
                key={film.title}
                type='films'
                image={() => (
                  <Image
                    src={`/images/films/${formatImageName(film.title)}.webp`}
                    fallback='/images/films/error_600x900.webp'
                    width={600}
                    height={900}
                    alt={film.title}
                  />
                )}
                url={film.url}
                heading={film.title}
                body={<FormatDate date={film.release_date} />}
              />
            );
          })
      )}
    </InfiniteDataCards>
  );
}

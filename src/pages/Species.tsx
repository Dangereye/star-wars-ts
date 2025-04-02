// Hooks
import useInfiniteFetchData from '../hooks/useInfiniteFetchData';
import useObserver from '../hooks/useObserver';

// Components
import IsLoading from '../components/shared/is_loading/IsLoading';
import IsError from '../components/shared/is_error/IsError';
import InfiniteDataCards from '../components/shared/cards/InfiniteDataCards';
import InfiniteDataCard from '../components/shared/cards/InfiniteDataCard';
import Image from '../components/shared/Image';

// Interfaces
import { IPage } from '../interfaces/page';
import { ISpecies } from '../interfaces/species';

// Utilities
import { formatImageName } from '../utilities/formatImageName';

export default function Species() {
  const getNextPageParam = (lastPage: IPage<ISpecies>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/species/?page=`, '')
      : null;

  const {
    isLoading,
    isError,
    data: species,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteFetchData<IPage<ISpecies>>('species', getNextPageParam);

  const lastCard = useObserver(hasNextPage, fetchNextPage);

  if (isLoading) {
    return <IsLoading message='Species' />;
  }

  if (isError) {
    return <IsError message='Unable to retrieve Species' />;
  }

  return (
    <InfiniteDataCards title='species' data={species}>
      {species?.pages.map((page) =>
        page?.results.map((entity, i) => {
          if (i + 1 === page.results.length) {
            return (
              <InfiniteDataCard
                ref={lastCard}
                key={entity.name}
                type='species'
                color='species'
                image={() => (
                  <Image
                    src={`/images/species/${formatImageName(entity.name)}.webp`}
                    fallback='/images/error_500x500.webp'
                    alt={entity.name}
                  />
                )}
                url={entity.url}
                heading={entity.name}
                body={entity.classification}
              />
            );
          }
          return (
            <InfiniteDataCard
              key={entity.name}
              type='species'
              color='species'
              image={() => (
                <Image
                  src={`/images/species/${formatImageName(entity.name)}.webp`}
                  fallback='/images/error_500x500.webp'
                  alt={entity.name}
                />
              )}
              url={entity.url}
              heading={entity.name}
              body={entity.classification}
            />
          );
        })
      )}
    </InfiniteDataCards>
  );
}

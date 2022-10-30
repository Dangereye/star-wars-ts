// Hooks
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import InfiniteDataCards from "../components/shared/cards/InfiniteDataCards";
import PlanetCard from "../components/shared/cards/PlanetCard";

// Interfaces
import { IPage } from "../interfaces/page";
import { IPlanet } from "../interfaces/planet";

export default function People() {
  const getNextPageParam = (lastPage: IPage<IPlanet>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/planets/?page=`, "")
      : null;

  const {
    isLoading,
    isError,
    data: planets,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteFetchData<IPage<IPlanet>>("planets", getNextPageParam);

  if (isLoading) {
    return <IsLoading message={`People`} />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve people" />;
  }

  return (
    <InfiniteDataCards
      title="planets"
      data={planets}
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
    >
      {planets.pages.map((page) =>
        page.results?.map((planet) => (
          <PlanetCard
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            url={planet.url}
          />
        ))
      )}
    </InfiniteDataCards>
  );
}

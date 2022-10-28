// Hooks
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";

// Components
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";
import Cards from "../components/shared/cards/Cards";

// Interfaces
import { IPage } from "../interfaces/page";
import { ISpecies } from "../interfaces/species";
import SpeciesCard from "../components/shared/cards/SpeciesCard";

export default function Species() {
  const getNextPageParam = (lastPage: IPage<ISpecies>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/species/?page=`, "")
      : null;

  const {
    isLoading,
    isError,
    data: species,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteFetchData<IPage<ISpecies>>("species", getNextPageParam);
  if (isLoading) {
    return <IsLoading message="Species" />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve Species" />;
  }
  return (
    <Cards
      title="species"
      data={species}
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
    >
      {species?.pages.map((page) =>
        page?.results.map((entity) => (
          <SpeciesCard
            key={entity.name}
            name={entity.name}
            classification={entity.classification}
            url={entity.url}
          />
        ))
      )}
    </Cards>
  );
}

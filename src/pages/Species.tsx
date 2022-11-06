// Hooks
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";

// Components
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";
import InfiniteDataCards from "../components/shared/cards/InfiniteDataCards";
import InfiniteDataCard from "../components/shared/cards/InfiniteDataCard";

// Interfaces
import { IPage } from "../interfaces/page";
import { ISpecies } from "../interfaces/species";

// Icons
import { GiDna1 } from "react-icons/gi";

export default function Species() {
  const getNextPageParam = (lastPage: IPage<ISpecies>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/species/?page=`, "")
      : null;

  const {
    isLoading,
    isError,
    data: species,
  } = useInfiniteFetchData<IPage<ISpecies>>("species", getNextPageParam);

  if (isLoading) {
    return <IsLoading message="Species" />;
  }

  if (isError) {
    return <IsError message="Unable to retrieve Species" />;
  }

  return (
    <InfiniteDataCards title="species" data={species}>
      {species?.pages.map((page) =>
        page?.results.map((entity) => (
          <InfiniteDataCard
            type="species"
            color="species"
            icon={() => <GiDna1 />}
            url={entity.url}
            heading={entity.name}
            body={entity.classification}
          />
        ))
      )}
    </InfiniteDataCards>
  );
}

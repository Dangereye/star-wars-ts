// Hooks
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import PersonCard from "../components/shared/cards/person/PersonCard";
import InfiniteDataCards from "../components/shared/cards/InfiniteDataCards";

// Interfaces
import { IPage } from "../interfaces/page";
import { IPeople } from "../interfaces/people";

export default function People() {
  const getNextPageParam = (lastPage: IPage<IPeople>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/people/?page=`, "")
      : null;

  const {
    isLoading,
    isError,
    data: people,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteFetchData<IPage<IPeople>>("people", getNextPageParam);

  if (isLoading) {
    return <IsLoading message={`People`} />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve people" />;
  }

  return (
    <InfiniteDataCards
      title="People"
      data={people}
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
    >
      {people.pages.map((page) =>
        page.results?.map((person) => (
          <PersonCard
            key={person.name}
            name={person.name}
            species={person.species}
            gender={person.gender}
            url={person.url}
          />
        ))
      )}
    </InfiniteDataCards>
  );
}

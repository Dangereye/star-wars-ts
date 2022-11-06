// Hooks
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";
import useObserver from "../hooks/useObserver";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import InfiniteDataCards from "../components/shared/cards/InfiniteDataCards";
import InfiniteDataCard from "../components/shared/cards/InfiniteDataCard";

// Interfaces
import { IPage } from "../interfaces/page";
import { IPeople } from "../interfaces/people";

// Icons
import { getPeopleIcon } from "../icons/getPeopleIcon";

export default function People() {
  const getNextPageParam = (lastPage: IPage<IPeople>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/people/?page=`, "")
      : null;

  const {
    isLoading,
    isError,
    data: people,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteFetchData<IPage<IPeople>>("people", getNextPageParam);

  const lastCard = useObserver(people, hasNextPage, fetchNextPage);

  if (isLoading) {
    return <IsLoading message={`People`} />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve people" />;
  }

  return (
    <InfiniteDataCards title="People" data={people}>
      {people.pages.map((page) =>
        page.results?.map((person, i) => {
          if (i + 1 === page.results.length) {
            return (
              <InfiniteDataCard
                ref={lastCard}
                key={person.name}
                type={"people"}
                color={person.gender}
                icon={() => getPeopleIcon(person)}
                url={person.url}
                heading={person.name}
                species={person.species}
              />
            );
          }
          return (
            <InfiniteDataCard
              key={person.name}
              type={"people"}
              color={person.gender}
              icon={() => getPeopleIcon(person)}
              url={person.url}
              heading={person.name}
              species={person.species}
            />
          );
        })
      )}
    </InfiniteDataCards>
  );
}

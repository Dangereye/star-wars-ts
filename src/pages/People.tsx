// Hooks
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import InfiniteDataCards from "../components/shared/cards/InfiniteDataCards";
import InfiniteDataCard from "../components/shared/cards/InfiniteDataCard";

// Interfaces
import { IPage } from "../interfaces/page";
import { IPeople } from "../interfaces/people";

import {
  TbGenderFemale,
  TbGenderHermaphrodite,
  TbGenderMale,
  TbGenderNeutrois,
} from "react-icons/tb";

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

  const getPeopleIcon = (person: IPeople) => {
    if (person.gender === "male") {
      return <TbGenderMale />;
    }
    if (person.gender === "female") {
      return <TbGenderFemale />;
    }
    if (person.gender === "hermaphrodite") {
      return <TbGenderHermaphrodite />;
    }
    return <TbGenderNeutrois />;
  };

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
          <InfiniteDataCard
            type={"people"}
            color={person.gender}
            icon={() => getPeopleIcon(person)}
            url={person.url}
            heading={person.name}
            species={person.species}
          />
        ))
      )}
    </InfiniteDataCards>
  );
}

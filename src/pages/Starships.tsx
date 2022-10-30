// Hooks
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import InfiniteDataCards from "../components/shared/cards/InfiniteDataCards";
import InfiniteDataCard from "../components/shared/cards/InfiniteDataCard";

// Interfaces
import { IPage } from "../interfaces/page";
import { IStarship } from "../interfaces/starship";

// Icons
import { VscRocket } from "react-icons/vsc";
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";

export default function People() {
  const getNextPageParam = (lastPage: IPage<IStarship>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/starships/?page=`, "")
      : null;

  const {
    isLoading,
    isError,
    data: starships,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteFetchData<IPage<IStarship>>("starships", getNextPageParam);

  if (isLoading) {
    return <IsLoading message={`starships`} />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve starships" />;
  }

  return (
    <InfiniteDataCards
      title="starships"
      data={starships}
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
    >
      {starships.pages.map((page) =>
        page.results?.map((starship) => (
          <InfiniteDataCard
            key={starship.name}
            type="starships"
            icon={() => <VscRocket />}
            url={starship.url}
            color="starships"
            heading={starship.name}
            body={<StringToStringArray string={starship.starship_class} />}
          />
        ))
      )}
    </InfiniteDataCards>
  );
}

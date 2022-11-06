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
import { IPlanet } from "../interfaces/planet";

// Icons
import { BiPlanet } from "react-icons/bi";
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";

export default function People() {
  const getNextPageParam = (lastPage: IPage<IPlanet>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/planets/?page=`, "")
      : null;

  const {
    isLoading,
    isError,
    data: planets,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteFetchData<IPage<IPlanet>>("planets", getNextPageParam);

  const lastCard = useObserver(planets, hasNextPage, fetchNextPage);

  if (isLoading) {
    return <IsLoading message={`planets`} />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve planets" />;
  }

  return (
    <InfiniteDataCards title="planets" data={planets}>
      {planets.pages.map((page) =>
        page.results?.map((planet, i) => {
          if (i + 1 === page.results.length) {
            return (
              <InfiniteDataCard
                ref={lastCard}
                key={planet.name}
                type="planets"
                icon={() => <BiPlanet />}
                url={planet.url}
                color="planets"
                heading={planet.name}
                body={<StringToStringArray string={planet.climate} />}
              />
            );
          }
          return (
            <InfiniteDataCard
              key={planet.name}
              type="planets"
              icon={() => <BiPlanet />}
              url={planet.url}
              color="planets"
              heading={planet.name}
              body={<StringToStringArray string={planet.climate} />}
            />
          );
        })
      )}
    </InfiniteDataCards>
  );
}

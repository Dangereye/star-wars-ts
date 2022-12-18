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
import { IStarship } from "../interfaces/starship";

// Utilities
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";
import Image from "../components/shared/Image";
import { formatImageName } from "../utilities/formatImageName";

export default function People() {
  const getNextPageParam = (lastPage: IPage<IStarship>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/starships/?page=`, "")
      : null;

  const {
    isLoading,
    isError,
    data: starships,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteFetchData<IPage<IStarship>>("starships", getNextPageParam);

  const lastCard = useObserver(starships, hasNextPage, fetchNextPage);

  if (isLoading) {
    return <IsLoading message={`starships`} />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve starships" />;
  }

  return (
    <InfiniteDataCards title="starships" data={starships}>
      {starships.pages.map((page) =>
        page.results?.map((starship, i) => {
          if (i + 1 === page.results.length) {
            return (
              <InfiniteDataCard
                ref={lastCard}
                key={starship.name}
                type="starships"
                image={() => (
                  <Image
                    src={`/images/starships/${formatImageName(
                      starship.name
                    )}.webp`}
                    fallback="/images/error_500x500.webp"
                    alt={starship.name}
                  />
                )}
                url={starship.url}
                color="starships"
                heading={starship.name}
                body={<StringToStringArray string={starship.starship_class} />}
              />
            );
          }
          return (
            <InfiniteDataCard
              key={starship.name}
              type="starships"
              image={() => (
                <Image
                  src={`/images/starships/${formatImageName(
                    starship.name
                  )}.webp`}
                  fallback="/images/error_500x500.webp"
                  alt={starship.name}
                />
              )}
              url={starship.url}
              color="starships"
              heading={starship.name}
              body={<StringToStringArray string={starship.starship_class} />}
            />
          );
        })
      )}
    </InfiniteDataCards>
  );
}

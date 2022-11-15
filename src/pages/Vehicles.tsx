// Hooks
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";
import useObserver from "../hooks/useObserver";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import InfiniteDataCards from "../components/shared/cards/InfiniteDataCards";
import InfiniteDataCard from "../components/shared/cards/InfiniteDataCard";
import Image from "../components/shared/Image";

// Interfaces
import { IPage } from "../interfaces/page";
import { IVehicle } from "../interfaces/vehicle";

// Utilities
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";
import { formatImageName } from "../utilities/formatImageName";

export default function People() {
  const getNextPageParam = (lastPage: IPage<IVehicle>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/vehicles/?page=`, "")
      : null;

  const {
    isLoading,
    isError,
    data: vehicles,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteFetchData<IPage<IVehicle>>("vehicles", getNextPageParam);

  const lastCard = useObserver(vehicles, hasNextPage, fetchNextPage);

  if (isLoading) {
    return <IsLoading message={`vehicles`} />;
  }

  if (isError) {
    return <IsError message="Unable to retrieve vehicles" />;
  }

  return (
    <InfiniteDataCards title="vehicles" data={vehicles}>
      {vehicles.pages.map((page) =>
        page.results?.map((vehicle, i) => {
          if (i + 1 === page.results.length) {
            return (
              <InfiniteDataCard
                ref={lastCard}
                key={vehicle.name}
                type="vehicles"
                image={() => (
                  <Image
                    src={`/images/vehicles/${formatImageName(
                      vehicle.name
                    )}.webp`}
                    fallback="/images/error_500x500.webp"
                    alt={vehicle.name}
                  />
                )}
                url={vehicle.url}
                color="vehicles"
                heading={vehicle.name}
                body={<StringToStringArray string={vehicle.model} />}
              />
            );
          }
          return (
            <InfiniteDataCard
              key={vehicle.name}
              type="vehicles"
              image={() => (
                <Image
                  src={`/images/vehicles/${formatImageName(vehicle.name)}.webp`}
                  fallback="/images/error_500x500.webp"
                  alt={vehicle.name}
                />
              )}
              url={vehicle.url}
              color="vehicles"
              heading={vehicle.name}
              body={<StringToStringArray string={vehicle.model} />}
            />
          );
        })
      )}
    </InfiniteDataCards>
  );
}

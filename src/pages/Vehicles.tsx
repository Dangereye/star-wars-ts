// Hooks
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import InfiniteDataCards from "../components/shared/cards/InfiniteDataCards";
import InfiniteDataCard from "../components/shared/cards/InfiniteDataCard";

// Interfaces
import { IPage } from "../interfaces/page";
import { IVehicle } from "../interfaces/vehicle";

// Icons
import { GiTank } from "react-icons/gi";

// Utilities
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";

export default function People() {
  const getNextPageParam = (lastPage: IPage<IVehicle>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/vehicles/?page=`, "")
      : null;

  const {
    isLoading,
    isError,
    data: vehicles,
  } = useInfiniteFetchData<IPage<IVehicle>>("vehicles", getNextPageParam);

  if (isLoading) {
    return <IsLoading message={`vehicles`} />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve vehicles" />;
  }

  return (
    <InfiniteDataCards title="vehicles" data={vehicles}>
      {vehicles.pages.map((page) =>
        page.results?.map((vehicle) => (
          <InfiniteDataCard
            key={vehicle.name}
            type="vehicles"
            icon={() => <GiTank />}
            url={vehicle.url}
            color="vehicles"
            heading={vehicle.name}
            body={<StringToStringArray string={vehicle.model} />}
          />
        ))
      )}
    </InfiniteDataCards>
  );
}

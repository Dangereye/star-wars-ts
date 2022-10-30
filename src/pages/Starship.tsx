import { useParams } from "react-router-dom";
import StarshipHeader from "../components/layout/header/StarshipHeader";
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";
import useFetchData from "../hooks/useFetchData";

import { IStarship } from "../interfaces/starship";

export default function Person() {
  const { starshipId } = useParams();
  const {
    data: starships,
    isLoading,
    isError,
  } = useFetchData<IStarship>(
    `https://swapi.py4e.com/api/starships/${starshipId}`
  );

  if (isLoading) {
    return <IsLoading message="starships" />;
  }

  if (isError) {
    return <IsError message="Unable to retrieve starships" />;
  }

  return (
    <>
      <StarshipHeader data={starships} />
    </>
  );
}

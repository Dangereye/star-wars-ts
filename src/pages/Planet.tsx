import { useParams } from "react-router-dom";
import PlanetHeader from "../components/layout/header/PlanetHeader";
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";
import useFetchData from "../hooks/useFetchData";

import { IPlanet } from "../interfaces/planet";

export default function Person() {
  const { planetId } = useParams();
  const {
    data: planets,
    isLoading,
    isError,
  } = useFetchData<IPlanet>(`https://swapi.py4e.com/api/planets/${planetId}`);

  if (isLoading) {
    return <IsLoading message="Planet" />;
  }

  if (isError) {
    return <IsError message="Unable to retrieve planet" />;
  }

  return (
    <>
      <PlanetHeader data={planets} />
    </>
  );
}

import { useParams } from "react-router-dom";
import SpeciesHeader from "../components/layout/header/SpeciesHeader";
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";
import useFetchData from "../hooks/useFetchData";

import { ISpecies } from "../interfaces/species";

export default function Entity() {
  const { speciesId } = useParams();
  const {
    data: species,
    isLoading,
    isError,
  } = useFetchData<ISpecies>(`https://swapi.py4e.com/api/species/${speciesId}`);

  if (isLoading) {
    return <IsLoading message="Species" />;
  }

  if (isError) {
    return <IsError message="Unable to retrieve species" />;
  }

  return (
    <>
      <SpeciesHeader data={species} />
    </>
  );
}

// Hooks
import useFetchData from "../../hooks/useFetchData";

// Components
import BodyText from "./text/BodyText";

// Interfaces
import { ISpecies } from "../../interfaces/species";

type SpeciesProps = {
  url: string[];
};

export default function Species({ url }: SpeciesProps) {
  const { data: species, isLoading, isError } = useFetchData<ISpecies>(url[0]);
  return (
    <>
      {isLoading ? (
        <BodyText text="Loading..." />
      ) : isError ? (
        <BodyText text="Unavailable" />
      ) : (
        <BodyText text={species?.name} />
      )}
    </>
  );
}

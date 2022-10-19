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
  const checkId = () => {
    let id = "species/1";
    if (url[0]) {
      id = url[0].replace("https://swapi.dev/api/", "");
      return id;
    } else {
      return id;
    }
  };

  const {
    data: species,
    isLoading,
    isError,
  } = useFetchData<ISpecies>(checkId());
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

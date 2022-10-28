// Hooks
import useFetchData from "../../hooks/useFetchData";

// Components
import BodyText from "./text/BodyText";

// Interfaces
import { ISpecies } from "../../interfaces/species";
import LinkText from "./text/LinkText";

type SpeciesProps = {
  url: string[];
};

export default function Species({ url }: SpeciesProps) {
  const { data: species, isLoading, isError } = useFetchData<ISpecies>(url[0]);
  const href = url[0]?.replace("https://swapi.py4e.com/api", "");
  return (
    <>
      {isLoading ? (
        <BodyText text="Loading..." />
      ) : isError ? (
        <BodyText text="n/a" />
      ) : (
        <LinkText href={href} text={species?.name} />
      )}
    </>
  );
}

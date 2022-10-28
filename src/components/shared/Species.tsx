// Hooks
import useFetchData from "../../hooks/useFetchData";

// Components
import BodyText from "./text/BodyText";

// Interfaces
import { ISpecies } from "../../interfaces/species";
import LinkText from "./text/LinkText";

type SpeciesProps = {
  url: string[];
  link: boolean;
};

export default function Species({ url, link }: SpeciesProps) {
  const { data: species, isLoading, isError } = useFetchData<ISpecies>(url[0]);
  const href = url[0]?.replace("https://swapi.py4e.com/api", "");
  return (
    <>
      {isLoading ? (
        <BodyText text="Loading..." />
      ) : isError ? (
        <BodyText text="n/a" />
      ) : link ? (
        <LinkText href={href} text={species?.name} />
      ) : (
        <BodyText text={species?.name} />
      )}
    </>
  );
}

Species.defaultProps = {
  link: false,
};

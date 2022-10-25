// Hooks
import useFetchData from "../../hooks/useFetchData";

// Components
import BodyText from "./text/BodyText";

// Interfaces
import { ISpecies } from "../../interfaces/species";
import LinkText from "./text/LinkText";

type SpeciesProps = {
  url: string[];
  icon?: boolean;
};

export default function Species({ url, icon }: SpeciesProps) {
  const { data: species, isLoading, isError } = useFetchData<ISpecies>(url[0]);
  const href = url[0]?.replace("https://swapi.py4e.com/api", "");
  return (
    <>
      {isLoading ? (
        <BodyText text="Loading..." />
      ) : isError ? (
        <BodyText text="Unavailable" />
      ) : (
        <LinkText href={href} icon={icon} text={species?.name} />
      )}
    </>
  );
}

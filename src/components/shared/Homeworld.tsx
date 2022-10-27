// Hooks
import useFetchData from "../../hooks/useFetchData";

// Components
import BodyText from "./text/BodyText";

// Interfaces
import { IPlanet } from "../../interfaces/planet";
import LinkText from "./text/LinkText";

type HomeworldProps = {
  url: string;
};

export default function Homeworld({ url }: HomeworldProps) {
  const { data: homeworld, isLoading, isError } = useFetchData<IPlanet>(url);
  const href = url?.replace("https://swapi.py4e.com/api", "");
  return (
    <>
      {isLoading ? (
        <BodyText text="Loading..." />
      ) : isError ? (
        <BodyText text="Unavailable" />
      ) : (
        <LinkText href={href} text={homeworld?.name} />
      )}
    </>
  );
}

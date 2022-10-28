// Hooks
import useFetchData from "../../hooks/useFetchData";

// Components
import BodyText from "./text/BodyText";

// Interfaces
import { IPlanet } from "../../interfaces/planet";
import LinkText from "./text/LinkText";

type HomeworldProps = {
  url: string;
  link?: boolean;
};

export default function Homeworld({ url, link }: HomeworldProps) {
  const { data: homeworld, isLoading, isError } = useFetchData<IPlanet>(url);
  const href = url?.replace("https://swapi.py4e.com/api", "");
  return (
    <>
      {isLoading ? (
        <BodyText text="Loading..." />
      ) : isError ? (
        <BodyText text="n/a" />
      ) : link ? (
        <LinkText href={href} text={homeworld?.name} />
      ) : (
        <BodyText text={homeworld?.name} />
      )}
    </>
  );
}

Homeworld.defaultProps = {
  link: false,
};

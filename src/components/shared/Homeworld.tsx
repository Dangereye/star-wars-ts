// Hooks
import useFetchData from "../../hooks/useFetchData";

// Components
import BodyText from "./text/BodyText";

// Interfaces
import { IHomeworld } from "../../interfaces/homeworld";
import LinkText from "./text/LinkText";

type HomeworldProps = {
  url: string;
};

export default function Homeworld({ url }: HomeworldProps) {
  const { data: homeworld, isLoading, isError } = useFetchData<IHomeworld>(url);
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

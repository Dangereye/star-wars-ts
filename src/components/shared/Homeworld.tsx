// Hooks
import useFetchData from "../../hooks/useFetchData";

// Components
import BodyText from "./text/BodyText";

// Interfaces
import { IHomeworld } from "../../interfaces/homeworld";

type HomeworldProps = {
  url: string;
};

export default function Homeworld({ url }: HomeworldProps) {
  const { data: homeworld, isLoading, isError } = useFetchData<IHomeworld>(url);
  return (
    <>
      {isLoading ? (
        <BodyText text="Loading..." />
      ) : isError ? (
        <BodyText text="Unavailable" />
      ) : (
        <BodyText text={homeworld?.name} />
      )}
    </>
  );
}

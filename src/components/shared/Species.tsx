import { useEffect } from "react";
// Hooks
import useGetData from "../../hooks/useGetData";

// Components
import BodyText from "./text/BodyText";

// Interfaces
import { ISpecies } from "../../interfaces/species";

type SpeciesProps = {
  url: string[];
};

export default function Species({ url }: SpeciesProps) {
  let id = "species/1";

  useEffect(() => {
    if (url[0]) {
      id = url[0].replace("https://swapi.dev/api/", "");
    }
  }, [url]);

  const [data, isLoading, isError] = useGetData<ISpecies>(id, {} as ISpecies);
  return (
    <>
      {isLoading ? (
        "loading"
      ) : isError ? (
        "Error"
      ) : (
        <BodyText text={data?.name} />
      )}
    </>
  );
}

import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Components
import GenericHeader from "../components/layout/header/GenericHeader";
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";
import GetHomeworld from "../components/shared/GetHomeworld";

// Icons
import { GiDna1 } from "react-icons/gi";

// Interfaces
import { ISpecies } from "../interfaces/species";

// Utilities
import CheckUnits from "../utilities/CheckUnits";
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";

export default function Entity() {
  const { speciesId } = useParams();
  const {
    data: species,
    isLoading,
    isError,
  } = useFetchData<ISpecies>(`https://swapi.py4e.com/api/species/${speciesId}`);

  if (isLoading) {
    return <IsLoading message="Species" />;
  }

  if (isError) {
    return <IsError message="Unable to retrieve species" />;
  }

  const list = [
    { name: "classification", value: species.classification },
    { name: "designation", value: species.designation },
    {
      name: "average height",
      value: <CheckUnits type="cm" string={species.average_height} />,
    },
    {
      name: "skin colours",
      value: <StringToStringArray string={species.skin_colors} />,
    },
    {
      name: "hair colours",
      value: <StringToStringArray string={species.hair_colors} />,
    },
    {
      name: "eye colours",
      value: <StringToStringArray string={species.eye_colors} />,
    },
    {
      name: "average lifespan",
      value: <CheckUnits type="yrs" string={species.average_lifespan} />,
    },
    {
      name: "homeworld",
      value: <GetHomeworld url={species.homeworld} link />,
    },
    {
      name: "language",
      value: species.language,
    },
  ];

  return (
    <>
      <GenericHeader name={species.name} icon={() => <GiDna1 />} list={list} />
    </>
  );
}

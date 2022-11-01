import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Components
import GenericHeader from "../components/layout/header/GenericHeader";
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";

// Icons
import { BiPlanet } from "react-icons/bi";

// Interfaces
import { IPlanet } from "../interfaces/planet";

// Utilities
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";
import CheckUnits from "../utilities/CheckUnits";

export default function Person() {
  const { planetId } = useParams();
  const {
    data: planet,
    isLoading,
    isError,
  } = useFetchData<IPlanet>(`https://swapi.py4e.com/api/planets/${planetId}`);

  if (isLoading) {
    return <IsLoading message="Planet" />;
  }

  if (isError) {
    return <IsError message="Unable to retrieve planet" />;
  }

  const list = [
    { name: "climate", value: <StringToStringArray string={planet.climate} /> },
    { name: "terrain", value: <StringToStringArray string={planet.terrain} /> },
    {
      name: "surface water",
      value: <CheckUnits type="%" string={planet.surface_water} />,
    },
    {
      name: "diameter",
      value: <CheckUnits type="km" string={planet.diameter} />,
    },
    {
      name: "orbital period (year)",
      value: <CheckUnits type=" days" string={planet.orbital_period} />,
    },
    {
      name: "rotation period (day)",
      value: <CheckUnits type="hrs" string={planet.rotation_period} />,
    },
    {
      name: "gravity",
      value: <StringToStringArray string={planet.gravity} />,
    },
    {
      name: "population",
      value: <CheckUnits string={planet.population} />,
    },
  ];

  return (
    <>
      <GenericHeader name={planet.name} icon={() => <BiPlanet />} list={list} />
    </>
  );
}

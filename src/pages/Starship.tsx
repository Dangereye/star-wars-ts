import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Components
import GenericHeader from "../components/layout/header/GenericHeader";
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";

// Icons
import { VscRocket } from "react-icons/vsc";

// Interfaces
import { IStarship } from "../interfaces/starship";

// Utilities
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";
import CheckUnits from "../utilities/CheckUnits";

export default function Person() {
  const { starshipId } = useParams();
  const {
    data: starship,
    isLoading,
    isError,
  } = useFetchData<IStarship>(
    `https://swapi.py4e.com/api/starships/${starshipId}`
  );

  if (isLoading) {
    return <IsLoading message="starships" />;
  }

  if (isError) {
    return <IsError message="Unable to retrieve starships" />;
  }

  const list = [
    { name: "model", value: starship.model },
    { name: "starship class", value: starship.starship_class },
    {
      name: "manufacturer",
      value: <StringToStringArray string={starship.manufacturer} />,
    },
    {
      name: "cost in credits",
      value: <CheckUnits string={starship.cost_in_credits} />,
    },
    {
      name: "length",
      value: <CheckUnits type="m" string={starship.length} />,
    },
    {
      name: "crew",
      value: <CheckUnits string={starship.crew} />,
    },
    {
      name: "passengers",
      value: <CheckUnits string={starship.passengers} />,
    },
    {
      name: "hyperdrive rating",
      value: <CheckUnits string={starship.hyperdrive_rating} />,
    },
    {
      name: "max speed",
      value: <CheckUnits type="mglt" string={starship.MGLT} />,
    },
    {
      name: "cargo capacity",
      value: <CheckUnits type="kg" string={starship.cargo_capacity} />,
    },
    {
      name: "consumables supply",
      value: <CheckUnits string={starship.consumables} />,
    },
  ];

  return (
    <>
      <GenericHeader
        name={starship.name}
        icon={() => <VscRocket />}
        list={list}
      />
    </>
  );
}

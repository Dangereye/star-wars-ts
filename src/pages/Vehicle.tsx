import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Components
import GenericHeader from "../components/layout/header/GenericHeader";
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";

// Icons
import { GiTank } from "react-icons/gi";

// Interfaces
import { IVehicle } from "../interfaces/vehicle";

// Utilities
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";
import CheckUnits from "../utilities/CheckUnits";

export default function Vehicle() {
  const { vehicleId } = useParams();
  const {
    data: vehicle,
    isLoading,
    isError,
  } = useFetchData<IVehicle>(
    `https://swapi.py4e.com/api/vehicles/${vehicleId}`
  );

  if (isLoading) {
    return <IsLoading message="vehicle" />;
  }

  if (isError) {
    return <IsError message="Unable to retrieve vehicle" />;
  }

  const list = [
    { name: "model", value: vehicle.model },
    { name: "vehicle class", value: vehicle.vehicle_class },
    {
      name: "manufacturer",
      value: <StringToStringArray string={vehicle.manufacturer} />,
    },
    {
      name: "cost in credits",
      value: <CheckUnits string={vehicle.cost_in_credits} />,
    },
    {
      name: "length",
      value: <CheckUnits type="m" string={vehicle.length} />,
    },
    {
      name: "crew",
      value: <CheckUnits string={vehicle.crew} />,
    },
    {
      name: "passengers",
      value: <CheckUnits string={vehicle.passengers} />,
    },
    {
      name: "max speed",
      value: <CheckUnits type="mglt" string={vehicle.max_atmosphering_speed} />,
    },
    {
      name: "cargo capacity",
      value: <CheckUnits type="kg" string={vehicle.cargo_capacity} />,
    },
    {
      name: "consumables supply",
      value: <CheckUnits string={vehicle.consumables} />,
    },
  ];

  return (
    <>
      <GenericHeader name={vehicle.name} icon={() => <GiTank />} list={list} />
    </>
  );
}

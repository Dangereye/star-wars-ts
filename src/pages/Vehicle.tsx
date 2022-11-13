import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import GenericHeader from "../components/layout/header/GenericHeader";
import AssociatedCards from "../components/shared/cards/AssociatedCards";
import AssociatedCard from "../components/shared/cards/AssociatedCard";

// Icons
import { GiTank } from "react-icons/gi";
import { getPeopleIcon } from "../icons/getPeopleIcon";

// Interfaces
import { IVehicle } from "../interfaces/vehicle";
import { IFilm } from "../interfaces/film";
import { IPeople } from "../interfaces/people";

// Utilities
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";
import CheckUnits from "../utilities/CheckUnits";
import FormatDate from "../utilities/FormatDate";

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
  const stats = {
    films: vehicle.films.length,
    people: vehicle.pilots.length,
  };

  return (
    <>
      <GenericHeader
        bgImage="/images/headers/vehicles_header.webp"
        name={vehicle.name}
        category="vehicle"
        color="vehicles"
        list={list}
        stats={stats}
      />
      <main>
        {/* Films */}
        <AssociatedCards title="films" results={vehicle.films.length}>
          {vehicle.films.map((film, i) => (
            <AssociatedCard<IFilm>
              key={`associated-films-${i}`}
              type="films"
              color={() => "films"}
              image={(data) => (
                <img
                  src={`/images/films/ep${data.episode_id}@600.jpg`}
                  width="600px"
                  height="900px"
                  alt={data.title}
                />
              )}
              heading={(data) => data.title}
              body={(data) => <FormatDate date={data.release_date} />}
              url={film}
            />
          ))}
        </AssociatedCards>

        {/* People */}
        <AssociatedCards title="drivers" results={vehicle.pilots.length}>
          {vehicle.pilots.map((character, i) => (
            <AssociatedCard<IPeople>
              key={`associated-people-${i}`}
              type="people"
              color={(data) => data.gender}
              icon={getPeopleIcon}
              heading={(data) => data.name}
              species={(data) => data.species}
              url={character}
            />
          ))}
        </AssociatedCards>
      </main>
    </>
  );
}

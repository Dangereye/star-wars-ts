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
import { BiPlanet } from "react-icons/bi";
import { getPeopleIcon } from "../icons/getPeopleIcon";

// Interfaces
import { IPlanet } from "../interfaces/planet";
import { IFilm } from "../interfaces/film";
import { IPeople } from "../interfaces/people";

// Utilities
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";
import CheckUnits from "../utilities/CheckUnits";
import FormatDate from "../utilities/FormatDate";

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
      <main>
        {/* Films */}
        <AssociatedCards title="films" results={planet.films.length}>
          {planet.films.map((film, i) => (
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
        <AssociatedCards title="residents" results={planet.residents.length}>
          {planet.residents.map((character, i) => (
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

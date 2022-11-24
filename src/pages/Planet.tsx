import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Interfaces
import { IPlanet } from "../interfaces/planet";
import { IFilm } from "../interfaces/film";
import { IPeople } from "../interfaces/people";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import GenericHeader from "../components/layout/header/GenericHeader";
import AssociatedCards from "../components/shared/cards/AssociatedCards";
import AssociatedCard from "../components/shared/cards/AssociatedCard";
import Image from "../components/shared/Image";

// Utilities
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";
import CheckUnits from "../utilities/CheckUnits";
import FormatDate from "../utilities/FormatDate";
import { formatImageName } from "../utilities/formatImageName";

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
  const stats = {
    films: planet.films.length,
    people: planet.residents.length,
  };

  return (
    <>
      <GenericHeader
        name={planet.name}
        bgImage="/images/headers/planets_header.webp"
        category="planet"
        color="planets"
        list={list}
        stats={stats}
      />
      <main>
        {/* Films */}
        <AssociatedCards title="films" results={planet.films.length}>
          {planet.films.map((film, i) => (
            <AssociatedCard<IFilm>
              key={`associated-films-${i}`}
              type="films"
              color={() => "films"}
              image={(data) => (
                <Image
                  src={`/images/films/${formatImageName(data.title)}.webp`}
                  fallback="/images/films/error_600x900.webp"
                  width={600}
                  height={900}
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
              image={(data) => (
                <Image
                  src={`/images/people/${formatImageName(data.name)}.webp`}
                  fallback="/images/error_500x500.webp"
                  alt={data.name}
                />
              )}
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

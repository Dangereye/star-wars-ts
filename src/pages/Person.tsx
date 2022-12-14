import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import GenericHeader from "../components/layout/header/GenericHeader";
import AssociatedCards from "../components/shared/cards/AssociatedCards";
import AssociatedCard from "../components/shared/cards/AssociatedCard";
import Homeworld from "../components/shared/GetHomeworld";
import Species from "../components/shared/GetSpecies";
import Image from "../components/shared/Image";

// Icons
import { IStarship } from "../interfaces/starship";
import { IVehicle } from "../interfaces/vehicle";
import { IFilm } from "../interfaces/film";

// Interfaces
import { IPeople } from "../interfaces/people";

// Utilities
import CheckUnits from "../utilities/CheckUnits";
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";
import FormatDate from "../utilities/FormatDate";
import { formatImageName } from "../utilities/formatImageName";

export default function Person() {
  const { personId } = useParams();
  const {
    data: person,
    isLoading,
    isError,
  } = useFetchData<IPeople>(`https://swapi.py4e.com/api/people/${personId}`);

  if (isLoading) {
    return <IsLoading message="Person" />;
  }

  if (isError) {
    return <IsError message="Unable to retrieve person" />;
  }

  const list = [
    { name: "gender", value: person.gender },
    { name: "species", value: <Species url={person.species} link /> },
    { name: "birth year", value: person.birth_year },
    { name: "homeworld", value: <Homeworld url={person.homeworld} link /> },
    { name: "height", value: <CheckUnits type="cm" string={person.height} /> },
    { name: "mass", value: <CheckUnits type="kg" string={person.mass} /> },
    {
      name: "hair colour",
      value: <StringToStringArray string={person.hair_color} />,
    },
    {
      name: "skin colour",
      value: <StringToStringArray string={person.skin_color} />,
    },
    {
      name: "eye colour",
      value: <StringToStringArray string={person.eye_color} />,
    },
  ];

  const stats = {
    films: person.films.length,
    starships: person.starships.length,
    vehicles: person.vehicles.length,
  };

  return (
    <>
      <GenericHeader
        bgImage="/images/headers/people_header.webp"
        imageFolder="people"
        name={person.name}
        color={person.gender}
        list={list}
        stats={stats}
      />
      <main>
        {/* Films */}
        <AssociatedCards title="films" results={person.films.length}>
          {person.films.map((film, i) => (
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

        {/* Starships */}
        <AssociatedCards
          title="starships piloted"
          results={person.starships.length}
        >
          {person.starships.map((starship, i) => (
            <AssociatedCard<IStarship>
              key={`associated-starship-${i}`}
              type="starships"
              color={() => "starships"}
              image={(data) => (
                <Image
                  src={`/images/starships/${formatImageName(data.name)}.webp`}
                  fallback="/images/error_500x500.webp"
                  alt={data.name}
                />
              )}
              heading={(data) => data.name}
              body={(data) => data.model}
              url={starship}
            />
          ))}
        </AssociatedCards>

        {/* Vehicles */}
        <AssociatedCards
          title="vehicles driven"
          results={person.vehicles.length}
        >
          {person.vehicles.map((vehicle, i) => (
            <AssociatedCard<IVehicle>
              key={`associated-vehicles-${i}`}
              type="vehicles"
              color={() => "vehicles"}
              image={(data) => (
                <Image
                  src={`/images/vehicles/${formatImageName(data.name)}.webp`}
                  fallback="/images/error_500x500.webp"
                  alt={data.name}
                />
              )}
              heading={(data) => data.name}
              body={(data) => data.model}
              url={vehicle}
            />
          ))}
        </AssociatedCards>
      </main>
    </>
  );
}

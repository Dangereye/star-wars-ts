import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Interfaces
import { IFilm } from "../interfaces/film";
import { IPeople } from "../interfaces/people";
import { IStarship } from "../interfaces/starship";

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
  const stats = {
    films: starship.films.length,
    people: starship.pilots.length,
  };

  return (
    <>
      <GenericHeader
        bgImage="/images/headers/starships_header.webp"
        imageFolder="starships"
        name={starship.name}
        color="starships"
        list={list}
        stats={stats}
      />
      <main>
        {/* Films */}
        <AssociatedCards title="films" results={starship.films.length}>
          {starship.films.map((film, i) => (
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
        <AssociatedCards title="pilots" results={starship.pilots.length}>
          {starship.pilots.map((character, i) => (
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

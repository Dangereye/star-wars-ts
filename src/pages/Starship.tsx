import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Components
import GenericHeader from "../components/layout/header/GenericHeader";
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";

// Icons
import { VscRocket } from "react-icons/vsc";
import { getPeopleIcon } from "../icons/getPeopleIcon";

// Interfaces
import { IStarship } from "../interfaces/starship";

// Utilities
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";
import CheckUnits from "../utilities/CheckUnits";
import AssociatedCards from "../components/shared/cards/AssociatedCards";
import AssociatedCard from "../components/shared/cards/AssociatedCard";
import { IFilm } from "../interfaces/film";
import FormatDate from "../utilities/FormatDate";
import { IPeople } from "../interfaces/people";

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
        name={starship.name}
        category="starship"
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
        <AssociatedCards title="pilots" results={starship.pilots.length}>
          {starship.pilots.map((character, i) => (
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

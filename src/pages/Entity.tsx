import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Interfaces
import { ISpecies } from "../interfaces/species";
import { IFilm } from "../interfaces/film";
import { IPeople } from "../interfaces/people";

// Components
import GenericHeader from "../components/layout/header/GenericHeader";
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";
import GetHomeworld from "../components/shared/GetHomeworld";
import AssociatedCards from "../components/shared/cards/AssociatedCards";
import AssociatedCard from "../components/shared/cards/AssociatedCard";
import Image from "../components/shared/Image";

// Utilities
import CheckUnits from "../utilities/CheckUnits";
import StringToStringArray from "../utilities/string_to_string_array/StringToStringArray";
import FormatDate from "../utilities/FormatDate";
import { formatImageName } from "../utilities/formatImageName";

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
  const stats = {
    films: species.films.length,
    people: species.people.length,
  };

  return (
    <>
      <GenericHeader
        bgImage="/images/headers/species_header.webp"
        imageFolder="species"
        name={species.name}
        color="species"
        list={list}
        stats={stats}
      />
      <main>
        {/* Films */}
        <AssociatedCards title="films" results={species.films.length}>
          {species.films.map((film, i) => (
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
        <AssociatedCards title="people" results={species.people.length}>
          {species.people.map((character, i) => (
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

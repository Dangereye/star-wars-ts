import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Interfaces
import { IFilm } from "../interfaces/film";
import { IPeople } from "../interfaces/people";
import { IPlanet } from "../interfaces/planet";

// Components
import FilmHeader from "../components/layout/header/film_header/FilmHeader";
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import AssociatedCards from "../components/shared/cards/AssociatedCards";
import AssociatedCard from "../components/shared/cards/AssociatedCard";

// Icons
import {
  TbGenderFemale,
  TbGenderHermaphrodite,
  TbGenderMale,
  TbGenderNeutrois,
} from "react-icons/tb";
import { BiPlanet } from "react-icons/bi";
import { ISpecies } from "../interfaces/species";
import { IStarship } from "../interfaces/starship";
import { VscRocket } from "react-icons/vsc";
import { GiDna1 } from "react-icons/gi";

export default function Film() {
  const { filmId } = useParams();
  const {
    data: film,
    isLoading,
    isError,
  } = useFetchData<IFilm>(`https://swapi.py4e.com/api/films/${filmId}`);

  const getPeopleIcon = (data: IPeople) => {
    if (data.gender === "male") {
      return <TbGenderMale />;
    }
    if (data.gender === "female") {
      return <TbGenderFemale />;
    }
    if (data.gender === "hermaphrodite") {
      return <TbGenderHermaphrodite />;
    }
    return <TbGenderNeutrois />;
  };

  if (isLoading) {
    return <IsLoading message="Film" />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve film" />;
  }

  return (
    <>
      <FilmHeader data={film} />
      <main>
        {/* People */}
        <AssociatedCards title="people">
          {film.characters.map((character, i) => (
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

        {/* Species */}
        <AssociatedCards title="species">
          {film.species.map((species, i) => (
            <AssociatedCard<ISpecies>
              key={`associated-species-${i}`}
              type="species"
              color={() => "species"}
              icon={() => <GiDna1 />}
              heading={(data) => data.name}
              body={(data) => data.classification}
              url={species}
            />
          ))}
        </AssociatedCards>

        {/* Planets */}
        <AssociatedCards title="planets">
          {film.planets.map((planet, i) => (
            <AssociatedCard<IPlanet>
              key={`associated-planets-${i}`}
              type="planets"
              color={() => "planets"}
              icon={() => <BiPlanet />}
              heading={(data) => data.name}
              body={(data) => data.climate}
              url={planet}
            />
          ))}
        </AssociatedCards>

        {/* Starships */}
        <AssociatedCards title="starships">
          {film.starships.map((starship, i) => (
            <AssociatedCard<IStarship>
              key={`associated-starship-${i}`}
              type="starships"
              color={() => "starships"}
              icon={() => <VscRocket />}
              heading={(data) => data.name}
              body={(data) => data.model}
              url={starship}
            />
          ))}
        </AssociatedCards>
      </main>
    </>
  );
}

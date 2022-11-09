import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Interfaces
import { IFilm } from "../interfaces/film";
import { IPeople } from "../interfaces/people";
import { IPlanet } from "../interfaces/planet";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import FilmHeader from "../components/layout/header/FilmHeader";
import AssociatedCards from "../components/shared/cards/AssociatedCards";
import AssociatedCard from "../components/shared/cards/AssociatedCard";

// Icons
import { getPeopleIcon } from "../icons/getPeopleIcon";
import { BiPlanet } from "react-icons/bi";
import { ISpecies } from "../interfaces/species";
import { IStarship } from "../interfaces/starship";
import { VscRocket } from "react-icons/vsc";
import { GiDna1 } from "react-icons/gi";
import { IVehicle } from "../interfaces/vehicle";
import { GiTank } from "react-icons/gi";

export default function Film() {
  const { filmId } = useParams();
  const {
    data: film,
    isLoading,
    isError,
  } = useFetchData<IFilm>(`https://swapi.py4e.com/api/films/${filmId}`);

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
        <AssociatedCards title="people" results={film.characters.length}>
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
        <AssociatedCards title="species" results={film.species.length}>
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
        <AssociatedCards title="planets" results={film.planets.length}>
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
        <AssociatedCards title="starships" results={film.starships.length}>
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

        {/* Vehicles */}
        <AssociatedCards title="vehicles" results={film.vehicles.length}>
          {film.vehicles.map((vehicle, i) => (
            <AssociatedCard<IVehicle>
              key={`associated-vehicles-${i}`}
              type="vehicles"
              color={() => "vehicles"}
              icon={() => <GiTank />}
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

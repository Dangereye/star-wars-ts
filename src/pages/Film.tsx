import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Interfaces
import { IFilm } from "../interfaces/film";
import { IPeople } from "../interfaces/people";
import { IPlanet } from "../interfaces/planet";
import { ISpecies } from "../interfaces/species";
import { IStarship } from "../interfaces/starship";
import { IVehicle } from "../interfaces/vehicle";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import FilmHeader from "../components/layout/header/FilmHeader";
import AssociatedCards from "../components/shared/cards/AssociatedCards";
import AssociatedCard from "../components/shared/cards/AssociatedCard";
import Image from "../components/shared/Image";

// Utilities
import { formatImageName } from "../utilities/formatImageName";

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

        {/* Species */}
        <AssociatedCards title="species" results={film.species.length}>
          {film.species.map((species, i) => (
            <AssociatedCard<ISpecies>
              key={`associated-species-${i}`}
              type="species"
              color={() => "species"}
              image={(data) => (
                <Image
                  src={`/images/species/${formatImageName(data.name)}.webp`}
                  fallback="/images/error_500x500.webp"
                  alt={data.name}
                />
              )}
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
              image={(data) => (
                <Image
                  src={`/images/planets/${formatImageName(data.name)}.webp`}
                  fallback="/images/error_500x500.webp"
                  alt={data.name}
                />
              )}
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
        <AssociatedCards title="vehicles" results={film.vehicles.length}>
          {film.vehicles.map((vehicle, i) => (
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

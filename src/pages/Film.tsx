import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Interfaces
import { IFilm } from "../interfaces/film";

// Components
import FilmHeader from "../components/layout/header/film_header/FilmHeader";
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import CardsFetchOwnData from "../components/shared/cards/CardsFetchOwnData";
import PersonCardFetchOwnData from "../components/shared/cards/PersonCardFetchOwnData";
import SpeciesCardFetchOwnData from "../components/shared/cards/SpeciesCardFetchOwnData";

export default function Film() {
  const { filmId } = useParams();
  const { data, isLoading, isError } = useFetchData<IFilm>(
    `https://swapi.py4e.com/api/films/${filmId}`
  );

  if (isLoading) {
    return <IsLoading message="Film" />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve film" />;
  }

  return (
    <>
      <FilmHeader data={data} />
      <main>
        <CardsFetchOwnData title="characters">
          {data.characters.map((character) => (
            <PersonCardFetchOwnData url={character} />
          ))}
        </CardsFetchOwnData>
        <CardsFetchOwnData title="species">
          {data.species.map((entity) => (
            <SpeciesCardFetchOwnData url={entity} />
          ))}
        </CardsFetchOwnData>
      </main>
    </>
  );
}

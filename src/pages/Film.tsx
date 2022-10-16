import { useParams } from "react-router-dom";

// Hooks
import useGetData from "../hooks/useGetData";

// Interfaces
import { IFilm } from "../interfaces/film";

// Components
import FilmHeader from "../components/layout/film_header/FilmHeader";

export default function Film() {
  const { filmId } = useParams();
  const [data, isLoading, isError] = useGetData<IFilm>(
    `films/${filmId}`,
    {} as IFilm
  );

  return (
    <>
      {isLoading ? (
        "Loading film..."
      ) : isError ? (
        "Oops! Something went wrong, unable to retrieve film."
      ) : (
        <>
          <FilmHeader data={data} />
        </>
      )}
    </>
  );
}

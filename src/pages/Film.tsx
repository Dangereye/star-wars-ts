import { useParams } from "react-router-dom";

// Hooks
import useGetData from "../hooks/useGetData";

// Interfaces
import { IFilm } from "../interfaces/film";

// Components
import FilmHeader from "../components/layout/film_header/FilmHeader";
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";

export default function Film() {
  const { filmId } = useParams();
  const [data, isLoading, isError] = useGetData<IFilm>(
    `film/${filmId}`,
    {} as IFilm
  );

  return (
    <>
      {isLoading ? (
        <IsLoading message="film data" />
      ) : isError ? (
        <IsError message="Unable to retrieve film data" />
      ) : (
        <>
          <FilmHeader data={data} />
        </>
      )}
    </>
  );
}

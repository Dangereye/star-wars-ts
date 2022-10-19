import { useParams } from "react-router-dom";

// Hooks
import useFetchData from "../hooks/useFetchData";

// Interfaces
import { IFilm } from "../interfaces/film";

// Components
import FilmHeader from "../components/layout/header/film_header/FilmHeader";
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";

export default function Film() {
  const { filmId } = useParams();
  const { data, isLoading, isError } = useFetchData<IFilm>(`films/${filmId}`);

  if (isLoading) {
    return <IsLoading message="Film" />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve film" />;
  }

  return (
    <>
      <FilmHeader data={data} />
    </>
  );
}

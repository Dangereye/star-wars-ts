import { useParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";

interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  species: [];
  starships: [];
  vehicles: [];
  characters: [];
  planets: [];
  url: string;
  created: string;
  edited: string;
}

export default function Film() {
  const { filmId } = useParams();
  const [data, isLoading, isError] = useGetData<IFilm>(
    `films/${filmId}`,
    {} as IFilm
  );

  return (
    <main>
      {isLoading ? (
        "Loading films..."
      ) : isError ? (
        "Oops! Something went wrong, unable to retrieve film."
      ) : (
        <h1>{data.title}</h1>
      )}
    </main>
  );
}

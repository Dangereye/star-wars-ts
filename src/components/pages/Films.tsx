// Hooks
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import useGetData from "../../hooks/useGetData";

// Components
import FilmCard from "../shared/cards/film_card/FilmCard";

export type filmType = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};

export default function Films() {
  const { data, setData } = useContext(AppContext);
  const {} = useGetData("films");

  return (
    <main>
      <h1>Films</h1>
      {data.isLoading ? (
        "Loading"
      ) : data.isError ? (
        "Oops! Something went wrong"
      ) : (
        <div className="cards">
          {data.films
            .sort((a, b) => +a.episode_id - +b.episode_id)
            .map((result) => (
              <FilmCard
                episode={result.episode_id}
                title={result.title}
                year={result.release_date}
                url={result.url}
              />
            ))}
        </div>
      )}
    </main>
  );
}

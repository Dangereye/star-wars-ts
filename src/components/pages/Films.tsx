// Hooks
import useGetData from "../../hooks/useGetData";

// Components
import FilmCard from "../shared/cards/film_card/FilmCard";

type dataType = {
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
  const [isLoading, isError, data] = useGetData<dataType[]>("films", []);
  return (
    <main>
      <h1>Films</h1>
      {isLoading ? (
        "Loading"
      ) : isError ? (
        "Oops! Something went wrong"
      ) : (
        <div className="cards">
          {data
            .sort((a, b) => +a.episode_id - +b.episode_id)
            .map((result) => (
              <FilmCard
                image=""
                episode={result.episode_id}
                title={result.title}
                year={result.release_date}
              />
            ))}
        </div>
      )}
    </main>
  );
}

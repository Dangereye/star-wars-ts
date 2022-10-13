// Hooks
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
  const [data, isLoading, isError] = useGetData<filmType[]>("films", []);

  return (
    <main>
      <h1>Films</h1>
      {isLoading ? (
        "Loading films..."
      ) : isError ? (
        "Oops! Something went wrong, unable to retrieve films."
      ) : (
        <div className="cards">
          {data
            .sort((a, b) => +a.episode_id - +b.episode_id)
            .map((result) => (
              <FilmCard
                key={result.title}
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

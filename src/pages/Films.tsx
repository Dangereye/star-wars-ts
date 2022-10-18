// Hooks
import useGetData from "../hooks/useGetData";

// Components
import FilmCard from "../components/shared/cards/FilmCard";
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";

// Interfaces
import { IPage } from "../interfaces/page";
import { IFilm } from "../interfaces/film";

// Data
import { initialState } from "../data/initialState";

export default function FilmsPage() {
  const [data, isLoading, isError] = useGetData<IPage<IFilm>>(
    "films",
    initialState
  );

  return (
    <>
      {isLoading ? (
        <IsLoading message="All films" />
      ) : isError ? (
        <IsError message="Unable to retrieve films" />
      ) : (
        <main>
          <div className="container">
            <h1>Films {data.count}</h1>
            <div className="cards">
              {data.results
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
          </div>
        </main>
      )}
    </>
  );
}

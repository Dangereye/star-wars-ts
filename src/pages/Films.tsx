// Hooks
import useFetchData from "../hooks/useFetchData";

// Components
import FilmCard from "../components/shared/cards/FilmCard";
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";

// Interfaces
import { IPage } from "../interfaces/page";
import { IFilm } from "../interfaces/film";

export default function FilmsPage() {
  const {
    isLoading,
    data: films,
    isError,
  } = useFetchData<IPage<IFilm>>("films");

  if (isLoading) {
    return <IsLoading message="All films" />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve films" />;
  }
  return (
    <main>
      <div className="container">
        <h1>Films {films?.count}</h1>
        <div className="cards">
          {films?.results
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
    //   )}
    // </>
  );
}

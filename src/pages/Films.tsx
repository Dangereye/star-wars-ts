// Hooks
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";

// Components
import FilmCard from "../components/shared/cards/FilmCard";
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";

// Interfaces
import { IPage } from "../interfaces/page";
import { IFilm } from "../interfaces/film";
import Button from "../components/shared/buttons/button/Button";

export default function FilmsPage() {
  const getNextPageParam = (lastPage: IPage<IFilm>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/films/?page=`, "")
      : null;

  const {
    isLoading,
    isError,
    data: films,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteFetchData<IPage<IFilm>>("films", getNextPageParam);

  if (isLoading) {
    return <IsLoading message="Films" />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve films" />;
  }
  return (
    <main>
      <div className="container">
        <h1>Films {films?.pages[0].count}</h1>
        <div className="cards">
          {films.pages.map((page) =>
            page.results.map((film) => (
              <FilmCard
                key={film.title}
                episode={film.episode_id}
                title={film.title}
                year={film.release_date}
                url={film.url}
              />
            ))
          )}
        </div>
        {films.pages[0].next && (
          <div className="buttons">
            <Button
              name={
                isFetchingNextPage
                  ? "loading more..."
                  : hasNextPage
                  ? "load more"
                  : "nothing more"
              }
              size="btn--large"
              variant="btn--primary"
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage}
            />
          </div>
        )}
      </div>
    </main>
  );
}

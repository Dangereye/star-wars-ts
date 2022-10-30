// Hooks
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import InfiniteDataCards from "../components/shared/cards/InfiniteDataCards";
import FilmCard from "../components/shared/cards/FilmCard";

// Interfaces
import { IPage } from "../interfaces/page";
import { IFilm } from "../interfaces/film";

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
    <InfiniteDataCards
      title="Films"
      data={films}
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
    >
      {films.pages.map((page) =>
        page.results
          .sort((a, b) => a.episode_id - b.episode_id)
          .map((film) => (
            <FilmCard
              key={film.title}
              episode={film.episode_id}
              title={film.title}
              year={film.release_date}
              url={film.url}
            />
          ))
      )}
    </InfiniteDataCards>
  );
}

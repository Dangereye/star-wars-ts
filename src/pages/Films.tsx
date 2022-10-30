// Hooks
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";

// Components
import IsLoading from "../components/shared/is_loading/IsLoading";
import IsError from "../components/shared/is_error/IsError";
import InfiniteDataCards from "../components/shared/cards/InfiniteDataCards";
import InfiniteDataCard from "../components/shared/cards/InfiniteDataCard";

// Interfaces
import { IPage } from "../interfaces/page";
import { IFilm } from "../interfaces/film";

// Utilities
import FormatDate from "../utilities/FormatDate";

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
            <InfiniteDataCard
              key={film.title}
              type="films"
              image={() => (
                <img
                  src={`/images/films/ep${film.episode_id}@600.jpg`}
                  width="600px"
                  height="900px"
                  alt={film.title}
                />
              )}
              url={film.url}
              heading={film.title}
              body={<FormatDate date={film.release_date} />}
            />
          ))
      )}
    </InfiniteDataCards>
  );
}

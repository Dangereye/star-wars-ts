// Hooks
import useInfiniteFetchData from "../hooks/useInfiniteFetchData";

// Components
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";
import PersonCard from "../components/shared/cards/PersonCard";
import HDiv from "../components/shared/text/HDiv";
import BodyText from "../components/shared/text/BodyText";
import Button from "../components/shared/buttons/button/Button";

// Interfaces
import { IPage } from "../interfaces/page";
import { IPeople } from "../interfaces/people";

export default function People() {
  const getNextPageParam = (lastPage: IPage<IPeople>) =>
    lastPage.next
      ? lastPage.next.replace(`https://swapi.py4e.com/api/people/?page=`, "")
      : null;

  const {
    isLoading,
    isError,
    data: people,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteFetchData<IPage<IPeople>>("people", getNextPageParam);

  if (isLoading) {
    return <IsLoading message={`People`} />;
  }
  if (isError) {
    return <IsError message="Unable to retrieve people" />;
  }

  return (
    <main>
      <div className="container">
        <HDiv variant="heading--h2" text="people" />
        <BodyText text={`Found ${people.pages[0].count} results.`} />

        <div className="cards">
          {people.pages.map((page) =>
            page.results?.map((result) => (
              <PersonCard
                key={result.name}
                name={result.name}
                species={result?.species}
                gender={result.gender}
                url={result.url}
              />
            ))
          )}
        </div>
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
      </div>
    </main>
  );
}

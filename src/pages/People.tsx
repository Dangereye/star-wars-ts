// Hooks
import useFetchData from "../hooks/useFetchData";

// Components
import IsError from "../components/shared/is_error/IsError";
import IsLoading from "../components/shared/is_loading/IsLoading";
import PersonCard from "../components/shared/cards/PersonCard";

// Interfaces
import { IPage } from "../interfaces/page";
import { IPeople } from "../interfaces/people";
import Button from "../components/shared/buttons/button/Button";

export default function People() {
  const {
    isLoading,
    data: people,
    isError,
  } = useFetchData<IPage<IPeople>>("people");

  if (isLoading) {
    return <IsLoading message="All people" />;
  }
  if (isError) {
    return <IsLoading message="Unable to retrieve people" />;
  }

  return (
    <main>
      <div className="container">
        <h1>People {people?.count}</h1>
        <div className="cards">
          {people?.results.map((result) => (
            <PersonCard
              key={result.name}
              name={result.name}
              species={result?.species}
              gender={result.gender}
              url={result.url}
            />
          ))}
        </div>
        <div className="buttons">
          <Button
            name="previous"
            size="btn--large"
            variant="btn--primary"
            onClick={() => {}}
            disabled={!people.previous}
          />

          <Button
            name="next"
            size="btn--large"
            variant="btn--primary"
            onClick={() => {}}
            disabled={!people.next}
          />
        </div>
      </div>
    </main>
  );
}

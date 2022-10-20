import { useState } from "react";

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
import H1 from "../components/shared/text/H1";
import BodyText from "../components/shared/text/BodyText";

export default function People() {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    data: people,
    isError,
  } = useFetchData<IPage<IPeople>>(`people/?page=${page}`);

  if (isLoading) {
    return <IsLoading message="All people" />;
  }
  if (isError) {
    return <IsLoading message="Unable to retrieve people" />;
  }

  return (
    <main>
      <div className="container">
        <H1 text={`People ${people.count}`} />
        <BodyText text={`Page ${page}`} />

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
            onClick={() => setPage((prev) => prev - 1)}
            disabled={!people.previous}
          />

          <Button
            name="next"
            size="btn--large"
            variant="btn--primary"
            onClick={() => setPage((prev) => prev + 1)}
            disabled={!people.next}
          />
        </div>
      </div>
    </main>
  );
}

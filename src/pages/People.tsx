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
import H1 from "../components/shared/text/H1";
import HDiv from "../components/shared/text/HDiv";
import Pagination from "../components/shared/Pagination";

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
        <H1 text="people" />
        <HDiv variant="heading--h3" text={`Found ${people.count} results`} />

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
        <Pagination page={page} setPage={setPage} data={people} />
      </div>
    </main>
  );
}

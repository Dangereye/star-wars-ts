import React, { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

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
import Button from "../components/shared/buttons/button/Button";
import BodyText from "../components/shared/text/BodyText";

const fetchData = async ({ pageParam = 1 }) => {
  console.log(pageParam);
  const res = await fetch(
    `https://swapi.py4e.com/api/people/?page=${pageParam}`
  );
  const data = await res.json();
  return data;
};

export default function People() {
  const {
    isLoading,
    isError,
    data: people,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery<IPage<IPeople>>(
    ["people"],
    (pageParams) => fetchData(pageParams),
    {
      getNextPageParam: (lastPage) =>
        lastPage.next
          ? lastPage.next.replace(
              "https://swapi.py4e.com/api/people/?page=",
              ""
            )
          : null,
    }
  );

  if (isLoading) {
    return <IsLoading message={`People`} />;
  }
  if (isError) {
    return <IsLoading message="Unable to retrieve people" />;
  }

  return (
    <main>
      <div className="container">
        <H1 text="people" />
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
                ? "Loading more..."
                : hasNextPage
                ? "Load more"
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

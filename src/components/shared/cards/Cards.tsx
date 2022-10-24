import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";

import { ReactNode } from "react";

// Interfaces
import { IFilm } from "../../../interfaces/film";
import { IPage } from "../../../interfaces/page";
import { IPeople } from "../../../interfaces/people";
import { ISpecies } from "../../../interfaces/species";

// Components
import Button from "../buttons/button/Button";
import BodyText from "../text/BodyText";
import HDiv from "../text/HDiv";

type CardsProps = {
  title: string;
  data: InfiniteData<IPage<IFilm | IPeople | ISpecies>> | undefined;
  children: ReactNode;
  isFetchingNextPage: boolean;
  hasNextPage: boolean | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<
    InfiniteQueryObserverResult<IPage<IFilm | IPeople | ISpecies>, unknown>
  >;
};

export default function Cards({
  title,
  data,
  children,
  isFetchingNextPage,
  hasNextPage,
  fetchNextPage,
}: CardsProps) {
  return (
    <main>
      <div className="container">
        <HDiv variant="heading--h2" text={title} />
        <BodyText text={`Found ${data?.pages[0].count} results.`} />
        <div className="cards">{children}</div>
        {data?.pages[0].next && (
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

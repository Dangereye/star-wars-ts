import { ReactNode } from "react";
import { InfiniteData } from "@tanstack/react-query";

// Interfaces
import { IFilm } from "../../../interfaces/film";
import { IPage } from "../../../interfaces/page";
import { IPeople } from "../../../interfaces/people";
import { IPlanet } from "../../../interfaces/planet";
import { ISpecies } from "../../../interfaces/species";
import { IStarship } from "../../../interfaces/starship";
import { IVehicle } from "../../../interfaces/vehicle";

// Components
import BodyText from "../text/BodyText";
import HDiv from "../text/HDiv";

type CardsProps = {
  title: string;
  data:
    | InfiniteData<
        IPage<IFilm | IPeople | ISpecies | IPlanet | IStarship | IVehicle>
      >
    | undefined;
  children: ReactNode;
};

export default function InfiniteDataCards({
  title,
  data,
  children,
}: CardsProps) {
  return (
    <article className="article">
      <div className="container">
        <HDiv variant="heading--h2" text={title} />
        <BodyText text={`Found ${data?.pages[0].count} results.`} />
        <div className="cards">{children}</div>
      </div>
    </article>
  );
}

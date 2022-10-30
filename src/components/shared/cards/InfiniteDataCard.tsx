import { ReactNode } from "react";

// Components
import { Link } from "react-router-dom";
import HDiv from "../text/HDiv";
import BodyText from "../text/BodyText";
import Species from "../GetSpecies";

type Props = {
  type: "films" | "people" | "species" | "planets" | "starships" | "vehicles";
  color?: string;
  image?: () => JSX.Element;
  icon?: () => JSX.Element;
  heading: string;
  body?: string | ReactNode;
  species?: string[];
  url: string;
};

export default function InfiniteDataCard({
  type,
  color,
  image,
  icon,
  url,
  heading,
  body,
  species,
}: Props) {
  const id = url.replace(`https://swapi.py4e.com/api/${type}/`, "");

  return (
    <Link to={`/${type}/${id}`} className="card">
      {image && <div className="card__image">{image()}</div>}
      {icon && (
        <div className={`card__icon card__icon--${color}`}>{icon()}</div>
      )}
      <div className="card__content">
        <HDiv variant="heading--h3" text={heading} />
        {body && <BodyText text={body} />}
        {species && <Species url={species} />}
      </div>
    </Link>
  );
}

InfiniteDataCard.defaultProps = {
  color: "default",
  image: null,
  icon: null,
  BodyText: null,
  species: null,
};

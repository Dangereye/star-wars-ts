import { ReactNode, forwardRef } from "react";

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

const InfiniteDataCard = forwardRef<HTMLAnchorElement, Props>(
  ({ type, color, image, icon, url, heading, body, species }, ref) => {
    const id = url.replace(`https://swapi.py4e.com/api/${type}/`, "");

    return (
      <Link to={`/${type}/${id}`} className="card" ref={ref}>
        {image && <div className="card__image">{image()}</div>}
        {icon && <div className={`card__icon ${color}`}>{icon()}</div>}
        <div className="card__content">
          <HDiv variant="heading--h3" text={heading} />
          {body && <BodyText text={body} />}
          {species && <Species url={species} />}
        </div>
      </Link>
    );
  }
);

export default InfiniteDataCard;

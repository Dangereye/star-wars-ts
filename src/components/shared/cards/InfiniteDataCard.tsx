// Components
import { Link } from "react-router-dom";
import HDiv from "../text/HDiv";
import BodyText from "../text/BodyText";
import Species from "../GetSpecies";

type Props<T> = {
  type: string;
  color: string;
  icon: () => JSX.Element;
  heading: string;
  body?: string;
  species?: string[];
  url: string;
};

export default function InfiniteDataCard<T>({
  type,
  color,
  icon,
  url,
  heading,
  body,
  species,
}: Props<T>) {
  const id = url.replace(`https://swapi.py4e.com/api/${type}/`, "");

  return (
    <Link to={`/${type}/${id}`} className="card">
      <div className={`card__icon card__icon--${color}`}>{icon()}</div>
      <div className="card__content">
        <HDiv variant="heading--h3" text={heading} />
        {body && <BodyText text={body} />}
        {species && <Species url={species} />}
      </div>
    </Link>
  );
}

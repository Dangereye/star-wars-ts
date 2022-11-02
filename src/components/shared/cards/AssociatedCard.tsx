// Components
import { Link } from "react-router-dom";
import AssociatedLoadingCard from "./AssociatedLoadingCard";
import AssociatedErrorCard from "./AssociatedErrorCard";
import HDiv from "../text/HDiv";
import BodyText from "../text/BodyText";
import Species from "../GetSpecies";

// Hooks
import useFetchData from "../../../hooks/useFetchData";
import { ReactNode } from "react";

type Props<T> = {
  type: "films" | "people" | "species" | "planets" | "starships" | "vehicles";
  color: (data: T) => string;
  image?: (data: T) => JSX.Element;
  icon?: (data: T) => JSX.Element;
  heading: (data: T) => string;
  body?: (data: T) => string | ReactNode;
  species?: (data: T) => string[];
  url: string;
};

export default function AssociatedCard<T>({
  type,
  color,
  image,
  icon,
  url,
  heading,
  body,
  species,
}: Props<T>) {
  const { data, isLoading, isError } = useFetchData<T>(url);
  const id = url.replace(`https://swapi.py4e.com/api/${type}/`, "");

  if (isLoading) {
    return <AssociatedLoadingCard type={type} />;
  }

  if (isError) {
    return <AssociatedErrorCard type={type} />;
  }

  return (
    <Link to={`/${type}/${id}`} className="card">
      {image && <div className="card__image">{image(data)}</div>}
      {icon && color && (
        <div className={`card__icon card__icon--${color(data)}`}>
          {icon(data)}
        </div>
      )}
      <div className="card__content">
        <HDiv variant="heading--h3" text={heading(data)} />
        {body && <BodyText text={body(data)} />}
        {species && <Species url={species(data)} />}
      </div>
    </Link>
  );
}

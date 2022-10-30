// Components
import { Link } from "react-router-dom";
import LoadingCard from "./LoadingCard";
import ErrorCard from "./ErrorCard";

// Hooks
import useFetchData from "../../../hooks/useFetchData";
import HDiv from "../text/HDiv";
import BodyText from "../text/BodyText";
import Species from "../GetSpecies";

type Props<T> = {
  type: string;
  color: (data: T) => string;
  icon: (data: T) => JSX.Element;
  heading: (data: T) => string;
  body?: (data: T) => string;
  species?: (data: T) => string[];
  url: string;
};

export default function AssociatedCard<T>({
  type,
  color,
  icon,
  url,
  heading,
  body,
  species,
}: Props<T>) {
  const { data, isLoading, isError } = useFetchData<T>(url);
  const id = url.replace(`https://swapi.py4e.com/api/${type}/`, "");

  if (isLoading) {
    return <LoadingCard type={type} />;
  }

  if (isError) {
    return <ErrorCard type={type} />;
  }

  return (
    <Link to={`/${type}/${id}`} className="card">
      <div className={`card__icon card__icon--${color(data)}`}>
        {icon(data)}
      </div>
      <div className="card__content">
        <HDiv variant="heading--h3" text={heading(data)} />
        {body && <BodyText text={body(data)} />}
        {species && <Species url={species(data)} />}
      </div>
    </Link>
  );
}

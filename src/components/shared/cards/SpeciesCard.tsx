import { Link } from "react-router-dom";
import { GiDna1 } from "react-icons/gi";
import BodyText from "../text/BodyText";
import HDiv from "../text/HDiv";

type SpeciesCardProps = {
  name: string;
  classification: string;
  url: string;
};

export default function SpeciesCard({
  name,
  classification,
  url,
}: SpeciesCardProps) {
  const id = url.replace("https://swapi.py4e.com/api/species/", "");

  return (
    <Link to={`/species/${id}`} className="card">
      <div className="card__icon card__icon--species">
        <GiDna1 />
      </div>
      <div className="card__content">
        <HDiv variant="heading--h3" text={name} />
        <BodyText text={classification} />
      </div>
    </Link>
  );
}

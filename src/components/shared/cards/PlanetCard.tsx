import { Link } from "react-router-dom";
import { TbPlanet } from "react-icons/tb";
import BodyText from "../text/BodyText";
import HDiv from "../text/HDiv";

type PlanetCardProps = {
  name: string;
  climate: string;
  url: string;
};

export default function SpeciesCard({ name, climate, url }: PlanetCardProps) {
  const id = url.replace("https://swapi.py4e.com/api/planets/", "");

  return (
    <Link to={`/planets/${id}`} className="card">
      <div className="card__icon card__icon--planets">
        <TbPlanet />
      </div>
      <div className="card__content">
        <HDiv variant="heading--h3" text={name} />
        <BodyText text={climate} />
      </div>
    </Link>
  );
}

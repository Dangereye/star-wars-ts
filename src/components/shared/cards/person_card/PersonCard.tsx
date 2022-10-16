import { Link } from "react-router-dom";
import Species from "../../Species";
import H3 from "../../text/H3";

type PersonCardProps = {
  name: string;
  species: [];
  gender: string;
  url: string;
};

export default function PersonCard({
  name,
  species,
  gender,
  url,
}: PersonCardProps) {
  return (
    <Link to="/" className="person-card">
      <div className="film-card__image">
        <img
          src={`/images/films/ep1@600.jpg`}
          width="600px"
          height="900px"
          alt={name}
        />
      </div>
      <div className="person__content">
        <H3 text={name} />
        <Species url={species} />
      </div>
    </Link>
  );
}

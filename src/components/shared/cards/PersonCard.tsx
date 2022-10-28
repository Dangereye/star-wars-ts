import { Link } from "react-router-dom";

// Icons
import {
  TbGenderNeutrois,
  TbGenderHermaphrodite,
  TbGenderMale,
  TbGenderFemale,
} from "react-icons/tb";

// Components
import Species from "../Species";
import HDiv from "../text/HDiv";

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
  const id = url.replace("https://swapi.py4e.com/api/people/", "");

  const setIcon = () => {
    if (gender === "male") {
      return <TbGenderMale />;
    }
    if (gender === "female") {
      return <TbGenderFemale />;
    }
    if (gender === "hermaphrodite") {
      return <TbGenderHermaphrodite />;
    }
    return <TbGenderNeutrois />;
  };

  return (
    <Link to={`/people/${id}`} className="card">
      <div className={`card__icon card__icon--${gender}`}>{setIcon()}</div>
      <div className="card__content">
        <HDiv variant="heading--h3" text={name} />
        <Species url={species} />
      </div>
    </Link>
  );
}

import { Link } from "react-router-dom";
import { TbGenderNeutrois, TbGenderMale, TbGenderFemale } from "react-icons/tb";
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

  const setBackground = () => {
    if (gender === "male") {
      return "hsl(203, 44%, 81%)";
    }
    if (gender === "female") {
      return "hsl(316, 44%, 83%)";
    }
    return "hsl(39, 48%, 89%)";
  };

  const setIcon = () => {
    if (gender === "male") {
      return <TbGenderMale />;
    }
    if (gender === "female") {
      return <TbGenderFemale />;
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

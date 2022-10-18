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
    <Link to="/" className="card">
      <div className="card__icon" style={{ backgroundColor: setBackground() }}>
        {setIcon()}
      </div>
      <div className="card__content">
        <HDiv variant="heading--h4" text={name} />
        <Species url={species} />
      </div>
    </Link>
  );
}

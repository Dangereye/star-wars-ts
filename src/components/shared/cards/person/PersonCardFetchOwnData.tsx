// Icons
import {
  TbGenderNeutrois,
  TbGenderHermaphrodite,
  TbGenderMale,
  TbGenderFemale,
} from "react-icons/tb";

// Components
import { Link } from "react-router-dom";
import LoadingCard from "../LoadingCard";
import ErrorCard from "../ErrorCard";
import HDiv from "../../text/HDiv";
import Species from "../../Species";

// Hooks
import useFetchData from "../../../../hooks/useFetchData";

// Interfaces
import { IPeople } from "../../../../interfaces/people";

type PersonCardProps = {
  url: string;
};

export default function PersonCardFetchOwnData({ url }: PersonCardProps) {
  const { data: person, isLoading, isError } = useFetchData<IPeople>(url);
  const id = url.replace("https://swapi.py4e.com/api/people/", "");

  const setIcon = () => {
    if (person?.gender === "male") {
      return <TbGenderMale />;
    }
    if (person?.gender === "female") {
      return <TbGenderFemale />;
    }
    if (person?.gender === "hermaphrodite") {
      return <TbGenderHermaphrodite />;
    }
    return <TbGenderNeutrois />;
  };

  if (isLoading) {
    return <LoadingCard type="character" />;
  }

  if (isError) {
    return <ErrorCard type="character" />;
  }

  return (
    <Link to={`/people/${id}`} className="card">
      <div className={`card__icon card__icon--${person?.gender}`}>
        {setIcon()}
      </div>
      <div className="card__content">
        <HDiv variant="heading--h3" text={person?.name} />
        <Species url={person?.species} />
      </div>
    </Link>
  );
}

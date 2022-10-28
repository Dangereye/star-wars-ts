// Icons
import { GiDna1 } from "react-icons/gi";

// Components
import { Link } from "react-router-dom";
import LoadingCard from "../LoadingCard";
import ErrorCard from "../ErrorCard";
import HDiv from "../../text/HDiv";
import BodyText from "../../text/BodyText";

// Hooks
import useFetchData from "../../../../hooks/useFetchData";

// Interfaces
import { ISpecies } from "../../../../interfaces/species";

type SpeciesCardProps = {
  url: string;
};

export default function SpeciesCard({ url }: SpeciesCardProps) {
  const { data: species, isLoading, isError } = useFetchData<ISpecies>(url);
  const id = url.replace("https://swapi.py4e.com/api/species/", "");

  if (isLoading) {
    return <LoadingCard type="species" />;
  }

  if (isError) {
    return <ErrorCard type="species" />;
  }

  return (
    <Link to={`/species/${id}`} className="card">
      <div className="card__icon card__icon--species">
        <GiDna1 />
      </div>
      <div className="card__content">
        <HDiv variant="heading--h3" text={species?.name} />
        <BodyText text={species?.classification} />
      </div>
    </Link>
  );
}

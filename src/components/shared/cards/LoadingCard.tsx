// Icons
import { FaSpinner } from "react-icons/fa";

// Components
import BodyText from "../text/BodyText";
import HDiv from "../text/HDiv";

type LoadingCardProps = {
  type: string;
};

export default function LoadingCard({ type }: LoadingCardProps) {
  return (
    <div className="card">
      <div className="card__icon card__icon--spinner">{<FaSpinner />}</div>
      <div className="card__content">
        <HDiv variant="heading--h3" text={type} />
        <BodyText text="loading..." />
      </div>
    </div>
  );
}

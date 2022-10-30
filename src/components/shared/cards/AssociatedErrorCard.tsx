// Icons
import { RiErrorWarningLine } from "react-icons/ri";

// Components
import BodyText from "../text/BodyText";
import HDiv from "../text/HDiv";

type ErrorCardProps = {
  type: string;
};

export default function AssociatedErrorCard({ type }: ErrorCardProps) {
  return (
    <div className="card">
      <div className="card__icon">{<RiErrorWarningLine />}</div>
      <div className="card__content">
        <HDiv variant="heading--h3" text={type} />
        <BodyText text="Unavailable" />
      </div>
    </div>
  );
}

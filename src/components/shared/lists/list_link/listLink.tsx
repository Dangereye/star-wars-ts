import { Link } from "react-router-dom";

type ListLinkProps = {
  to: string;
  name: string;
};

export default function ListLink({ to, name }: ListLinkProps) {
  return (
    <div className="list__item">
      <Link to={to} className="list__link">
        {name}
      </Link>
    </div>
  );
}

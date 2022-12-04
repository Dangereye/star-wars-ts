import { Link } from "react-router-dom";

type ListLinkProps = {
  to: string;
  name: string;
};

export default function ListLink({ to, name }: ListLinkProps) {
  return (
    <Link to={to} className="list-link">
      {name}
    </Link>
  );
}

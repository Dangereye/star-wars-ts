import { Link } from "react-router-dom";

type NavigationProps = {
  variant?: "list--horizontal";
  items: { name: string; link: string }[];
};

export default function Navigation({ variant, items }: NavigationProps) {
  return (
    <nav className="navigation">
      <ul className={`list ${variant}`}>
        {items.map((item) => (
          <li key={`nav-${item.name}`} className="list__item">
            <Link to={item.link} className="list__link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

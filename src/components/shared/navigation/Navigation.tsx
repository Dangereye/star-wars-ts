import { useContext } from "react";

// Context
import { AppContext } from "../../../context/AppContext";

// Components
import { Link } from "react-router-dom";

type NavigationProps = {
  variant?: "list--horizontal";
  items: { name: string; link: string }[];
};

export default function Navigation({ variant, items }: NavigationProps) {
  const { menuIsOpen, setMenuIsOpen } = useContext(AppContext);

  const handleClick = () => {
    if (menuIsOpen) {
      setMenuIsOpen(false);
    }
  };

  return (
    <nav className="navigation">
      <ul className={`list ${variant}`}>
        {items.map((item) => (
          <li key={`nav-${item.name}`} className="list__item">
            <Link to={item.link} className="list__link" onClick={handleClick}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

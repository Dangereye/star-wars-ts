import { useContext } from "react";

// Context
import { AppContext } from "../../../context/AppContext";

// Components
import Navigation from "../../shared/navigation/Navigation";

// Data
import { pages } from "../../../data/pages";

export default function MobileMenu() {
  const { menuIsOpen } = useContext(AppContext);
  return (
    <div className={menuIsOpen ? "mobile-menu open" : "mobile-menu"}>
      <Navigation items={pages} />
    </div>
  );
}

import { useContext } from "react";

// Context
import { AppContext } from "../../../context/AppContext";

// Components
import Navigation from "../../shared/navigation/Navigation";

// Data
import { pages } from "../../../data/pages";
import H3 from "../../shared/text/H3";
import List from "../../shared/lists/List";
import ListAnchor from "../../shared/lists/list_anchor/ListAnchor";

export default function MobileMenu() {
  const { menuIsOpen } = useContext(AppContext);
  return (
    <div className={menuIsOpen ? "mobile-menu open" : "mobile-menu"}>
      <div>
        <H3 text="Pages" />
        <Navigation items={pages} />
      </div>
      <div>
        <H3 text="API" />
        <List>
          <ListAnchor href="https://swapi.py4e.com" name="SWAPI" />
        </List>
      </div>
    </div>
  );
}

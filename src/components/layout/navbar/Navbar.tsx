// Components
import { Link } from "react-router-dom";
import Navigation from "../../shared/navigation/Navigation";
import MobileIcon from "./mobile_icon/MobileIcon";

// Data
import { pages } from "../../../data/pages";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          Star Wars
        </Link>
        <Navigation items={pages} variant="list--horizontal" />
        <MobileIcon />
      </div>
    </div>
  );
}

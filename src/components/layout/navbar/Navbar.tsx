// Components
import { Link } from "react-router-dom";
import Navigation from "../../shared/navigation/Navigation";
import MobileIcon from "./mobile_icon/MobileIcon";
import Image from "../../shared/Image";

// Data
import { pages } from "../../../data/pages";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Link to="/" className="navbar__logo">
          <Image
            src="/svg/star_wars.svg"
            fallback="/svg/star_wars_alt.svg"
            alt="Star Wars logo"
            width={75}
            height={33.5}
          />
        </Link>
        <Navigation items={pages} variant="list--horizontal" />
        <MobileIcon />
      </div>
    </div>
  );
}

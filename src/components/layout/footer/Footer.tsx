import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

// Data
import { pages } from "../../../data/pages";

// Components
import Button from "../../shared/buttons/button/Button";
import Image from "../../shared/Image";
import List from "../../shared/lists/List";
import ListAnchor from "../../shared/lists/list_anchor/ListAnchor";
import ListLink from "../../shared/lists/list_link/listLink";
import Navigation from "../../shared/navigation/Navigation";
import BodyText from "../../shared/text/BodyText";
import H3 from "../../shared/text/H3";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__extras">
          <div className="footer__logo">
            <Link to="/" className="footer__logo">
              <Image
                src="/svg/star_wars_alt.svg"
                fallback="/svg/star_wars_alt.svg"
                alt="Star Wars logo"
                width={100}
                height={44.5}
              />
            </Link>
            <BodyText text="Explore the galaxy." />
          </div>
          <div className="footer__links">
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
          <div>
            <Button
              name="Back to top"
              variant="btn--primary"
              onClick={() => {
                navigate(location.pathname);
              }}
            />
          </div>
        </div>
        <div className="copyright">
          <BodyText text=" Copyright &copy; 2022, Craig Puxty. All rights reserved." />
        </div>
      </div>
    </footer>
  );
}

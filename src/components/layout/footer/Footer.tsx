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
            <Link to="/">
              <Image
                src="/svg/star_wars_alt.svg"
                fallback="/svg/star_wars_alt.svg"
                alt="Star Wars logo"
                width={150}
                height={67}
              />
            </Link>
            <BodyText text="Explore a small part of the galaxy." />
          </div>
          <div className="footer__links">
            <div>
              <H3 text="Pages" />
              <List>
                {pages.map((page) => (
                  <ListLink key={page.name} to={page.link} name={page.name} />
                ))}
              </List>
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

        <BodyText text=" Copyright &copy; 2022, Craig Puxty. All rights reserved." />
      </div>
    </footer>
  );
}

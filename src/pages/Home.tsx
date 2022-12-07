import { Link } from "react-router-dom";
import Image from "../components/shared/Image";
import BodyText from "../components/shared/text/BodyText";

export default function Home() {
  return (
    <main>
      <article className="article home-page">
        <div className="background-image"></div>
        <div className="container">
          <div className="content">
            <Image
              src="/svg/star_wars_explore_the_galaxy.svg"
              fallback="/svg/star_wars_explore_the_galaxy.svg"
              width={500}
              height={500}
              alt="Star Wars Logo"
            />

            <BodyText text="Star Wars data you've always wanted: Planets, Spaceships, Vehicles, People, Films and Species from SEVEN films.  Now with The Force Awakens data!" />
            <Link to="/films" className="btn btn--large btn--primary">
              get started
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

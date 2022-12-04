import { Link } from "react-router-dom";
import BackgroundImage from "../components/shared/background_image/BackgroundImage";
import Image from "../components/shared/Image";

export default function Home() {
  return (
    <main>
      <article className="article home-page">
        <BackgroundImage
          src="/images/headers/home_header.webp"
          opacity={1}
          position="right"
        />
        <div className="container">
          <div className="content">
            <Image
              src="/svg/star_wars_explore_the_galaxy.svg"
              fallback="/svg/star_wars_explore_the_galaxy.svg"
              width={500}
              height={500}
              alt="Star Wars Logo"
            />
            <Link to="/films" className="btn btn--large btn--secondary">
              Explore the Galaxy
            </Link>
          </div>
          <div className="container__blank"></div>
        </div>
      </article>
    </main>
  );
}

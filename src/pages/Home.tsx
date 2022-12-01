import { Link } from "react-router-dom";
import Image from "../components/shared/Image";

export default function Home() {
  return (
    <main>
      <article className="article home-page">
        <div className="container">
          <Image
            src="/svg/star_wars.svg"
            fallback="/svg/star_wars.svg"
            width={500}
            height={500}
            alt="Star Wars Logo"
          />
          <Link to="/films" className="btn btn--large btn--secondary">
            Explore the Galaxy
          </Link>
        </div>
      </article>
    </main>
  );
}

import { Link } from "react-router-dom";
import BackgroundImage from "../components/shared/background_image/BackgroundImage";

export default function Home() {
  return (
    <main>
      <article className="article home-page">
        <BackgroundImage src="/images/headers/home_header.webp" opacity={1} />
        <div className="container">
          <Link to="/films" className="btn btn--large btn--primary">
            Explore the Galaxy
          </Link>
        </div>
      </article>
    </main>
  );
}

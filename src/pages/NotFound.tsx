import { Link } from "react-router-dom";
import HDiv from "../components/shared/text/HDiv";
import BodyText from "../components/shared/text/BodyText";

export default function NotFound() {
  return (
    <main>
      <article className="article not-found">
        <div className="container">
          <HDiv variant="heading--h1" text="oops!" />
          <BodyText
            text="Uh, we had a slight weapons malfunction, but uh... everything's
            perfectly all right now. We're fine"
          />
          <div className="buttons">
            <Link to="/" className="btn btn--large btn--primary">
              Go home
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

import { Link } from "react-router-dom";
import FormatDate from "../../../utilities/FormatDate";
import BodyText from "../text/BodyText";
import HDiv from "../text/HDiv";

type FilmCardProps = {
  episode: number;
  title: string;
  year: string;
  url: string;
};

export default function FilmCard({ episode, title, year, url }: FilmCardProps) {
  const id = url.replace("https://swapi.py4e.com/api/films/", "");
  return (
    <Link to={`/films/${id}`} className=" card">
      <div className="card__image">
        <img
          src={`/images/films/ep${episode}@600.jpg`}
          width="600px"
          height="900px"
          alt={title}
        />
      </div>
      <div className="card__content">
        <HDiv variant="heading--h4" text={`Episode ${episode}`} />
        <HDiv variant="heading--h3" text={title} />
        <BodyText text={<FormatDate date={year} />} />
      </div>
    </Link>
  );
}

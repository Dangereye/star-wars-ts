import { Link } from "react-router-dom";
import FormatDate from "../../../../utilities/FormatDate";

type FilmCardProps = {
  episode: number;
  title: string;
  year: string;
  url: string;
};

export default function FilmCard({ episode, title, year, url }: FilmCardProps) {
  const id = url.replace("https://swapi.dev/api/films/", "");
  return (
    <Link to={`/films/${id}`} className=" film-card">
      <div className="film-card__image">
        <img
          src={`./images/films/ep${episode}@600.jpg`}
          width="600px"
          height="900px"
          alt={title}
        />
      </div>
      <div className="film-card__content">
        <div className="film-card__episode">Episode {episode}</div>
        <div className="film-card__title">{title}</div>
        <div className="film-card_year">
          <FormatDate date={year} />
        </div>
      </div>
    </Link>
  );
}

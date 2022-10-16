// Interfaces
import { IFilm } from "../../../interfaces/film";

// Components
import FormatDate from "../../../utilities/FormatDate";
import Statistics from "../../shared/statistics/Statistics";

type FilmHeaderProps = {
  data: IFilm;
};

export default function FilmHeader({ data }: FilmHeaderProps) {
  return (
    <header className="film-header">
      <div className="film-header__image">
        <img
          src={`/images/films/ep${data.episode_id}@600.jpg`}
          width="600px"
          height="900px"
          alt={data.title}
        />
      </div>
      <div className="film-header__content">
        <div>
          <div className="heading heading--h3">Episode: {data.episode_id}</div>
          <h1 className="heading heading--h2">{data.title}</h1>
          <h3 className="heading heading--h3">Released</h3>
          <p className="body-text">
            <FormatDate date={data.release_date} />
          </p>
          <h2 className="heading heading--h3">Opening Crawl.</h2>
          <p className="body-text">{data.opening_crawl}</p>
          <div className="production">
            <div>
              <h3 className="heading heading--h3">Director</h3>
              <p className="body-text">{data.director}</p>
            </div>
            <div>
              <h3 className="heading heading--h3">Producer(s)</h3>
              <p className="body-text">{data.producer}</p>
            </div>
          </div>
        </div>
        <Statistics
          characters={data.characters?.length}
          planets={data.planets?.length}
          species={data.species?.length}
          starships={data.starships?.length}
          vehicles={data.vehicles?.length}
        />
      </div>
    </header>
  );
}

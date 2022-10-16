// Interfaces
import { IFilm } from "../../../interfaces/film";

// Components
import Statistics from "../../shared/statistics/Statistics";

// Utilities
import FormatDate from "../../../utilities/FormatDate";
import ProductionTeam from "./production_team/ProductionTeam";

type FilmHeaderProps = {
  data: IFilm;
};

export default function FilmHeader({ data }: FilmHeaderProps) {
  return (
    <header className="film-header">
      <div className="container">
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
            <div className="heading heading--h3">
              Episode: {data.episode_id}
            </div>
            <h1 className="heading heading--h2">{data.title}</h1>
            <h2 className="heading heading--h3">Released</h2>
            <p className="body-text">
              <FormatDate date={data.release_date} />
            </p>
            <h3 className="heading heading--h3">Opening Crawl.</h3>
            <p className="body-text">{data.opening_crawl}</p>
            <ProductionTeam director={data.director} producer={data.producer} />
          </div>
          <Statistics
            characters={data.characters?.length}
            planets={data.planets?.length}
            species={data.species?.length}
            starships={data.starships?.length}
            vehicles={data.vehicles?.length}
          />
        </div>
      </div>
    </header>
  );
}

import { IFilm } from "../../../interfaces/film";

type FilmHeaderProps = {
  data: IFilm;
};

export default function FilmHeader({ data }: FilmHeaderProps) {
  return (
    <header className="film-header">
      <div className="image">
        <img
          src={`/images/films/ep${data.episode_id}@600.jpg`}
          width="600px"
          height="900px"
          alt={data.title}
        />
      </div>
      <div className="content">
        <div className="heading heading--h3">Episode: {data.episode_id}</div>
        <h1 className="heading heading--h2">{data.title}</h1>
        <h2 className="heading heading--h3">Opening Crawl.</h2>
        <p className="body-text">{data.opening_crawl}</p>
        <h3 className="heading heading--h3">Director</h3>
        <p className="body-text">{data.director}</p>
        <h3 className="heading heading--h3">Producer(s)</h3>
        <p className="body-text">{data.producer}</p>
      </div>
    </header>
  );
}

type FilmCardProps = {
  image: string;
  episode: number;
  title: string;
  year: string;
};

export default function FilmCard({
  image,
  episode,
  title,
  year,
}: FilmCardProps) {
  return (
    <div className=" film-card">
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
        <div className="film-card_year">{year}</div>
      </div>
    </div>
  );
}

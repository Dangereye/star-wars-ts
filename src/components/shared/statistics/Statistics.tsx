type StatisticsProps = {
  characters?: number;
  planets?: number;
  species?: number;
  starships?: number;
  vehicles?: number;
};

export default function Statistics({
  characters,
  planets,
  species,
  starships,
  vehicles,
}: StatisticsProps) {
  return (
    <div className="statistics">
      <div className="statistic">
        <div className="heading heading--h2">{characters}</div>
        <div className="body-text">characters</div>
      </div>
      <div className="statistic">
        <div className="heading heading--h2">{planets}</div>
        <div className="body-text">planets</div>
      </div>
      <div className="statistic">
        <div className="heading heading--h2">{species}</div>
        <div className="body-text">species</div>
      </div>
      <div className="statistic">
        <div className="heading heading--h2">{starships}</div>
        <div className="body-text">starships</div>
      </div>
      <div className="statistic">
        <div className="heading heading--h2">{vehicles}</div>
        <div className="body-text">vehicles</div>
      </div>
      {/* <div className="statistic">
        <div className="statistic__icon">{<GiTank />}</div>
        <div className="statistic__value">{vehicles}</div>
      </div> */}
    </div>
  );
}

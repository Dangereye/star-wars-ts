type ProductionTeamProps = {
  director: string;
  producer: string;
};

export default function ProductionTeam({
  director,
  producer,
}: ProductionTeamProps) {
  return (
    <div className="production-team">
      <div>
        <h3 className="heading heading--h3">Director</h3>
        <p className="body-text">{director}</p>
      </div>
      <div>
        <h3 className="heading heading--h3">Producer(s)</h3>
        <p className="body-text">{producer}</p>
      </div>
    </div>
  );
}

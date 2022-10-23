import Statistic from "./statistic/Statistic";

type StatisticsProps = {
  films?: number;
  characters?: number;
  planets?: number;
  species?: number;
  starships?: number;
  vehicles?: number;
};

export default function Statistics({
  films = 0,
  characters = 0,
  planets = 0,
  species = 0,
  starships = 0,
  vehicles = 0,
}: StatisticsProps) {
  return (
    <div className="statistics">
      <Statistic name="films" value={films} />
      <Statistic name="characters" value={characters} />
      <Statistic name="planets" value={planets} />
      <Statistic name="species" value={species} />
      <Statistic name="starships" value={starships} />
      <Statistic name="vehicles" value={vehicles} />
    </div>
  );
}

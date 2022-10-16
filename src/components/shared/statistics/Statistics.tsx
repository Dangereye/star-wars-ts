import Statistic from "./statistic/Statistic";

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
      <Statistic name="character" value={characters} />
      <Statistic name="planets" value={planets} />
      <Statistic name="species" value={species} />
      <Statistic name="starships" value={starships} />
      <Statistic name="vehicles" value={vehicles} />
    </div>
  );
}

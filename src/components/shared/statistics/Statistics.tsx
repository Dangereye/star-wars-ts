import { IoIosPeople, IoIosPlanet } from "react-icons/io";
import { GiDna1, GiTank } from "react-icons/gi";
import { RiSpaceShipFill } from "react-icons/ri";

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
        <div className="statistic__icon">{<IoIosPeople />}</div>
        <div className="statistic__value">{characters}</div>
      </div>
      <div className="statistic">
        <div className="statistic__icon">{<IoIosPlanet />}</div>
        <div className="statistic__value">{planets}</div>
      </div>
      <div className="statistic">
        <div className="statistic__icon">{<GiDna1 />}</div>
        <div className="statistic__value">{species}</div>
      </div>
      <div className="statistic">
        <div className="statistic__icon">{<RiSpaceShipFill />}</div>
        <div className="statistic__value">{starships}</div>
      </div>
      <div className="statistic">
        <div className="statistic__icon">{<GiTank />}</div>
        <div className="statistic__value">{vehicles}</div>
      </div>
    </div>
  );
}

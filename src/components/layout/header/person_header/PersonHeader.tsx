// Components
import Header from "../Header";
import Homeworld from "../../../shared/Homeworld";
import Species from "../../../shared/Species";
import Statistics from "../../../shared/statistics/Statistics";
import H1 from "../../../shared/text/H1";

// Interfaces
import { IPeople } from "../../../../interfaces/people";

type PersonHeaderProps = {
  data: IPeople;
};

export default function PersonHeader({ data }: PersonHeaderProps) {
  return (
    <Header id="person">
      <div className="image">
        <img
          src={`/images/films/ep1@600.jpg`}
          width="600px"
          height="900px"
          alt={data.name}
        />
      </div>
      <div className="content">
        <div>
          <H1 text={data.name} />
          <ul className="list">
            <li className="list__item">
              <span>gender</span>
              <span>{data.gender}</span>
            </li>
            <li className="list__item">
              <span>species</span>
              <span>
                <Species url={data.species} icon />
              </span>
            </li>
            <li className="list__item">
              <span>Birth Year</span>
              <span>{data.birth_year}</span>
            </li>
            <li className="list__item">
              <span>Homeworld</span>
              <span>
                <Homeworld url={data.homeworld} icon />
              </span>
            </li>
            <li className="list__item">
              <span>Height</span>
              <span>{data.height}cm</span>
            </li>
            <li className="list__item">
              <span>Mass</span>
              <span>{data.mass}kg</span>
            </li>
            <li className="list__item">
              <span>Hair colour</span>
              <span>{data.hair_color}</span>
            </li>
            <li className="list__item">
              <span>Skin colour</span>
              <span>{data.skin_color}</span>
            </li>
            <li className="list__item">
              <span>Eye colour</span>
              <span>{data.eye_color}</span>
            </li>
          </ul>
        </div>
        <Statistics
          films={data.films.length}
          starships={data.starships.length}
          vehicles={data.vehicles.length}
        />
      </div>
    </Header>
  );
}

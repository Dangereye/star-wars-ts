import { IPeople } from "../../../../interfaces/people";
import Homeworld from "../../../shared/Homeworld";
import Species from "../../../shared/Species";
import Statistics from "../../../shared/statistics/Statistics";
import BodyText from "../../../shared/text/BodyText";
import H2 from "../../../shared/text/H2";
import H3 from "../../../shared/text/H3";
import HDiv from "../../../shared/text/HDiv";
import Header from "../Header";

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
          <H2 text={data.name} />
          <H3 text="gender" />
          <BodyText text={data.gender} />
          <H3 text="species" />
          <Species url={data.species} />
          <H3 text="homeworld" />
          <Homeworld url={data.homeworld} />
          <H3 text="birth year" />
          <BodyText
            text={`${data.birth_year} (Years before the battle of Yavin)`}
          />
          <H3 text="appearance" />
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

// Components
import Header from "../Header";
import Homeworld from "../../../shared/Homeworld";
import Species from "../../../shared/Species";
import Statistics from "../../../shared/statistics/Statistics";
import H1 from "../../../shared/text/H1";

// Interfaces
import { IPeople } from "../../../../interfaces/people";
import List from "../../../shared/lists/List";
import ListItem from "../../../shared/lists/list_item/ListItem";
import StringToStringArray from "../../../../utilities/string_to_string_array/StringToStringArray";

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
          <List>
            <ListItem name="gender" value={data.gender} />
            <ListItem name="species" value={<Species url={data.species} />} />
            <ListItem name="birth year" value={data.birth_year} />
            <ListItem
              name="homeworld"
              value={<Homeworld url={data.homeworld} />}
            />
            <ListItem name="height" value={`${data.height}`} />
            <ListItem name="mass" value={`${data.mass}`} />
            <ListItem
              name="hair colour"
              value={<StringToStringArray string={data.hair_color} />}
            />
            <ListItem
              name="skin colour"
              value={<StringToStringArray string={data.skin_color} />}
            />
            <ListItem
              name="eye colour"
              value={<StringToStringArray string={data.eye_color} />}
            />
          </List>
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

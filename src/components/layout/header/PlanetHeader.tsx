// Components
import Header from "./Header";
import H1 from "../../shared/text/H1";
import List from "../../shared/lists/List";
import ListItem from "../../shared/lists/list_item/ListItem";
import Statistics from "../../shared/statistics/Statistics";

// Interfaces
import { IPlanet } from "../../../interfaces/planet";

// Utilities
import StringToStringArray from "../../../utilities/string_to_string_array/StringToStringArray";
import CheckUnits from "../../../utilities/CheckUnits";

type SpeciesHeaderProps = {
  data: IPlanet;
};

export default function PersonHeader({ data }: SpeciesHeaderProps) {
  return (
    <Header id="species">
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
            <ListItem
              name="climate"
              value={<StringToStringArray string={data.climate} />}
            />
            <ListItem
              name="terrain"
              value={<StringToStringArray string={data.terrain} />}
            />
            <ListItem
              name="surface water"
              value={<CheckUnits type="%" string={data.surface_water} />}
            />
            <ListItem
              name="diameter"
              value={<CheckUnits type="km" string={data.diameter} />}
            />
            <ListItem
              name="orbital period (year)"
              value={<CheckUnits type=" days" string={data.orbital_period} />}
            />
            <ListItem
              name="rotation period (day)"
              value={<CheckUnits type="hrs" string={data.rotation_period} />}
            />

            <ListItem
              name="gravity"
              value={<StringToStringArray string={data.gravity} />}
            />
            <ListItem
              name="population"
              value={<CheckUnits string={data.population} />}
            />
          </List>
        </div>
        <Statistics films={data.films.length} />
      </div>
    </Header>
  );
}

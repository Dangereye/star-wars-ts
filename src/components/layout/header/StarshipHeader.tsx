// Components
import Header from "./Header";
import H1 from "../../shared/text/H1";
import List from "../../shared/lists/List";
import ListItem from "../../shared/lists/list_item/ListItem";
import Statistics from "../../shared/statistics/Statistics";

// Interfaces
import { IStarship } from "../../../interfaces/starship";

// Utilities
import StringToStringArray from "../../../utilities/string_to_string_array/StringToStringArray";
import CheckUnits from "../../../utilities/CheckUnits";

type Props = {
  data: IStarship;
};

export default function StarshipHeader({ data }: Props) {
  return (
    <Header id="starships">
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
            <ListItem name="model" value={data.model} />
            <ListItem name="starship class" value={data.starship_class} />
            <ListItem
              name="manufacturer"
              value={<StringToStringArray string={data.manufacturer} />}
            />
            <ListItem
              name="cost in credits"
              value={<CheckUnits string={data.cost_in_credits} />}
            />
            <ListItem
              name="length"
              value={<CheckUnits type="m" string={data.length} />}
            />
            <ListItem name="crew" value={<CheckUnits string={data.crew} />} />
            <ListItem
              name="passengers"
              value={<CheckUnits string={data.passengers} />}
            />
            <ListItem
              name="hyperdrive rating"
              value={<CheckUnits string={data.hyperdrive_rating} />}
            />
            <ListItem
              name="max speed"
              value={<CheckUnits type="mglt" string={data.MGLT} />}
            />
            <ListItem
              name="cargo capacity"
              value={<CheckUnits type="kg" string={data.cargo_capacity} />}
            />
            <ListItem
              name="consumables supply"
              value={<CheckUnits string={data.consumables} />}
            />
          </List>
        </div>
        <Statistics films={data.films.length} characters={data.pilots.length} />
      </div>
    </Header>
  );
}

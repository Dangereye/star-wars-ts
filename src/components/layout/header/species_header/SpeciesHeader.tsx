// Components
import Header from "../Header";
import H1 from "../../../shared/text/H1";
import List from "../../../shared/lists/List";
import ListItem from "../../../shared/lists/list_item/ListItem";
import Homeworld from "../../../shared/Homeworld";
import Statistics from "../../../shared/statistics/Statistics";

// Interfaces
import { ISpecies } from "../../../../interfaces/species";

// Utilities
import StringToStringArray from "../../../../utilities/StringToStringArray";

type SpeciesHeaderProps = {
  data: ISpecies;
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
            <ListItem name="classification" value={data.classification} />
            <ListItem name="designation" value={data.designation} />
            <ListItem
              name="average height"
              value={`${data.average_height}cm`}
            />
            <ListItem
              name="skin colours"
              value={<StringToStringArray string={data.skin_colors} />}
            />
            <ListItem
              name="hair colours"
              value={<StringToStringArray string={data.hair_colors} />}
            />
            <ListItem
              name="eye colours"
              value={<StringToStringArray string={data.eye_colors} />}
            />
            <ListItem
              name="average lifespan"
              value={`${data.average_lifespan}yrs`}
            />
            <ListItem
              name="homeworld"
              value={<Homeworld url={data?.homeworld} />}
            />
            <ListItem name="language" value={data.language} />
          </List>
        </div>
        <Statistics films={data.films.length} characters={data.people.length} />
      </div>
    </Header>
  );
}

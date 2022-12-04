import H1 from "../../shared/text/H1";
import List from "../../shared/lists/List";
import Statistics from "../../shared/statistics/Statistics";
import ListItem from "../../shared/lists/list_item/TableItem";
import BackgroundImage from "../../shared/background_image/BackgroundImage";

type Props = {
  bgImage: string;
  category: string;
  color?: string;
  name: string;
  list: (
    | {
        name: string;
        value: string;
      }
    | {
        name: string;
        value: JSX.Element;
      }
  )[];

  stats?: {
    films?: number;
    people?: number;
    planets?: number;
    species?: number;
    starships?: number;
    vehicles?: number;
  };
};

export default function GenericHeader({
  bgImage,
  category,
  color,
  name,
  list,
  stats,
}: Props) {
  return (
    <header className="header">
      <BackgroundImage src={bgImage} attachment="fixed" />
      <div className="container container--generic">
        <div className={`category ${color}`}>
          <div className="rotate">{category}</div>
        </div>
        <div className="content">
          <div className="">
            <H1 text={name} />
            <List>
              {list.map((item) => (
                <ListItem name={item.name} value={item.value} />
              ))}
            </List>
          </div>
          <Statistics
            films={stats?.films}
            characters={stats?.people}
            planets={stats?.planets}
            species={stats?.species}
            starships={stats?.starships}
            vehicles={stats?.vehicles}
          />
        </div>
      </div>
    </header>
  );
}

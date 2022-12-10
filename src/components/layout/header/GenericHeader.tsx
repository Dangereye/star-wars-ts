import H1 from "../../shared/text/H1";
import List from "../../shared/lists/List";
import Statistics from "../../shared/statistics/Statistics";
import ListTable from "../../shared/lists/list_table/ListTable";
import BackgroundImage from "../../shared/background_image/BackgroundImage";
import Image from "../../shared/Image";
import { formatImageName } from "../../../utilities/formatImageName";

type Props = {
  bgImage: string;
  imageFolder?: string;
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
  imageFolder,
  color,
  name,
  list,
  stats,
}: Props) {
  return (
    <header className="header">
      <BackgroundImage src={bgImage} attachment="fixed" />
      <div className="container container--generic">
        <div className="header__image">
          <Image
            src={`/images/${imageFolder}/${formatImageName(name)}.webp`}
            fallback="/images/error_500x500_alt.webp"
            alt={name}
          />
        </div>
        <div className="header__content">
          <div className="">
            <H1 text={name} />
            <List>
              {list.map((item) => (
                <ListTable name={item.name} value={item.value} />
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

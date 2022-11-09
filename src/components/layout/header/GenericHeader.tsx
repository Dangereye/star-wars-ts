import H1 from "../../shared/text/H1";
import List from "../../shared/lists/List";
import Statistics from "../../shared/statistics/Statistics";
import ListItem from "../../shared/lists/list_item/ListItem";
import BackgroundImage from "../../shared/background_image/BackgroundImage";

type Props = {
  variant?: string;
  bgImage?: string;
  icon?: () => JSX.Element;
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
  statistics?: [];
};

export default function GenericHeader({
  variant,
  bgImage,
  icon,
  name,
  list,
  statistics,
}: Props) {
  return (
    <header className={`header ${variant}`}>
      <BackgroundImage src={bgImage} attachment="fixed" />
      <div className="container">
        {icon && (
          <div
            className="icon"
            style={{ backgroundColor: "hsl(203, 44%, 81%,.9)" }}
          >
            {icon()}
          </div>
        )}
        <div className="content">
          <div className="">
            <H1 text={name} />
            <List>
              {list.map((item) => (
                <ListItem name={item.name} value={item.value} />
              ))}
            </List>
          </div>
          {/* <Statistics statistics={statistics} /> */}
        </div>
      </div>
    </header>
  );
}

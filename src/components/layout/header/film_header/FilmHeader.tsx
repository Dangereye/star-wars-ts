// Interfaces
import { IFilm } from "../../../../interfaces/film";

// Components
import Statistics from "../../../shared/statistics/Statistics";

// Utilities
import FormatDate from "../../../../utilities/FormatDate";
import ProductionTeam from "./production_team/ProductionTeam";
import BodyText from "../../../shared/text/BodyText";
import H3 from "../../../shared/text/H3";
import H2 from "../../../shared/text/H2";
import HDiv from "../../../shared/text/HDiv";
import Header from "../../header/Header";
import H1 from "../../../shared/text/H1";
import StringToStringArray from "../../../../utilities/string_to_string_array/StringToStringArray";

type FilmHeaderProps = {
  data: IFilm;
};

export default function FilmHeader({ data }: FilmHeaderProps) {
  return (
    <Header id="Films">
      <div className="image">
        <img
          src={`/images/films/ep${data.episode_id}@600.jpg`}
          width="600px"
          height="900px"
          alt={data.title}
        />
      </div>
      <div className="content">
        <div>
          <HDiv variant="heading--h3" text={`Episode ${data.episode_id}`} />
          <H1 text={data.title} />
          <H3 text="released" />
          <BodyText text={<FormatDate date={data.release_date} />} />
          <H3 text="opening crawl." />
          <BodyText text={data.opening_crawl} />
          <ProductionTeam
            director={data.director}
            producer={<StringToStringArray string={data.producer} />}
          />
        </div>
        <Statistics
          characters={data.characters?.length}
          planets={data.planets?.length}
          species={data.species?.length}
          starships={data.starships?.length}
          vehicles={data.vehicles?.length}
        />
      </div>
    </Header>
  );
}

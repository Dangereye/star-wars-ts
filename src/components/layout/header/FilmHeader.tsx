// Interfaces
import { IFilm } from "../../../interfaces/film";

// Components
import BackgroundImage from "../../shared/background_image/BackgroundImage";
import HDiv from "../../shared/text/HDiv";
import H1 from "../../shared/text/H1";
import H3 from "../../shared/text/H3";
import BodyText from "../../shared/text/BodyText";
import ProductionTeam from "./production_team/ProductionTeam";
import Statistics from "../../shared/statistics/Statistics";

// Utilities
import FormatDate from "../../../utilities/FormatDate";
import StringToStringArray from "../../../utilities/string_to_string_array/StringToStringArray";

type FilmHeaderProps = {
  data: IFilm;
};

export default function FilmHeader({ data }: FilmHeaderProps) {
  return (
    <header className="header" id="Films">
      <BackgroundImage
        src={`/images/films/episode${data.episode_id}_background.webp`}
        attachment="fixed"
      />
      <div className="container container--film">
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
      </div>
    </header>
  );
}

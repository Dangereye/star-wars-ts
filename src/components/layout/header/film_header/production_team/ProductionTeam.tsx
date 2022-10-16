// Components
import H3 from "../../../../shared/text/H3";
import BodyText from "../../../../shared/text/BodyText";

type ProductionTeamProps = {
  director?: string;
  producer?: string;
};

export default function ProductionTeam({
  director,
  producer,
}: ProductionTeamProps) {
  return (
    <div className="production-team">
      {director && (
        <div>
          <H3 text="director" />
          <BodyText text={director} />
        </div>
      )}
      {producer && (
        <div>
          <H3 text="producer(s)" />
          <BodyText text={producer} />
        </div>
      )}
    </div>
  );
}

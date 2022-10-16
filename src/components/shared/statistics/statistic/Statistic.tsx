import BodyText from "../../text/BodyText";
import H2 from "../../text/H2";

type StatisticProps = {
  name: string;
  value: number | undefined;
};

export default function Statistic({ name, value }: StatisticProps) {
  return (
    <>
      {value && (
        <div className="statistic">
          <H2 text={value} />
          <BodyText text={name} />
        </div>
      )}
    </>
  );
}

type StatisticProps = {
  name: string;
  value: number | undefined;
};

export default function Statistic({ name, value }: StatisticProps) {
  return (
    <>
      {value && (
        <div className="statistic">
          <div className="heading heading--h2">{value}</div>
          <div className="body-text">{name}</div>
        </div>
      )}
    </>
  );
}

type FormatDateProps = {
  date: string;
};

export default function FormatDate({ date }: FormatDateProps) {
  const d = new Date(date);

  return (
    <span className="format-date">
      {d.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}
    </span>
  );
}

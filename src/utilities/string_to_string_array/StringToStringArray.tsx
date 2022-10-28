type StringToStringArrayProps = {
  string: string;
};

export default function StringToStringArray({
  string,
}: StringToStringArrayProps) {
  const array = string.split(",");
  return (
    <span className="string-to-string-array">
      {array.map((item, i) => (
        <span key={`${item}-${i}`}>{item}</span>
      ))}
    </span>
  );
}

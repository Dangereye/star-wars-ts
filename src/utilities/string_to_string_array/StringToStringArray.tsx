type StringToStringArrayProps = {
  string: string;
};

export default function StringToStringArray({
  string,
}: StringToStringArrayProps) {
  const array = string.replace(" ", "").split(",");
  return (
    <span className="string-to-string-array">
      {array.map((item: string) => (
        <span>{item}</span>
      ))}
    </span>
  );
}

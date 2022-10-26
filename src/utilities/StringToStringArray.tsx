type StringToStringArrayProps = {
  string: string;
};

export default function StringToStringArray({
  string,
}: StringToStringArrayProps) {
  const array = string.replace(" ", "").split(",");
  return (
    <>
      {array.map((item: string) => (
        <span className="string-array">{item}</span>
      ))}
    </>
  );
}

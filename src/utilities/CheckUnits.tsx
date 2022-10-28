type CheckUnitsProps = {
  type?: "cm" | "kg" | "yrs" | "km" | "hrs" | " days" | "%";
  string: string;
};

export default function CheckUnits({ type, string }: CheckUnitsProps) {
  const expression = /[a-zA-Z]/;
  if (expression.test(string)) {
    return <>{string}</>;
  }
  return (
    <>{`${string
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}${type}`}</>
  );
}

CheckUnits.defaultProps = { type: "" };

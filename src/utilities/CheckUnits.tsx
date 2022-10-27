type CheckUnitsProps = {
  type: "cm" | "kg" | "yrs";
  string: string;
};

export default function CheckUnits({ type, string }: CheckUnitsProps) {
  const expression = /[a-zA-Z]/;
  if (expression.test(string)) {
    return <>{string}</>;
  }
  return <>{`${string}${type}`}</>;
}

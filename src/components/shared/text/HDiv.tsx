type HDivProps = {
  variant: "heading--h1" | "heading--h2" | "heading--h3" | "heading--h4";
  text: string | number;
};

export default function HDiv({ variant, text }: HDivProps) {
  return <div className={`heading ${variant}`}>{text}</div>;
}

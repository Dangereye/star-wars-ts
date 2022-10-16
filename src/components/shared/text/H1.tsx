type H1Props = {
  text: string | number;
};

export default function H1({ text }: H1Props) {
  return <h1 className="heading heading--h1">{text}</h1>;
}

type H2Props = {
  text: string;
};

export default function H2({ text }: H2Props) {
  return <h2 className="heading heading--h2">{text}</h2>;
}

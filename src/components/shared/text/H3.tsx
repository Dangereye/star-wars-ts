type H3Props = {
  text: string;
};

export default function H3({ text }: H3Props) {
  return <h3 className="heading heading--h3">{text}</h3>;
}

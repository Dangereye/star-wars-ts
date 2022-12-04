type ListAnchorProps = {
  href: string;
  name: string;
};

export default function ListAnchor({ href, name }: ListAnchorProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="list-anchor">
      {name}
    </a>
  );
}

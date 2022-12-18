type ListAnchorProps = {
  href: string;
  name: string;
};

export default function ListAnchor({ href, name }: ListAnchorProps) {
  return (
    <li className="list__item">
      <a href={href} target="_blank" rel="noreferrer" className="list-anchor">
        {name}
      </a>
    </li>
  );
}

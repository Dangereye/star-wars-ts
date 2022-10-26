import { ReactNode } from "react";

type ListItemProps = {
  name: string;
  value: string | ReactNode;
};

export default function ListItem({ name, value }: ListItemProps) {
  return (
    <li className="list-item">
      <span className="list-item--name">{name}</span>
      <span className="list-item--value">{value}</span>
    </li>
  );
}

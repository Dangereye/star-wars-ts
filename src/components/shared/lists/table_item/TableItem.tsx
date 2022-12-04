import { ReactNode } from "react";

type TableItemProps = {
  name: string;
  value: string | ReactNode;
};

export default function TableItem({ name, value }: TableItemProps) {
  return (
    <li className="table-item">
      <span className="table-item--name">{name}</span>
      <span className="table-item--value">{value}</span>
    </li>
  );
}

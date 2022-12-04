import { ReactNode } from "react";

type ListTableProps = {
  name: string;
  value: string | ReactNode;
};

export default function ListTable({ name, value }: ListTableProps) {
  return (
    <li className="list-table">
      <span className="list-table--name">{name}</span>
      <span className="list-table--value">{value}</span>
    </li>
  );
}

import { ReactNode } from "react";

type ListProps = {
  variant?: string;
  children: ReactNode;
};

export default function List({ variant, children }: ListProps) {
  return <ul className={`list ${variant}`}>{children}</ul>;
}

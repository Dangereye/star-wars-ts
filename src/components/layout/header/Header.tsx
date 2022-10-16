import { ReactNode } from "react";

type HeaderProps = {
  id?: string;
  variant?: string;
  children: ReactNode;
};

export default function Header({ id, variant, children }: HeaderProps) {
  return (
    <header className={`header ${variant}`} id={id}>
      <div className="container">{children}</div>
    </header>
  );
}

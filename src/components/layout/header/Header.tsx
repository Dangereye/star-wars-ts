import { ReactNode } from "react";
import BackgroundImage from "../../shared/background_image/BackgroundImage";

type HeaderProps = {
  id?: string;
  variant?: string;
  children: ReactNode;
};

export default function Header({ id, variant, children }: HeaderProps) {
  return (
    <header className={`header ${variant}`} id={id}>
      <BackgroundImage
        src="/images/films/film1_background.webp"
        attachment="fixed"
      />
      <div className="container">{children}</div>
    </header>
  );
}

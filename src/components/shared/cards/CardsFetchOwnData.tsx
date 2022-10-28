import { ReactNode } from "react";
import H2 from "../text/H2";

type CardsFetchOwnDataProps = {
  title: string;
  children: ReactNode;
};

export default function CardsFetchOwnData({
  title,
  children,
}: CardsFetchOwnDataProps) {
  return (
    <article className="article">
      <div className="container">
        <H2 text={title} />
        <div className="cards">{children}</div>
      </div>
    </article>
  );
}

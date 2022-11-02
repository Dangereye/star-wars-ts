import { ReactNode } from "react";
import H2 from "../text/H2";

type CardsFetchOwnDataProps = {
  title: string;
  results: number;
  children: ReactNode;
};

export default function CardsFetchOwnData({
  title,
  results,
  children,
}: CardsFetchOwnDataProps) {
  return (
    <>
      {results > 0 ? (
        <article className="article">
          <div className="container">
            <H2 text={title} />
            <div className="cards">{children}</div>
          </div>
        </article>
      ) : null}
    </>
  );
}

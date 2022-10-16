import { ReactNode } from "react";

type BodyTextProps = {
  text: string | ReactNode;
};

export default function BodyText({ text }: BodyTextProps) {
  return <p className="body-text">{text}</p>;
}

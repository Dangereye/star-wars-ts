import { Link } from "react-router-dom";

type LinkTextProps = {
  href: string;
  text: string;
};

export default function LinkText({ href, text }: LinkTextProps) {
  return (
    <Link to={href} className="link-text">
      {text}
    </Link>
  );
}

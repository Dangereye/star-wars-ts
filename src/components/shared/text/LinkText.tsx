import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

type LinkTextProps = {
  href: string;
  text: string;
  icon?: boolean;
};

export default function LinkText({ href, text, icon }: LinkTextProps) {
  return (
    <Link to={href} className="link-text">
      <span>{text}</span>
      {icon && <span>{<MdKeyboardArrowRight />}</span>}
    </Link>
  );
}

type ButtonProps = {
  name: string;
  size?: "btn--large";
  variant?: "btn--primary" | "btn--secondary" | "btn--tertiary";
  disabled?: boolean;
  onClick: () => void;
};

export default function Button({
  name,
  size,
  variant,
  disabled,
  onClick,
}: ButtonProps) {
  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };
  return (
    <button
      className={`btn ${size} ${disabled ? "btn--disabled" : variant}`}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

Button.defaultProps = {
  name: "button",
  disabled: false,
};

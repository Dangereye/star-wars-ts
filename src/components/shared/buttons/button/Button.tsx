type ButtonProps = {
  name: string;
  size?: "btn--large";
  variant?: "btn--primary" | "btn--secondary" | "btn--tertiary";
  onClick: () => void;
  disabled?: boolean;
};

export default function Button({
  name,
  size,
  variant,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`btn ${size} ${disabled ? "btn--disabled" : variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
}

Button.defaultProps = {
  name: "button",
  disabled: false,
};

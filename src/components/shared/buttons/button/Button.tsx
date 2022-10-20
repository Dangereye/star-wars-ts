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
  return (
    <button
      className={`btn ${size} ${disabled ? "btn--disabled" : variant}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

type Props = {
  src: string;
  position?: "top" | "right" | "bottom" | "left" | "center";
  size?: "cover";
  attachment?: "scroll" | "fixed";
  opacity?: number;
};

export default function BackgroundImage({
  src,
  position = "center",
  size = "cover",
  attachment = "scroll",
  opacity = 0.1,
}: Props) {
  return (
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: position,
        backgroundSize: size,
        backgroundAttachment: attachment,
        opacity,
      }}
    ></div>
  );
}

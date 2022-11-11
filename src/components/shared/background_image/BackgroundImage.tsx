type Props = {
  src: string;
  position?: "top" | "right" | "bottom" | "left" | "center";
  size?: "cover";
  attachment?: "fixed";
  opacity?: number;
};

export default function BackgroundImage({
  src,
  position,
  size,
  attachment,
  opacity,
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

BackgroundImage.defaultProps = {
  src: "/images/headers/people_header.webp",
  position: "center",
  size: "cover",
  attachment: "scroll",
  opacity: 0.05,
};

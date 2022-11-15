import { useState } from "react";

type Props = {
  src: string;
  fallback: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function Image({ src, fallback, alt, width, height }: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  const onError = () => {
    setImgSrc(fallback);
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      width={`${width}px`}
      height={`${height}px`}
      onError={onError}
    />
  );
}

Image.defaultProps = {
  width: "500px",
  height: "500px",
};

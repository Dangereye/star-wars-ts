import { useState } from "react";

type Props = {
  src: string;
  fallback?: string;
  alt: string;
  width?: number;
  height?: number;
};

export default function Image({
  src,
  fallback = "/images/error_500x500.webp",
  alt,
  width = 500,
  height = 500,
}: Props) {
  const [imgSrc, setImgSrc] = useState(src);

  const onError = () => {
    setImgSrc(fallback);
  };

  return (
    <img
      className="image"
      src={imgSrc}
      alt={alt}
      width={`${width}px`}
      height={`${height}px`}
      onError={onError}
    />
  );
}

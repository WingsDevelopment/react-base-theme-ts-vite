import React from "react";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

export const Img: React.FC<Props> = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

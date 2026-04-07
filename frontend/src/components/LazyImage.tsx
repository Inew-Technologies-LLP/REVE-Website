import React, { useState } from "react";

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
};

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = "",
  onClick, // ✅ receive onClick
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      onClick={onClick} // ✅ pass it here
      className={`
        ${className}
        transition-all duration-500 ease-in-out
        ${isLoaded ? "blur-0 opacity-100" : "blur-md opacity-80"}
      `}
    />
  );
};

export default LazyImage;
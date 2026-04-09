import React, { useState } from "react";

// ✅ Global cache (persists across renders)
const loadedImages = new Set<string>();

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
  onClick,
}) => {
  // ✅ Initialize from cache
  const [isLoaded, setIsLoaded] = useState<boolean>(
    loadedImages.has(src)
  );

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onLoad={() => {
        loadedImages.add(src); // ✅ store in cache
        setIsLoaded(true);
      }}
      onClick={onClick}
      className={`
        ${className}
        transition-all duration-500 ease-in-out
        ${isLoaded ? "blur-0 opacity-100" : "blur-md opacity-80"}
      `}
    />
  );
};

export default React.memo(LazyImage);
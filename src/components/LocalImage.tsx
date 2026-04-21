import { useState } from 'react';

interface LocalImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;          // preferred local path like "/images/hero.jpg"
  fallbackSrc: string;  // remote placeholder used until the local file exists
  alt: string;
}

// Tries the local path first. Swaps to the remote fallback if it 404s —
// so dropping files into public/images/ makes them appear on next load.
export default function LocalImage({ src, fallbackSrc, alt, ...rest }: LocalImageProps) {
  const [resolved, setResolved] = useState(src);
  const [triedFallback, setTriedFallback] = useState(false);

  return (
    <img
      {...rest}
      src={resolved}
      alt={alt}
      onError={() => {
        if (!triedFallback) {
          setResolved(fallbackSrc);
          setTriedFallback(true);
        }
      }}
    />
  );
}

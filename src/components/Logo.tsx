import { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

// Renders /logo.jpg if it exists; otherwise a styled text wordmark.
// Users can drop the real logo at public/logo.jpg (or .png) and it appears.
export default function Logo({ className = '', variant = 'dark' }: LogoProps) {
  const [failed, setFailed] = useState(false);
  const color = variant === 'light' ? 'text-white' : 'text-teal';

  if (failed) {
    return (
      <span className={`font-montserrat font-bold text-xl ${color} ${className}`}>
        Chipata Girls FC
      </span>
    );
  }

  return (
    <img
      src="/logo.jpg"
      alt="Chipata Girls FC"
      onError={() => setFailed(true)}
      className={`h-10 w-auto object-contain ${className}`}
    />
  );
}

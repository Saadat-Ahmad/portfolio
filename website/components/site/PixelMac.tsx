/** Friendly classic-Mac mark, a nod to Susan Kare's Happy Mac. Inherits currentColor. */
export default function PixelMac({
  className = "",
  size = 22,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 22"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinejoin="round"
      className={className}
      aria-hidden
      shapeRendering="geometricPrecision"
    >
      {/* body */}
      <rect x="2" y="1.5" width="16" height="19" rx="1.6" />
      {/* screen */}
      <rect x="4.2" y="3.6" width="11.6" height="9" />
      {/* eyes */}
      <circle cx="7.6" cy="7" r="0.85" fill="currentColor" stroke="none" />
      <circle cx="12.4" cy="7" r="0.85" fill="currentColor" stroke="none" />
      {/* smile */}
      <path d="M7.3 9.1 Q10 11.4 12.7 9.1" />
      {/* disk slot */}
      <line x1="5.4" y1="15.4" x2="9.4" y2="15.4" />
      {/* vents */}
      <line x1="11.4" y1="17.6" x2="14.6" y2="17.6" />
    </svg>
  );
}

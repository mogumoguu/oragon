// Oragon Labs mark: an open orange loop (ring with a gap = "no lock-in")
// cradling a black L for Labs. Placeholder until the founder's final mark.
export default function OragonLabsLogo({
  size = 34,
  variant = "light",
}: {
  size?: number;
  variant?: "light" | "dark";
}) {
  const loop = variant === "dark" ? "#fb923c" : "#fb923c";
  const letter = variant === "dark" ? "#ffffff" : "#1a1a1a";
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Oragon Labs">
      <circle
        cx="32"
        cy="34"
        r="22"
        fill="none"
        stroke={loop}
        strokeWidth="9"
        strokeLinecap="round"
        strokeDasharray="104 34"
        transform="rotate(-55 32 34)"
      />
      <polyline
        points="29,21 29,45 44,45"
        fill="none"
        stroke={letter}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  size?: number;
  showWordmark?: boolean;
  /** "light" = dark text on light bg
   *  "dark"  = white text on dark bg
   *  "accent" = orange text */
  variant?: "light" | "dark" | "accent";
};

export default function OragonLogo({
  size = 32,
  showWordmark = true,
  variant = "light",
}: Props) {
  const fontSize = size * 0.85;
  const color =
    variant === "dark"
      ? "#ffffff"
      : variant === "accent"
        ? "#fb923c"
        : "var(--text-primary)";

  if (!showWordmark) return null;

  return (
    <span
      style={{
        fontFamily: "var(--font-bricolage)",
        fontSize: `${fontSize}px`,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        color,
        lineHeight: 1,
        display: "inline-flex",
        alignItems: "center",
        userSelect: "none",
      }}
    >
      oragon
    </span>
  );
}

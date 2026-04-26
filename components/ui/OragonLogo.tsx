type Props = {
  size?: number;
  showWordmark?: boolean;
  /** "light" = orange mark, dark text
   *  "dark"  = orange mark, white text
   *  "white" = all white */
  variant?: "light" | "dark" | "white";
};

export default function OragonLogo({ size = 32, showWordmark = true, variant = "light" }: Props) {
  const height = size;
  const width = Math.round(size * (46 / 28));
  const fontSize = size * 0.55;
  const markColor = variant === "white" ? "#ffffff" : "#fb923c";
  const textColor = variant === "light" ? "var(--text-primary)" : "#ffffff";

  return (
    <span style={{ display: "inline-flex", alignItems: "center", userSelect: "none" }}>
      {showWordmark && (
        <span
          style={{
            fontFamily: "var(--font-russo)",
            fontSize: `${fontSize}px`,
            fontWeight: 400,
            letterSpacing: "0.06em",
            color: textColor,
            lineHeight: 1,
          }}
        >
          ORAGON
        </span>
      )}
    </span>
  );
}

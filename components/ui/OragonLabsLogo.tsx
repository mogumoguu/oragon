import Image from "next/image";

// Final Oragon Labs mark: an orange "O" that forms a lab flask, with the dark
// inner shape as the liquid being mixed. Light variant = orange + dark liquid
// (light backgrounds); dark variant = orange + white liquid (dark backgrounds).
export default function OragonLabsLogo({
  size = 34,
  variant = "light",
}: {
  size?: number;
  variant?: "light" | "dark";
}) {
  const src = variant === "dark" ? "/oragon-labs-logo-on-dark.png" : "/oragon-labs-logo.png";
  return (
    <Image
      src={src}
      alt="Oragon Labs"
      width={size}
      height={size}
      unoptimized
      style={{ display: "block", height: "auto" }}
    />
  );
}

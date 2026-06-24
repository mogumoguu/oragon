import Link from "next/link";
import OragonLabsLogo from "@/components/ui/OragonLabsLogo";

const label: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "10px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#9a958e",
  marginBottom: "14px",
};
const link: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "14px",
  color: "#4a4a4a",
  textDecoration: "none",
};

export default function Footer() {
  return (
    <footer style={{ padding: "56px 6vw 40px", background: "#f8f7f5", borderTop: "1px solid #e5e0db" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "32px", marginBottom: "44px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "11px", marginBottom: "14px" }}>
              <OragonLabsLogo size={30} />
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "18px", letterSpacing: "-0.02em", color: "#1a1a1a" }}>oragon labs</span>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", lineHeight: 1.5, color: "#6b6b6b", margin: 0, maxWidth: "230px" }}>
              Custom automation and AI for Filipino businesses. Built to be owned, not rented.
            </p>
          </div>

          <div>
            <div style={label}>Site</div>
            <div style={{ display: "grid", gap: "9px" }}>
              <Link href="/#oos" style={link}>The OOS</Link>
              <Link href="/#services" style={link}>Services</Link>
              <Link href="/#work" style={link}>Work</Link>
              <Link href="/#founder" style={link}>About</Link>
            </div>
          </div>

          <div>
            <div style={label}>Contact</div>
            <div style={{ display: "grid", gap: "9px" }}>
              <a href="mailto:support@oragon.com.ph" style={link}>support@oragon.com.ph</a>
              <Link href="/#book" style={{ ...link, color: "#fb923c" }}>Book a free Bottleneck Map</Link>
            </div>
          </div>

          <div>
            <div style={label}>Follow</div>
            <div style={{ display: "grid", gap: "9px" }}>
              <a href="#" style={link}>Facebook</a>
              <a href="#" style={link}>Instagram</a>
              <a href="#" style={link}>TikTok</a>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            paddingTop: "24px",
            borderTop: "1px solid #e5e0db",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "#9a958e",
          }}
        >
          <span>© 2026 Oragon Labs</span>
          <span>Made in the Philippines</span>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function ContactCTA() {
  return (
    <section style={{ padding: "clamp(64px,9vw,110px) 6vw", background: "#f1eeeb", borderTop: "1px solid #e5e0db", textAlign: "center" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto" }}>
        <Reveal style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fb923c", marginBottom: "14px" }}>
          Ready when you are
        </Reveal>
        <Reveal
          as="h2"
          delay={0.05}
          style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4.4vw,46px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#1a1a1a", margin: "0 0 16px" }}
        >
          Let&apos;s find your bottleneck.
        </Reveal>
        <Reveal as="p" delay={0.1} style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6, color: "#4a4a4a", margin: "0 0 28px" }}>
          The first Bottleneck Map is free. No slides, no obligation.
        </Reveal>
        <Reveal delay={0.16}>
          <Link
            href="/contact"
            style={{ display: "inline-block", fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff", background: "#fb923c", padding: "15px 28px", borderRadius: "999px", textDecoration: "none" }}
          >
            Get in touch →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

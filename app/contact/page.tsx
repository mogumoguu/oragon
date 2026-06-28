import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";
import SocialGrid from "@/components/ui/SocialGrid";
import Footer from "@/components/sections/Footer";
import { socials } from "@/lib/socials";

export const metadata: Metadata = {
  title: "Contact · Oragon Labs",
  description: "Get in touch with Oragon Labs. Send a message or find us on social.",
};

const label: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-mono)",
  fontSize: "11px",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "#fb923c",
};

const bodyText: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "16px",
  lineHeight: 1.65,
  color: "#4a4a4a",
};

export default function ContactPage() {
  return (
    <main>
      <section style={{ padding: "clamp(80px,10vw,120px) 6vw clamp(64px,9vw,110px)", background: "#fff" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <Reveal style={{ ...label, marginBottom: "22px" }}>Contact</Reveal>
          <Reveal
            as="h1"
            delay={0.06}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(34px,5.2vw,54px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#1a1a1a",
              margin: "0 0 22px",
            }}
          >
            Let&apos;s talk.
          </Reveal>
          <Reveal as="p" delay={0.12} style={{ ...bodyText, maxWidth: "560px", margin: "0 0 44px" }}>
            Tell us what you are working on and we will get back within a day. Or reach us on any of the channels below.
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))", gap: "clamp(32px,5vw,56px)", alignItems: "start" }}>
            <Reveal delay={0.06}><ContactForm /></Reveal>
            <Reveal delay={0.14} style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <div>
                <div style={{ ...label, color: "#9a958e", marginBottom: "10px" }}>Email us directly</div>
                <a href="mailto:support@oragon.com.ph" style={{ fontFamily: "var(--font-mono)", fontSize: "14px", color: "#fb923c", textDecoration: "none" }}>support@oragon.com.ph</a>
              </div>
              <div>
                <div style={{ ...label, color: "#9a958e", marginBottom: "12px" }}>Oragon on social</div>
                <SocialGrid items={socials} />
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "#b8b2aa", margin: "12px 0 0", letterSpacing: "0.04em", textTransform: "uppercase" }}>YouTube and LinkedIn coming soon</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

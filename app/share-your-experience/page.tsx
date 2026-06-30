import type { Metadata } from "next";
import Reveal from "@/components/ui/Reveal";
import TestimonialForm from "@/components/sections/TestimonialForm";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Share Your Experience · Oragon Labs",
  description: "Had a great experience working with Oragon Labs? We would love to hear about it.",
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

export default function ShareYourExperiencePage() {
  return (
    <main>
      <section style={{ padding: "clamp(80px,10vw,120px) 6vw clamp(64px,9vw,110px)", background: "#fff" }}>
        <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
          <Reveal style={{ ...label, marginBottom: "22px" }}>Client Testimonial</Reveal>
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
            Share your experience.
          </Reveal>
          <Reveal as="p" delay={0.12} style={{ ...bodyText, maxWidth: "560px", margin: "0 0 44px" }}>
            If Oragon built something for you, we would love to hear about it. Your feedback helps other businesses understand what we do and how we work.
          </Reveal>

          <div style={{ maxWidth: "640px" }}>
            <Reveal delay={0.06}>
              <TestimonialForm />
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

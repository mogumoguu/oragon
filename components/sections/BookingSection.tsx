"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import Reveal from "@/components/ui/Reveal";

// Cal.com inline embed for the 30-min discovery call (the Bottleneck Map).
const CAL_LINK = "miguel-isorena/discovery-call";

export default function BookingSection() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "discovery" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#fb923c" },
          dark: { "cal-brand": "#fb923c" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="book" style={{ padding: "clamp(60px,8vw,92px) 6vw", background: "#f1eeeb" }}>
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
          gap: "clamp(32px,5vw,64px)",
          alignItems: "center",
        }}
      >
        <Reveal>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fb923c", marginBottom: "14px" }}>
            Book the map
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(32px,4.6vw,46px)", lineHeight: 1.0, letterSpacing: "-0.03em", color: "#1a1a1a", margin: "0 0 18px" }}>
            30 minutes. Free. No pitch.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.6, color: "#4a4a4a", margin: "0 0 22px", maxWidth: "420px" }}>
            We walk through your business, find the highest-leverage thing to automate, and tell you straight up whether we can help. No slides, no obligation.
          </p>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.04em", color: "#6b6b6b" }}>
            Or email <a href="mailto:support@oragon.com.ph" style={{ color: "#fb923c", textDecoration: "none" }}>support@oragon.com.ph</a>
          </div>
        </Reveal>

        <Reveal style={{ background: "#fff", border: "1px solid #e5e0db", borderRadius: "10px", padding: "14px" }}>
          <div style={{ height: "600px", overflow: "auto", borderRadius: "6px" }}>
            <Cal
              namespace="discovery"
              calLink={CAL_LINK}
              style={{ width: "100%", border: "none" }}
              config={{ layout: "month_view", theme: "light" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

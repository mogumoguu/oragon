"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const inputStyle: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "14px",
  color: "#1a1a1a",
  background: "#fff",
  border: "1px solid #e5e0db",
  borderRadius: "8px",
  padding: "12px 14px",
  width: "100%",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "10px",
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#9a958e",
  marginBottom: "7px",
  display: "block",
};

const needOptions = ["Custom system or app", "Website", "Booking system", "Process automation", "Not sure yet"];
const budgetOptions = ["Under ₱20,000", "₱20,000 to ₱50,000", "₱50,000+", "Not sure yet"];
const timelineOptions = ["As soon as possible", "Within 1 to 3 months", "Just exploring"];

const focus = (e: React.FocusEvent<HTMLElement>) => (e.currentTarget.style.borderColor = "#fb923c");
const blur = (e: React.FocusEvent<HTMLElement>) => (e.currentTarget.style.borderColor = "#e5e0db");

const EASE = [0.16, 1, 0.3, 1] as const;

export default function QuoteButton() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", need: "", scope: "", budget: "", timeline: "", details: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    const message = [
      `What they need: ${form.need || "Not specified"}`,
      `Scope: ${form.scope || "Not specified"}`,
      `Budget: ${form.budget || "Not specified"}`,
      `Timeline: ${form.timeline || "Not specified"}`,
      ``,
      `Details:`,
      form.details || "None provided",
    ].join("\n");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, service: "Quote Request", message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: "#fff",
          background: "#fb923c",
          padding: "15px 26px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Request a quote →
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              background: "rgba(20,18,16,0.55)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "relative",
                background: "#fff",
                borderRadius: "12px",
                width: "100%",
                maxWidth: "540px",
                maxHeight: "90vh",
                overflowY: "auto",
                padding: "clamp(24px,4vw,36px)",
                boxShadow: "0 24px 70px rgba(0,0,0,0.28)",
              }}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "16px",
                  background: "none",
                  border: "none",
                  fontSize: "26px",
                  lineHeight: 1,
                  color: "#9a958e",
                  cursor: "pointer",
                  padding: "4px",
                }}
              >
                ×
              </button>

              {status === "success" ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start", padding: "8px 0" }}>
                  <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "rgba(251,146,60,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fb923c" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", color: "#1a1a1a", margin: 0 }}>Quote request sent.</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.6, color: "#4a4a4a", margin: 0 }}>
                    Thanks for the detail. We will review it and come back within a day with a ballpark and the next step.
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase", color: "#fff", background: "#fb923c", padding: "12px 22px", borderRadius: "999px", border: "none", cursor: "pointer", marginTop: "4px" }}
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#fb923c", marginBottom: "10px" }}>Request a quote</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "26px", letterSpacing: "-0.02em", color: "#1a1a1a", margin: "0 0 8px" }}>Tell us what you need.</h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", lineHeight: 1.6, color: "#6b6b6b", margin: "0 0 22px" }}>
                    A few quick questions and we will come back within a day with a ballpark.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                      <div>
                        <label style={labelStyle} htmlFor="q-name">Name</label>
                        <input id="q-name" type="text" required placeholder="Your name" value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="q-email">Email</label>
                        <input id="q-email" type="email" required placeholder="you@business.com" value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="q-need">What do you need?</label>
                      <select id="q-need" required value={form.need}
                        onChange={(e) => setForm({ ...form, need: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }} onFocus={focus} onBlur={blur}>
                        <option value="">Select one...</option>
                        {needOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="q-scope">Roughly how big?</label>
                      <input id="q-scope" type="text" placeholder="e.g. a 5-page site, 2 branches, or what it should do" value={form.scope}
                        onChange={(e) => setForm({ ...form, scope: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
                      <div>
                        <label style={labelStyle} htmlFor="q-budget">Budget</label>
                        <select id="q-budget" value={form.budget}
                          onChange={(e) => setForm({ ...form, budget: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }} onFocus={focus} onBlur={blur}>
                          <option value="">Select one...</option>
                          {budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="q-timeline">Timeline</label>
                        <select id="q-timeline" value={form.timeline}
                          onChange={(e) => setForm({ ...form, timeline: e.target.value })} style={{ ...inputStyle, cursor: "pointer" }} onFocus={focus} onBlur={blur}>
                          <option value="">Select one...</option>
                          {timelineOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle} htmlFor="q-details">Anything else?</label>
                      <textarea id="q-details" rows={3} placeholder="A few lines about your business and what you are trying to fix." value={form.details}
                        onChange={(e) => setForm({ ...form, details: e.target.value })} style={{ ...inputStyle, resize: "vertical", minHeight: "84px" }} onFocus={focus} onBlur={blur} />
                    </div>

                    {status === "error" && (
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#dc2626", margin: 0 }}>{errorMsg}</p>
                    )}

                    <button type="submit" disabled={status === "loading"}
                      style={{
                        fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase",
                        color: "#fff", background: "#fb923c", padding: "14px 22px", borderRadius: "999px", border: "none",
                        cursor: status === "loading" ? "not-allowed" : "pointer", opacity: status === "loading" ? 0.7 : 1, alignSelf: "flex-start",
                      }}>
                      {status === "loading" ? "Sending..." : "Send quote request →"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

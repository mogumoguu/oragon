"use client";

import { useState } from "react";

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

const focus = (e: React.FocusEvent<HTMLElement>) => (e.currentTarget.style.borderColor = "#fb923c");
const blur = (e: React.FocusEvent<HTMLElement>) => (e.currentTarget.style.borderColor = "#e5e0db");

export default function TestimonialForm() {
  const [form, setForm] = useState({
    quote: "",
    name: "",
    title: "",
    company: "",
    email: "",
    consent: false,
    website: "", // honeypot
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) {
      setErrorMsg("Please tick the consent checkbox before submitting.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e0db",
        borderRadius: "10px",
        padding: "clamp(22px,3vw,32px)",
        minHeight: "420px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {status === "success" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
          <div
            style={{
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              background: "rgba(251,146,60,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fb923c",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "20px",
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            Thank you.
          </h3>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              lineHeight: 1.6,
              color: "#4a4a4a",
              margin: 0,
            }}
          >
            Thank you. We will review it and add it to the site shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Honeypot — hidden from real users */}
          <div style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }} aria-hidden="true">
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label style={labelStyle} htmlFor="t-quote">
              Your testimonial <span style={{ color: "#fb923c" }}>*</span>
            </label>
            <textarea
              id="t-quote"
              required
              rows={6}
              placeholder="Share your experience working with Oragon..."
              value={form.quote}
              onChange={(e) => setForm({ ...form, quote: e.target.value })}
              style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
              onFocus={focus}
              onBlur={blur}
            />
          </div>

          <div>
            <label style={labelStyle} htmlFor="t-name">
              Name <span style={{ color: "#fb923c" }}>*</span>
            </label>
            <input
              id="t-name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
              onFocus={focus}
              onBlur={blur}
            />
          </div>

          <div>
            <label style={labelStyle} htmlFor="t-title">
              Title <span style={{ color: "#b8b2aa" }}>(optional)</span>
            </label>
            <input
              id="t-title"
              type="text"
              placeholder="Founder, Manager, etc."
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              style={inputStyle}
              onFocus={focus}
              onBlur={blur}
            />
          </div>

          <div>
            <label style={labelStyle} htmlFor="t-company">
              Company <span style={{ color: "#b8b2aa" }}>(optional)</span>
            </label>
            <input
              id="t-company"
              type="text"
              placeholder="Your business name"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              style={inputStyle}
              onFocus={focus}
              onBlur={blur}
            />
          </div>

          <div>
            <label style={labelStyle} htmlFor="t-email">
              Email <span style={{ color: "#b8b2aa" }}>(optional, never published)</span>
            </label>
            <input
              id="t-email"
              type="email"
              placeholder="you@business.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              style={inputStyle}
              onFocus={focus}
              onBlur={blur}
            />
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <input
              id="t-consent"
              type="checkbox"
              required
              checked={form.consent}
              onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              style={{ marginTop: "2px", accentColor: "#fb923c", flexShrink: 0, cursor: "pointer" }}
            />
            <label
              htmlFor="t-consent"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "#4a4a4a",
                lineHeight: 1.5,
                cursor: "pointer",
              }}
            >
              I&apos;m happy for Oragon to publish this testimonial on its website.
            </label>
          </div>

          {status === "error" && (
            <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#dc2626", margin: 0 }}>
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#fff",
              background: "#fb923c",
              padding: "14px 22px",
              borderRadius: "999px",
              border: "none",
              cursor: status === "loading" ? "not-allowed" : "pointer",
              opacity: status === "loading" ? 0.7 : 1,
              alignSelf: "flex-start",
            }}
          >
            {status === "loading" ? "Sending..." : "Submit testimonial →"}
          </button>
        </form>
      )}
    </div>
  );
}

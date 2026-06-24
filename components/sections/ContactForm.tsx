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

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service: "Contact form" }),
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
    <div style={{ background: "#fff", border: "1px solid #e5e0db", borderRadius: "10px", padding: "clamp(22px,3vw,32px)", minHeight: "420px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      {status === "success" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
          <div style={{ width: "46px", height: "46px", borderRadius: "50%", background: "rgba(251,146,60,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fb923c" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", color: "#1a1a1a", margin: 0 }}>Message sent.</h3>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "15px", lineHeight: 1.6, color: "#4a4a4a", margin: 0 }}>
            Thanks for reaching out. We will get back to you within a day.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={labelStyle} htmlFor="c-name">Name</label>
            <input id="c-name" type="text" required placeholder="Your name" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
          </div>
          <div>
            <label style={labelStyle} htmlFor="c-email">Email</label>
            <input id="c-email" type="email" required placeholder="you@business.com" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} onFocus={focus} onBlur={blur} />
          </div>
          <div>
            <label style={labelStyle} htmlFor="c-message">Message</label>
            <textarea id="c-message" required rows={5} placeholder="How can we help?" value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: "vertical", minHeight: "120px" }} onFocus={focus} onBlur={blur} />
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
            {status === "loading" ? "Sending..." : "Send message →"}
          </button>
        </form>
      )}
    </div>
  );
}

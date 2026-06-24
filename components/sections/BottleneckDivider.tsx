// The signature device: many faint grey lines ("many manual steps") converge
// through one pulsing orange node, then leave as a single animated dashed
// orange flow line ("one clean flow"). Pure CSS animation, no JS needed.
export default function BottleneckDivider() {
  return (
    <section
      style={{
        padding: "0 6vw",
        background: "#fff",
        borderTop: "1px solid #f1eeeb",
        borderBottom: "1px solid #f1eeeb",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          padding: "18px 0",
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#9a958e",
            whiteSpace: "nowrap",
          }}
        >
          Many manual steps
        </div>

        <div style={{ flex: 1, position: "relative", height: "54px" }}>
          <svg
            viewBox="0 0 800 60"
            preserveAspectRatio="none"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
          >
            <path d="M0,8 C260,8 300,30 400,30" fill="none" stroke="#e5e0db" strokeWidth="1.4" />
            <path d="M0,20 C260,20 300,30 400,30" fill="none" stroke="#e5e0db" strokeWidth="1.4" />
            <path d="M0,30 L400,30" fill="none" stroke="#e5e0db" strokeWidth="1.4" />
            <path d="M0,40 C260,40 300,30 400,30" fill="none" stroke="#e5e0db" strokeWidth="1.4" />
            <path d="M0,52 C260,52 300,30 400,30" fill="none" stroke="#e5e0db" strokeWidth="1.4" />
            <path
              d="M400,30 L800,30"
              fill="none"
              stroke="#fb923c"
              strokeWidth="2.4"
              strokeDasharray="8 8"
              style={{ animation: "oFlow 1.2s linear infinite" }}
            />
          </svg>
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "26px",
              height: "26px",
              margin: "-13px 0 0 -13px",
              borderRadius: "50%",
              background: "#fff1e7",
              transformOrigin: "center",
              animation: "oRing 2.6s ease-out infinite",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "14px",
              height: "14px",
              margin: "-7px 0 0 -7px",
              borderRadius: "50%",
              background: "#fb923c",
              transformOrigin: "center",
              animation: "oPulse 2.6s ease-in-out infinite",
            }}
          />
        </div>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#fb923c",
            whiteSpace: "nowrap",
          }}
        >
          One clean flow
        </div>
      </div>
    </section>
  );
}

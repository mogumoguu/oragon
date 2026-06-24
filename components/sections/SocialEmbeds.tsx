"use client";

import { useEffect } from "react";

// Curated latest posts (TikTok). The official embed.js turns these blockquotes
// into players; if it fails to load, the blockquote stays as a link fallback.
const posts = [
  { url: "https://www.tiktok.com/@oragontechph/photo/7641485414284414215", id: "7641485414284414215" },
  { url: "https://www.tiktok.com/@migs.iso/video/7633014910963830024", id: "7633014910963830024" },
  { url: "https://www.tiktok.com/@migs.iso/video/7634482118185405714", id: "7634482118185405714" },
];

export default function SocialEmbeds() {
  useEffect(() => {
    const prev = document.getElementById("tiktok-embed-script");
    if (prev) prev.remove();
    const s = document.createElement("script");
    s.id = "tiktok-embed-script";
    s.src = "https://www.tiktok.com/embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px", justifyItems: "center" }}>
      {posts.map((p) => (
        <blockquote
          key={p.id}
          className="tiktok-embed"
          cite={p.url}
          data-video-id={p.id}
          style={{ maxWidth: "100%", minWidth: "280px", margin: 0 }}
        >
          <section>
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              View on TikTok
            </a>
          </section>
        </blockquote>
      ))}
    </div>
  );
}

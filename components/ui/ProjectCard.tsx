"use client";

import { useState } from "react";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  const [hovered, setHovered] = useState(false);

  const isPlaceholder = project.title === "Coming Soon";

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--bg-surface)",
        border: `1px solid ${hovered ? "var(--accent)" : "var(--border)"}`,
        borderRadius: "6px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 32px var(--accent-glow), 0 0 0 1px var(--accent-glow)"
          : "0 2px 8px rgba(0,0,0,0.06)",
        opacity: isPlaceholder ? 0.4 : 1,
      }}
    >
      {/* Image area */}
      <div
        style={{
          height: "160px",
          background: isPlaceholder
            ? "var(--bg-elevated)"
            : "var(--bg-elevated)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ textAlign: "center", opacity: 0.3 }}>
            {/* Abstract grid pattern */}
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <rect x="5" y="5" width="22" height="22" rx="2" stroke="var(--accent)" strokeWidth="1" />
              <rect x="33" y="5" width="22" height="22" rx="2" stroke="var(--accent)" strokeWidth="1" />
              <rect x="5" y="33" width="22" height="22" rx="2" stroke="var(--accent)" strokeWidth="1" />
              <rect x="33" y="33" width="22" height="22" rx="2" stroke="var(--accent)" strokeWidth="1" />
            </svg>
          </div>
        )}

        {/* Status badge */}
        {"status" in project && (
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "12px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.2rem 0.55rem",
              borderRadius: "3px",
              background: (project as { status: string }).status === "live"
                ? "rgba(22, 163, 74, 0.12)"
                : "rgba(251, 146, 60, 0.10)",
              color: (project as { status: string }).status === "live"
                ? "#166534"
                : "var(--accent-text)",
              border: (project as { status: string }).status === "live"
                ? "1px solid rgba(22, 163, 74, 0.25)"
                : "1px solid var(--accent-glow-strong)",
            }}
          >
            {(project as { status: string }).status === "live" ? "Live" : "In Progress"}
          </span>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          flex: 1,
        }}
      >
        {/* Project number */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            margin: 0,
          }}
        >
          Project — {String(index + 1).padStart(2, "0")}
        </p>

        {/* Title */}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1rem",
            color: "var(--text-primary)",
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "0.82rem",
            color: "var(--text-secondary)",
            margin: 0,
            lineHeight: 1.55,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        {!isPlaceholder && (
          <div style={{ marginTop: "0.4rem" }}>
            <a
              href={project.liveUrl ?? project.repoUrl ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: "0.7rem" }}
            >
              {project.liveUrl ? "Launch App" : "View Project"}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

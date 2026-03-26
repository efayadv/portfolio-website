import { useState } from "react";
import { COLORS, PROJECTS } from "../data/constants";
import { SectionHeader, Btn } from "../components/UI";

export default function Projects({ setBig }) {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        padding: "100px 2.5rem 60px",
        background: COLORS.bg2,
        borderTop: `1px solid ${COLORS.border}`,
      }}
    >
      <SectionHeader label="// 01 — work" title="Projects" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
        gap: 2,
      }}>
        {PROJECTS.map((proj) => (
          <ProjectCard key={proj.num} proj={proj} setBig={setBig} />
        ))}

        {/* GitHub CTA card */}
        <div style={{
          background: COLORS.bg,
          border: `1.5px dashed ${COLORS.border}`,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          padding: "2rem", textAlign: "center", minHeight: 200,
        }}>
          <div style={{ fontFamily: "'VT323',monospace", fontSize: 48, color: COLORS.greenDim, marginBottom: 8 }}>+</div>
          <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 12, color: COLORS.grey }}>
            More projects on GitHub
          </p>
          <Btn href="https://github.com/efayadv" setBig={setBig} style={{ marginTop: 16, fontSize: 11 }}>
            github.com/efayadv
          </Btn>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ proj, setBig }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => { setHov(true); setBig(true); }}
      onMouseLeave={() => { setHov(false); setBig(false); }}
      style={{
        background: COLORS.bg,
        border: `1.5px solid ${hov ? "#333" : COLORS.border}`,
        padding: "2rem",
        position: "relative", overflow: "hidden",
        transition: "border-color 0.2s",
        cursor: "none",
      }}
    >
      {/* Hover accent bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: COLORS.green,
        transform: hov ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.3s ease",
      }} />

      <div style={{ fontFamily: "'VT323',monospace", fontSize: 48, color: COLORS.greenDim, lineHeight: 1, marginBottom: 8 }}>
        {proj.num}
      </div>
      <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 15, fontWeight: 700, color: COLORS.white, marginBottom: 10, letterSpacing: 1 }}>
        {proj.name}
      </div>
      <p style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 13, color: COLORS.grey, lineHeight: 1.7, marginBottom: 20 }}>
        {proj.desc}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
        {proj.tags.map((tag) => (
          <span key={tag} style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 10, padding: "3px 8px",
            border: `1px solid #333`,
            color: COLORS.amber, letterSpacing: 1, textTransform: "uppercase",
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={proj.repo}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily: "'Share Tech Mono',monospace", fontSize: 12,
          color: COLORS.green, textDecoration: "none",
          letterSpacing: 1, display: "inline-flex", alignItems: "center", gap: 6,
          transition: "gap 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
        onMouseLeave={(e) => (e.currentTarget.style.gap = "6px")}
      >
        View on GitHub <span>→</span>
      </a>
    </div>
  );
}

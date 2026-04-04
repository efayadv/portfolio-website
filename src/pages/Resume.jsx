import { useState } from "react";
import { COLORS } from "../data/constants";
import { SectionHeader } from "../components/UI";

// 👇 Drop your resume PDF into the /public folder and update this path
const RESUME_PDF = "/Resume_Fayad_Emilio.pdf";

export default function Resume({ setBig }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <section
      id="resume"
      style={{
        minHeight: "100vh",
        padding: "100px 2.5rem 60px",
        background: COLORS.bg,
        borderTop: `1px solid ${COLORS.border}`,
      }}
    >
      <div style={{
        maxWidth: 900,
        margin: "0 auto",
      }}>
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
          marginBottom: 32,
        }}>
          <SectionHeader label="// 02 — background" title="Résumé" />

          {/* Download button */}
          <a
            href={RESUME_PDF}
            download="Emilio_Fayad_Resume.pdf"
            onMouseEnter={() => setBig(true)}
            onMouseLeave={() => setBig(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 20px",
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              border: `1px solid ${COLORS.green}`,
              color: COLORS.green,
              textDecoration: "none",
              cursor: "none",
              marginBottom: 48,
              transition: "background 0.2s, color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseOver={e => {
              e.currentTarget.style.background = COLORS.green;
              e.currentTarget.style.color = COLORS.bg;
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = COLORS.green;
            }}
          >
            ↓ download résumé
          </a>
        </div>

        {/* PDF viewer frame */}
        <div style={{
          position: "relative",
          border: `1px solid ${COLORS.border}`,
          background: COLORS.bg2,
        }}>
          {/* Terminal title bar */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 16px",
            borderBottom: `1px solid ${COLORS.border}`,
            background: "#0d0d0d",
          }}>
            {["#ff5f56", "#ffbd2e", "#27c93f"].map(c => (
              <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
            ))}
            <span style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 10,
              color: COLORS.grey,
              margin: "0 auto",
              letterSpacing: 1,
            }}>
              emilio_fayad_resume.pdf
            </span>
          </div>

          {/* Loading state */}
          {!loaded && (
            <div style={{
              position: "absolute",
              inset: 0,
              top: 37,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 13,
              color: COLORS.grey,
              letterSpacing: 2,
              zIndex: 1,
            }}>
              <span style={{ color: COLORS.green }}>$</span>&nbsp;loading resume.pdf
              <span style={{ animation: "blink 1s step-end infinite" }}>_</span>
            </div>
          )}

          <iframe
            src={`${RESUME_PDF}#toolbar=0&navpanes=0&scrollbar=0`}
            title="Emilio Fayad Resume"
            onLoad={() => setLoaded(true)}
            style={{
              display: "block",
              width: "100%",
              height: "80vh",
              border: "none",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        </div>

        {/* Fallback message */}
        <p style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 11,
          color: COLORS.grey,
          marginTop: 12,
          textAlign: "center",
          letterSpacing: 1,
        }}>
          Can't see the preview?{" "}
          <a
            href={RESUME_PDF}
            download
            style={{ color: COLORS.green, textDecoration: "none" }}
          >
            download it directly
          </a>
        </p>
      </div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </section>
  );
}

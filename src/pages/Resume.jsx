import { COLORS, SKILLS } from "../data/constants";
import { SectionHeader, SkillBar, Btn } from "../components/UI";

export default function Resume({ setBig }) {
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
      <SectionHeader label="// 02 — background" title="Résumé" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.6fr",
        gap: "3rem",
        maxWidth: 900,
      }}>
        {/* ── Left column ── */}
        <div>
          <ResumeBlock title="Skills">
            {SKILLS.map((s, i) => (
              <SkillBar key={s.label} label={s.label} pct={s.pct} i={i} />
            ))}
          </ResumeBlock>

          <ResumeBlock title="Education">
            <ResumeItem
              title="B.S. Computer Science"
              sub="Your University"
              date="20XX — 20XX"
            />
          </ResumeBlock>

          <Btn
            href="#"
            onClick={(e) => { e.preventDefault(); alert("Replace with a link to your resume PDF."); }}
            setBig={setBig}
          >
            ↓ download résumé
          </Btn>
        </div>

        {/* ── Right column ── */}
        <div>
          <ResumeBlock title="Experience">
            <ResumeItem
              title="Software Developer"
              sub="Company Name · Full-time"
              date="Month 20XX — Present"
              desc="Describe your responsibilities and achievements here. What did you build? What did you ship? What was the impact?"
            />
            <ResumeItem
              title="Junior Developer / Intern"
              sub="Company Name · Internship"
              date="Month 20XX — Month 20XX"
              desc="A brief description of what you worked on during this role. Keep it results-focused."
            />
          </ResumeBlock>

          <ResumeBlock title="Certifications &amp; Extras">
            <ResumeItem title="Your Certification" sub="Issuing Body · 20XX" />
            <ResumeItem title="Open Source Contribution" sub="Brief note" />
          </ResumeBlock>
        </div>
      </div>
    </section>
  );
}

/* ── Sub-components ── */

function ResumeBlock({ title, children }) {
  return (
    <div style={{ marginBottom: 36 }}>
      <div style={{
        fontFamily: "'Share Tech Mono',monospace",
        fontSize: 11, color: COLORS.green,
        letterSpacing: 3, textTransform: "uppercase",
        marginBottom: 18,
        display: "flex", alignItems: "center", gap: 12,
      }}>
        {title}
        <div style={{ flex: 1, height: 1, background: COLORS.border }} />
      </div>
      {children}
    </div>
  );
}

function ResumeItem({ title, sub, date, desc }) {
  return (
    <div style={{ marginBottom: 20, paddingLeft: 14, borderLeft: `1px solid #2a2a2a` }}>
      <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 13, color: COLORS.white, marginBottom: 3 }}>
        {title}
      </div>
      {sub && (
        <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 12, color: COLORS.amber, marginBottom: 3 }}>
          {sub}
        </div>
      )}
      {date && (
        <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 11, color: COLORS.grey, marginBottom: 6 }}>
          {date}
        </div>
      )}
      {desc && (
        <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 12, color: "#666", lineHeight: 1.7 }}>
          {desc}
        </div>
      )}
    </div>
  );
}

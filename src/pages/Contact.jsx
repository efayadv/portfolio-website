import { useState } from "react";
import { COLORS, CONTACT_LINKS } from "../data/constants";
import { SectionHeader } from "../components/UI";

export default function Contact({ setBig }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  const update = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        padding: "100px 2.5rem 60px",
        background: COLORS.bg2,
        borderTop: `1px solid ${COLORS.border}`,
      }}
    >
      <SectionHeader label="// 03 — reach out" title="Contact" />

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.2fr",
        gap: "4rem",
        maxWidth: 860,
        alignItems: "start",
      }}>
        {/* ── Left: info ── */}
        <div>
          <p style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 13, color: COLORS.grey, lineHeight: 1.9, marginBottom: 28,
          }}>
            Got a project in mind, a role you think I'd be great for, or just want
            to connect? I'm always open to interesting conversations.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {CONTACT_LINKS.map((link) => (
              <ContactLink key={link.href} {...link} setBig={setBig} />
            ))}
          </div>
        </div>

        {/* ── Right: terminal form ── */}
        <TerminalForm
          form={form}
          update={update}
          onSubmit={handleSubmit}
          sent={sent}
          setBig={setBig}
        />
      </div>
    </section>
  );
}

/* ── ContactLink ── */
function ContactLink({ icon, label, href, setBig }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => { setHov(true); setBig(true); }}
      onMouseLeave={() => { setHov(false); setBig(false); }}
      style={{
        display: "flex", alignItems: "center", gap: 14,
        padding: "12px 14px",
        border: `1px solid ${hov ? COLORS.green : COLORS.border}`,
        textDecoration: "none",
        color: hov ? COLORS.green : COLORS.white,
        fontFamily: "'Share Tech Mono',monospace", fontSize: 13,
        cursor: "none", transition: "all 0.2s",
      }}
    >
      <div style={{
        width: 28, height: 28,
        display: "flex", alignItems: "center", justifyContent: "center",
        border: "1px solid currentColor", fontSize: 12, flexShrink: 0,
      }}>
        {icon}
      </div>
      {label}
    </a>
  );
}

/* ── TerminalForm ── */
function TerminalForm({ form, update, onSubmit, sent, setBig }) {
  const inputStyle = {
    width: "100%", background: "transparent",
    border: "none", borderBottom: `1px solid #2a2a2a`,
    color: COLORS.white,
    fontFamily: "'Share Tech Mono',monospace", fontSize: 14,
    padding: "6px 0", outline: "none",
  };

  const fields = [
    { key: "name",  label: "$ name",  type: "text",  placeholder: "your name" },
    { key: "email", label: "$ email", type: "email", placeholder: "your@email.com" },
  ];

  return (
    <div style={{ background: "#0d0d0d", border: `1px solid ${COLORS.border}`, padding: "1.5rem" }}>
      {/* Title bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        marginBottom: 18, paddingBottom: 14,
        borderBottom: `1px solid ${COLORS.border}`,
      }}>
        {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
          <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
        ))}
        <div style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 10, color: COLORS.grey,
          margin: "0 auto", letterSpacing: 1,
        }}>
          send_message.sh
        </div>
      </div>

      <form onSubmit={onSubmit}>
        {fields.map(({ key, label, type, placeholder }) => (
          <div key={key} style={{ marginBottom: 16 }}>
            <label style={{
              fontFamily: "'Share Tech Mono',monospace",
              fontSize: 11, color: COLORS.green,
              letterSpacing: 1, display: "block", marginBottom: 5,
            }}>
              {label}
            </label>
            <input
              type={type}
              placeholder={placeholder}
              value={form[key]}
              onChange={update(key)}
              required
              style={inputStyle}
            />
          </div>
        ))}

        <div style={{ marginBottom: 16 }}>
          <label style={{
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 11, color: COLORS.green,
            letterSpacing: 1, display: "block", marginBottom: 5,
          }}>
            $ message
          </label>
          <textarea
            placeholder="type here..."
            value={form.message}
            onChange={update("message")}
            required
            style={{ ...inputStyle, resize: "none", height: 90 }}
          />
        </div>

        <button
          type="submit"
          onMouseEnter={() => setBig(true)}
          onMouseLeave={() => setBig(false)}
          style={{
            width: "100%", padding: "10px",
            background: COLORS.green, color: COLORS.bg,
            border: "none", cursor: "none",
            fontFamily: "'Share Tech Mono',monospace",
            fontSize: 12, letterSpacing: 2, textTransform: "uppercase",
            transition: "opacity 0.2s",
          }}
        >
          {sent ? "message sent ✓" : "execute →"}
        </button>
      </form>
    </div>
  );
}

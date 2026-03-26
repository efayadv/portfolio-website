import { COLORS } from "../data/constants";

export default function Footer() {
  return (
    <footer style={{
      padding: "1.5rem 2.5rem",
      borderTop: `1px solid ${COLORS.border}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "'Share Tech Mono',monospace",
      fontSize: 11,
      color: COLORS.grey,
      background: COLORS.bg,
    }}>
      <span>© 2026 Emilio Fayad</span>
      <span>
        Built with <span style={{ color: COLORS.green }}>⬡</span> and caffeine
      </span>
      <a
        href="https://github.com/efayadv"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: COLORS.green, textDecoration: "none" }}
      >
        github.com/efayadv
      </a>
    </footer>
  );
}

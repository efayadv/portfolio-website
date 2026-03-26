import { COLORS } from "../data/constants";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=VT323&family=Space+Mono:wght@400;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    background: ${COLORS.bg};
    color: ${COLORS.white};
    cursor: none;
    overflow-x: hidden;
  }

  /* CRT scanline overlay */
  body::before {
    content: '';
    position: fixed; inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent, transparent 2px,
      rgba(0,0,0,0.13) 2px, rgba(0,0,0,0.13) 4px
    );
    pointer-events: none;
    z-index: 1000;
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
  ::-webkit-scrollbar-thumb { background: #2a2a2a; }
  ::-webkit-scrollbar-thumb:hover { background: ${COLORS.green}; }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  input::placeholder, textarea::placeholder { color: #333; }
  input, textarea { caret-color: ${COLORS.green}; }
  a, button { cursor: none; }
`;

export default globalStyles;

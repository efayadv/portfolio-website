import { useState } from "react";
import { COLORS } from "../data/constants";

const NAV_LINKS = ["home", "projects", "resume", "contact"];

export default function Nav({ active, setBig }) {
  const scroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 2.5rem", height: 54,
      background: "rgba(10,10,10,0.92)",
      borderBottom: `1px solid ${COLORS.border}`,
      backdropFilter: "blur(6px)",
    }}>
      <button
        onClick={() => scroll("home")}
        onMouseEnter={() => setBig(true)}
        onMouseLeave={() => setBig(false)}
        style={{
          background: "none", border: "none", cursor: "none",
          fontFamily: "'VT323',monospace", fontSize: 24,
          color: COLORS.green, letterSpacing: 2,
        }}
      >
        EF<span style={{ color: COLORS.amber }}>_</span>
      </button>

      <ul style={{ display: "flex", gap: 4, listStyle: "none" }}>
        {NAV_LINKS.map((id) => (
          <NavItem
            key={id}
            id={id}
            isActive={active === id}
            onClick={() => scroll(id)}
            setBig={setBig}
          />
        ))}
      </ul>
    </nav>
  );
}

function NavItem({ id, isActive, onClick, setBig }) {
  return (
    <li>
      <button
        onClick={onClick}
        onMouseEnter={() => setBig(true)}
        onMouseLeave={() => setBig(false)}
        style={{
          background: "none",
          border: `1px solid ${isActive ? COLORS.green : "transparent"}`,
          color: isActive ? COLORS.green : COLORS.grey,
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 11, letterSpacing: "1.5px",
          textTransform: "uppercase",
          padding: "5px 14px", cursor: "none",
          transition: "color 0.2s, border-color 0.2s",
        }}
      >
        {id}
      </button>
    </li>
  );
}

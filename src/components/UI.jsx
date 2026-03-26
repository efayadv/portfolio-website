import { useState, useEffect, useRef } from "react";
import { COLORS } from "../data/constants";

/* ── Typewriter ── */
export function Typewriter({ text, delay = 0, speed = 55 }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(iv);
      }, speed);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(t);
  }, [text, delay, speed]);
  return <span>{displayed}</span>;
}

/* ── SkillBar ── */
export function SkillBar({ label, pct, i }) {
  const [filled, setFilled] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setFilled(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Share Tech Mono',monospace", fontSize: 13, color: COLORS.white, marginBottom: 5 }}>
        <span>{label}</span>
        <span style={{ color: COLORS.green }}>{pct}%</span>
      </div>
      <div style={{ height: 3, background: "#1a1a1a", overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: filled ? `${pct}%` : "0%",
          background: `linear-gradient(to right, ${COLORS.green}, ${COLORS.amber})`,
          transition: `width 1s ease ${i * 0.1}s`,
        }} />
      </div>
    </div>
  );
}

/* ── SectionHeader ── */
export function SectionHeader({ label, title }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ fontFamily: "'Share Tech Mono',monospace", fontSize: 11, color: COLORS.green, letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
        {label}
      </div>
      <h2 style={{ fontFamily: "'VT323',monospace", fontSize: "clamp(2.5rem,5vw,4rem)", color: COLORS.white, lineHeight: 1 }}>
        {title}
      </h2>
      <div style={{ marginTop: 12, height: 1, background: `linear-gradient(to right, ${COLORS.green}, transparent)`, maxWidth: 300 }} />
    </div>
  );
}

/* ── Btn (filled) ── */
export function Btn({ children, onClick, href, setBig }) {
  const [hov, setHov] = useState(false);
  const style = {
    fontFamily: "'Share Tech Mono',monospace", fontSize: 11, letterSpacing: 2,
    textTransform: "uppercase", padding: "10px 24px", cursor: "none",
    border: `1px solid ${COLORS.green}`,
    background: hov ? COLORS.green : "transparent",
    color: hov ? COLORS.bg : COLORS.green,
    boxShadow: hov ? "0 0 20px rgba(0,255,136,0.4)" : "none",
    transition: "all 0.2s", textDecoration: "none", display: "inline-block",
  };
  const events = {
    onMouseEnter: () => { setHov(true); setBig?.(true); },
    onMouseLeave: () => { setHov(false); setBig?.(false); },
  };
  return href
    ? <a href={href} target="_blank" rel="noopener noreferrer" style={style} {...events}>{children}</a>
    : <button onClick={onClick} style={style} {...events}>{children}</button>;
}

/* ── BtnGhost ── */
export function BtnGhost({ children, href, onClick, setBig }) {
  const [hov, setHov] = useState(false);
  const style = {
    fontFamily: "'Share Tech Mono',monospace", fontSize: 11, letterSpacing: 2,
    textTransform: "uppercase", padding: "10px 24px", cursor: "none",
    border: `1px solid ${hov ? COLORS.white : COLORS.grey}`,
    color: hov ? COLORS.white : COLORS.grey,
    background: "transparent", textDecoration: "none",
    display: "inline-block", transition: "all 0.2s",
  };
  const events = {
    onMouseEnter: () => { setHov(true); setBig?.(true); },
    onMouseLeave: () => { setHov(false); setBig?.(false); },
  };
  return href
    ? <a href={href} target="_blank" rel="noopener noreferrer" style={style} {...events}>{children}</a>
    : <button onClick={onClick} style={style} {...events}>{children}</button>;
}

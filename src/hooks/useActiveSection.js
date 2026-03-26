import { useState, useEffect } from "react";

export function useActiveSection(sectionIds = []) {
  const [active, setActive] = useState(sectionIds[0] || "");

  useEffect(() => {
    const handler = () => {
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds]);

  return active;
}

export function useCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [big, setBig] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return { pos, big, setBig };
}

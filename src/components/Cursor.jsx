import { COLORS } from "../data/constants";

export default function Cursor({ pos, big }) {
  return (
    <>
      <div style={{
        position: "fixed",
        left: pos.x, top: pos.y,
        pointerEvents: "none",
        zIndex: 9999,
        transform: `translate(-50%, -50%) scale(${big ? 1.6 : 1})`,
        width: 18, height: 18,
        border: `2px solid ${COLORS.green}`,
        transition: "transform 0.12s ease",
        mixBlendMode: "screen",
      }} />
      <div style={{
        position: "fixed",
        left: pos.x, top: pos.y,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        width: 4, height: 4,
        borderRadius: "50%",
        background: COLORS.green,
      }} />
    </>
  );
}

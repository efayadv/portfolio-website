import { COLORS } from "../data/constants";
import { Typewriter, Btn, BtnGhost } from "../components/UI";

export default function Hero({ setBig }) {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial background glow */}
      <div style={{
        position: "absolute", inset: 0,
        background: `
          radial-gradient(ellipse 70% 60% at 60% 40%, rgba(0,255,136,0.06), transparent 70%),
          radial-gradient(ellipse 40% 50% at 20% 80%, rgba(255,183,0,0.04), transparent 60%),
          ${COLORS.bg}
        `,
      }} />

      {/* Grid lines */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,255,136,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,136,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
      }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 860, margin: "0 auto", padding: "0 2.5rem" }}>
        {/* Terminal prompt */}
        <p style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 13, letterSpacing: 2, marginBottom: 16,
          animation: "fadeUp 0.6s ease forwards",
          opacity: 0, animationDelay: "0.2s",
        }}>
          <span style={{ color: COLORS.green }}>~/portfolio</span>
          <span style={{ color: COLORS.grey }}> $</span>
          <span style={{ color: COLORS.white }}> whoami</span>
        </p>

        {/* Name */}
        <h1 style={{
          fontFamily: "'VT323',monospace",
          fontSize: "clamp(3.5rem, 10vw, 8rem)",
          lineHeight: 0.95, letterSpacing: -1,
          color: COLORS.white,
          animation: "fadeUp 0.7s ease forwards",
          opacity: 0, animationDelay: "0.4s",
        }}>
          Emilio<br />
          <span style={{ color: COLORS.green, textShadow: "0 0 30px rgba(0,255,136,0.5)" }}>
            <Typewriter text="Fayad" delay={900} speed={80} />
          </span>
        </h1>

        {/* Role */}
        <p style={{
          fontFamily: "'Share Tech Mono',monospace",
          marginTop: 18, fontSize: 14,
          color: COLORS.amber, letterSpacing: 3, textTransform: "uppercase",
          animation: "fadeUp 0.7s ease forwards",
          opacity: 0, animationDelay: "0.6s",
        }}>
          Software &amp; Web Developer
        </p>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Share Tech Mono',monospace",
          marginTop: 24, fontSize: 13, color: COLORS.grey,
          maxWidth: 460, lineHeight: 1.8,
          borderLeft: `2px solid ${COLORS.green}`, paddingLeft: 16,
          animation: "fadeUp 0.7s ease forwards",
          opacity: 0, animationDelay: "0.8s",
        }}>
          Avid risk taker, both in the real and digital world.<br />
          Currently very interested in applied ML.
        </p>

        {/* CTAs */}
        <div style={{
          marginTop: 36, display: "flex", gap: 14, flexWrap: "wrap",
          animation: "fadeUp 0.7s ease forwards",
          opacity: 0, animationDelay: "1s",
        }}>
          <Btn onClick={() => scrollTo("projects")} setBig={setBig}>
            view projects
          </Btn>
          <BtnGhost href="https://github.com/efayadv" setBig={setBig}>
            github ↗
          </BtnGhost>
        </div>
      </div>
    </section>
  );
}

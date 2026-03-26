import globalStyles from "./styles/global";
import { useActiveSection, useCursor } from "./hooks/useActiveSection";

import Cursor   from "./components/Cursor";
import Nav      from "./components/Nav";
import Footer   from "./components/Footer";

import Hero     from "./pages/Hero";
import Projects from "./pages/Projects";
import Resume   from "./pages/Resume";
import Contact  from "./pages/Contact";

const SECTION_IDS = ["home", "projects", "resume", "contact"];

export default function App() {
  const active       = useActiveSection(SECTION_IDS);
  const { pos, big, setBig } = useCursor();

  return (
    <>
      <style>{globalStyles}</style>

      <Cursor pos={pos} big={big} />
      <Nav active={active} setBig={setBig} />

      <main>
        <Hero     setBig={setBig} />
        <Projects setBig={setBig} />
        <Resume   setBig={setBig} />
        <Contact  setBig={setBig} />
      </main>

      <Footer />
    </>
  );
}

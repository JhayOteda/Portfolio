import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "100vh" }}>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </main>

      {/* Premium Footer */}
      <footer
        style={{
          padding: "2.5rem 0",
          textAlign: "center",
          borderTop: "1px solid var(--card-border)",
          background: "var(--glass-bg)",
          fontSize: "0.9rem",
          color: "var(--text-muted)",
        }}
      >
        <div className="container">
          <p>© {new Date().getFullYear()} Jhay Oteda. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

import Hero         from "@/components/sections/Hero";
import Stats        from "@/components/sections/Stats";
import Services     from "@/components/sections/Services";
import Process      from "@/components/sections/Process";
import About        from "@/components/sections/About";
import Projects     from "@/components/sections/Projects";
import CTA          from "@/components/sections/CTA";
import Contact      from "@/components/sections/Contact";

export default function Home() {
  return (
    <main style={{ paddingTop: "4rem", padding: "4rem 0 2rem" }}>
      <div
        style={{
          background: "rgba(7, 14, 26, 0.15)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          borderRadius: 0,
          border: "none",
          boxShadow: "none",
          overflow: "hidden",
        }}
        className="content-card"
      >
        <Hero />
        <Stats />
        <Services />
        <Process />
        <About />
        <Projects />
        <CTA />
        <Contact />
      </div>
      <style>{`
        @media (max-width: 640px) {
          main {
            padding: 4rem 0 1rem !important;
          }
        }
      `}</style>
    </main>
  );
}

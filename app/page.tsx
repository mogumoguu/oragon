import Hero     from "@/components/sections/Hero";
import Stats    from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Process  from "@/components/sections/Process";
import CTA      from "@/components/sections/CTA";
import Contact  from "@/components/sections/Contact";

export default function Home() {
  return (
    <main style={{ paddingTop: "4rem", padding: "4rem 0 2rem" }}>
      <Hero />
      <Stats />
      <Services />
      <Process />
      <CTA />
      <Contact />
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

import Hero            from "@/components/sections/Hero";
import Proof           from "@/components/sections/Proof";
import Process         from "@/components/sections/Process";
import Differentiation from "@/components/sections/Differentiation";
import Services        from "@/components/sections/Services";
import BookingSection  from "@/components/sections/BookingSection";
import FounderNote     from "@/components/sections/FounderNote";

export default function Home() {
  return (
    <main style={{ paddingTop: "4rem", padding: "4rem 0 2rem" }}>
      <Hero />
      <Proof />
      <Process />
      <Differentiation />
      <Services />
      <BookingSection />
      <FounderNote />
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

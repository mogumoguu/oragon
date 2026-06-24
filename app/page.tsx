import Hero              from "@/components/sections/Hero";
import Oos               from "@/components/sections/Oos";
import Why               from "@/components/sections/Why";
import Services          from "@/components/sections/Services";
import Work              from "@/components/sections/Work";
import FounderNote       from "@/components/sections/FounderNote";
import ContactCTA        from "@/components/sections/ContactCTA";
import Footer            from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Oos />
      <Why />
      <Services />
      <Work />
      <FounderNote />
      <ContactCTA />
      <Footer />
    </main>
  );
}

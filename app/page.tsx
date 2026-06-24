import Hero              from "@/components/sections/Hero";
import BottleneckDivider from "@/components/sections/BottleneckDivider";
import Oos               from "@/components/sections/Oos";
import Why               from "@/components/sections/Why";
import Services          from "@/components/sections/Services";
import Work              from "@/components/sections/Work";
import BookingSection    from "@/components/sections/BookingSection";
import FounderNote       from "@/components/sections/FounderNote";
import Footer            from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <BottleneckDivider />
      <Oos />
      <Why />
      <Services />
      <Work />
      <BookingSection />
      <FounderNote />
      <Footer />
    </main>
  );
}

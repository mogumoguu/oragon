import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Contact — Oragon",
  description: "Get in touch with Oragon. Tell us about your project and we'll reach out to schedule a call.",
};

export default function ContactPage() {
  return (
    <main style={{ paddingTop: "4rem" }}>
      <Contact />
    </main>
  );
}

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote: "Orena completely transformed how our team handles data entry. What used to take us hours every week is now fully automated. The ROI was immediate.",
    name: "Alex Rivera",
    title: "Operations Manager",
    company: "Brightline Co.",
  },
  {
    id: "testimonial-2",
    quote: "Miguel built our client portal from scratch in record time. The quality was exceptional — clean code, fast performance, and exactly what we asked for.",
    name: "Sarah Chen",
    title: "Founder & CEO",
    company: "Vantage Studio",
  },
  {
    id: "testimonial-3",
    quote: "We needed an AI integration that actually worked in our workflow, not just a demo. Orena delivered a real solution that our whole team uses every day.",
    name: "James Okoro",
    title: "Head of Product",
    company: "Pulseware",
  },
];

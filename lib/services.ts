export interface Service {
  id: string;
  title: string;
  description: string;
  icon: "web" | "ai" | "automation" | "consulting";
}

// [REPLACE: Update with your actual services]
export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern frameworks. Fast, accessible, and designed to convert.",
    icon: "web",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Embed AI capabilities directly into your product or workflow — from chatbots to document processing and beyond.",
    icon: "ai",
  },
  {
    id: "automation",
    title: "Process Automation",
    description:
      "Eliminate repetitive manual work with smart automations connecting your tools, APIs, and data pipelines.",
    icon: "automation",
  },
  {
    id: "consulting",
    title: "Tech Consulting",
    description:
      "Strategic guidance on technology decisions, AI adoption, and building systems that scale with your business.",
    icon: "consulting",
  },
];

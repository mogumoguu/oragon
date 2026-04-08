export interface Service {
  id: string;
  title: string;
  description: string;
  icon: "web" | "ai" | "automation" | "consulting";
}

export const services: Service[] = [
  {
    id: "workflow-diagnosis",
    title: "Workflow Diagnosis",
    description:
      "We map your current processes, find where time and money are leaking, and deliver a clear picture of what needs to change — before we touch a single line of code.",
    icon: "web",
  },
  {
    id: "ai-automation",
    title: "AI & Automation Build",
    description:
      "We build the systems that do the work — AI-powered workflows, automated pipelines, and smart tools that free your team from repetitive tasks.",
    icon: "ai",
  },
  {
    id: "systems-integration",
    title: "Systems & Integration",
    description:
      "We connect your existing tools, apps, and data sources so everything works together seamlessly — no more manual transfers or information silos.",
    icon: "automation",
  },
  {
    id: "consulting",
    title: "Strategic Tech Consulting",
    description:
      "Not sure where to start? We help you cut through the noise, prioritize the right technology decisions, and build a roadmap that makes sense for your business and your people.",
    icon: "consulting",
  },
];

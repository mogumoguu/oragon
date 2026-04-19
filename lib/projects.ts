export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  status: "live" | "in-progress";
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "smart-stock",
    title: "Smart Stock",
    description:
      "Full-stack inventory and POS management system built for Filipino small businesses. Features real-time stock tracking, sales reporting, AI-powered restock forecasting, and a multi-tenant dashboard. Live with real users.",
    tags: ["Next.js", "Supabase", "AI Forecasting", "POS", "Dashboard"],
    status: "live",
  },
  {
    id: "autoserve",
    title: "AutoServe",
    description:
      "Car maintenance booking platform that lets customers schedule appointments online while shop owners manage everything through a protected admin dashboard — status tracking, filtering, and automated email confirmations.",
    tags: ["Next.js", "Supabase", "Automation", "Full-Stack", "Resend"],
    status: "in-progress",
  },
];

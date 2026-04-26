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
    image: "/smartstock.png",
    liveUrl: "https://smartstockapp.online",
  },
];

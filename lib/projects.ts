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
  {
    id: "school-app",
    title: "School App",
    description:
      "Multi-tenant school management system for K-12 schools. Admin posts announcements, manages users, schedules calendar events. Faculty enters grades by class, subject, and quarter, or bulk-uploads .xlsx. Parents see their kids' grades and subscribe to the school calendar via webcal. Magic-link auth. Demo login — admin@schoolapp.test / letmein123",
    tags: ["Next.js", "Supabase", "Multi-tenant", "Magic-link auth", "ICS"],
    status: "live",
    image: "/clients/schools-app-feed.png",
    liveUrl: "https://oragon-schools-app.vercel.app/school-app/admin/login",
  },
  {
    id: "dormhunter",
    title: "Dormhunter PH",
    description:
      "Search-first dorm finder for Big 4 PH college students (DLSU, UP Diliman, Ateneo, UST). Hybrid listings — buildings with nested unit types, photos, walking distance from each campus. Students unlock landlord contact info with a one-time ₱150 hunt pass (30 days). Admin scouts listings; landlords claim and take over. Shipped W1 in a single session.",
    tags: ["Next.js", "Supabase", "Haversine", "PayMongo", "Marketplace"],
    status: "live",
    image: "/clients/dormhunter-search.png",
    liveUrl: "https://dormhunter.vercel.app",
  },
];

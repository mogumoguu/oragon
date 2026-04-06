export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "ai-reminder-app",
    title: "AI-Powered Reminder System",
    description: "Full-stack automated reminder platform with a web dashboard for managing tasks, AI-generated personalized messages, and automated delivery via SMS and WhatsApp. Deployed to real users, gathered feedback, and iterated on the UX based on their input.",
    tags: ["AI", "Automation", "Twilio", "Dashboard", "Claude API"],
  },
  {
    id: "coming-soon-1",
    title: "Coming Soon",
    description: "New project in progress.",
    tags: ["AI", "Web"],
  },
  {
    id: "placeholder-1",
    title: "Coming Soon",
    description: "New project in progress.",
    tags: ["AI", "Web"],
  },
];

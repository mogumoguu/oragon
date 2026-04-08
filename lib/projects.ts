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
    id: "autoserve",
    title: "AutoServe",
    description: "Full-stack car maintenance booking platform. Customers book appointments online; admins manage everything through a protected dashboard with status tracking, filtering, and automated email confirmations via Resend.",
    tags: ["Next.js", "Supabase", "Automation", "Full-Stack", "Email"],
  },
];

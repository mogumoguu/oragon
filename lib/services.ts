export interface Service {
  id: string;
  title: string;
  description: string;
  icon: "pos" | "bookings" | "websites" | "custom";
}

export const services: Service[] = [
  {
    id: "pos-sales",
    title: "POS + Sales Systems",
    description:
      "Real-time inventory, smart stock alerts, AI sales forecasting.",
    icon: "pos",
  },
  {
    id: "bookings",
    title: "Bookings",
    description:
      "24/7 booking page, auto-confirmation, SMS reminders.",
    icon: "bookings",
  },
  {
    id: "websites",
    title: "Websites",
    description:
      "Fast, custom websites you own outright. Mobile-first, built to convert.",
    icon: "websites",
  },
  {
    id: "custom",
    title: "Custom Workflows",
    description:
      "Whatever your team is doing manually that a script or AI could do better.",
    icon: "custom",
  },
];

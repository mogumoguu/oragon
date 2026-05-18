export interface Service {
  id: string;
  title: string;
  description: string;
  icon: "pos" | "bookings" | "custom";
}

export const services: Service[] = [
  {
    id: "pos-sales",
    title: "POS + Sales Systems",
    description:
      "Real-time inventory, smart stock alerts, AI sales forecasting. See SmartStock.",
    icon: "pos",
  },
  {
    id: "bookings",
    title: "Bookings",
    description:
      "24/7 booking page, auto-confirmation, SMS reminders. See Oragon Bookings.",
    icon: "bookings",
  },
  {
    id: "custom",
    title: "Custom Workflows",
    description:
      "Whatever your team is doing manually that a script or AI could do better.",
    icon: "custom",
  },
];

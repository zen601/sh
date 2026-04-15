import AlexMorgan from "../assets/AlexMorgan.avif";
import SophieLee from "../assets/SophieLee.avif";
import introImage from "../assets/introImage.avif";

export const menuLinks = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#programs" },
  { name: "Trainers", href: "#trainers" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export const heroContent = {
  tag: "Train smarter",
  title: "Transform your body with daily fitness programs",
  description:
    "Join powerful workout sessions, expert trainers, and flexible plans designed for beginners and advanced members.",
  primaryButton: "Start Today",
  secondaryButton: "View Plans",
  image: introImage,
};

export const programs = [
  {
    title: "Strength Training",
    description: "Build muscle and improve your full body strength.",
    icon: "🏋️",
  },
  {
    title: "Yoga Class",
    description: "Increase flexibility and relax your mind and body.",
    icon: "🧘",
  },
  {
    title: "Cardio Workout",
    description: "Boost endurance and improve heart health.",
    icon: "🏃",
  },
];

export const trainers = [
  {
    name: "Alex Morgan",
    specialty: "Strength Coach",
    image: AlexMorgan,
  },
  {
    name: "Sophie Lee",
    specialty: "Yoga Trainer",
    image: SophieLee,
  },
];

export const pricingPlans = [
  {
    name: "Basic",
    price: "$19",
    period: "/month",
    features: ["Gym Access", "1 Group Class", "Basic Support"],
  },
  {
    name: "Pro",
    price: "$39",
    period: "/month",
    features: ["All Classes", "Personal Guidance", "Priority Support"],
  },
  {
    name: "Elite",
    price: "$59",
    period: "/month",
    features: ["Unlimited Access", "Private Coaching", "Nutrition Tips"],
  },
];

export const footerItems = ["About", "Classes", "Membership", "Support"];
// Shared services data (titles, descriptions, badges, slugs, hrefs)
// Keep this simple and import icon mapping in the components where needed.
export const SERVICES = [
  {
    title: "AI Integrations",
    description:
      "Enhance your systems with intelligent AI solutions that deliver real-time insights and smarter decision-making.",
    badge: "Core Service",
    icon: "Brain",
  },
  {
    title: "Automations",
    description:
      "Streamline repetitive tasks with powerful automations that save time and boost productivity effortlessly.",
    badge: "New",
    icon: "Zap",
  },
  {
    title: "Custom Developments",
    description:
      "Turn your ideas into reality with tailor-made AI solutions designed to grow and evolve with your business.",
    badge: "Strategic",
    icon: "TrendingUp",
  },
  {
    title: "Hardware & Software Support",
    description:
      "Hardware and software support to ensure your systems run smoothly and efficiently.",
    badge: "Strategic",
    icon: "HardDrive",
  },
  
];

// generate slug and href for each service (pure JS helper)
function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export const SERVICES_WITH_SLUGS = SERVICES.map((s) => ({
  ...s,
  slug: slugify(s.title),
  href: `/services/${slugify(s.title)}`,
}));

export default SERVICES_WITH_SLUGS;

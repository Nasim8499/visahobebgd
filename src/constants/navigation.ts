import { Home, Info, Briefcase, Globe, Newspaper, Phone, Users } from "lucide-react";

export interface NavLink {
  label: string;
  path: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  dropdown?: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  path: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/", icon: Home },
  { label: "About", path: "/about", icon: Info },
  {
    label: "Services",
    path: "/services",
    icon: Briefcase,
    dropdown: [
      { label: "Recruitment", path: "/services#recruitment" },
      { label: "Visa Processing", path: "/services#visa" },
      { label: "Deployment", path: "/services#deployment" },
    ],
  },
  { label: "Destinations", path: "/destinations", icon: Globe },
  { label: "Careers", path: "/careers", icon: Users },
  { label: "Insights", path: "/insights", icon: Newspaper },
  { label: "Contact", path: "/contact", icon: Phone },
];

export const MOBILE_NAV_ITEMS = NAV_LINKS.filter(
  (link) => !["About", "Insights"].includes(link.label)
).map(({ label, path, icon }) => ({ label, path, icon }));

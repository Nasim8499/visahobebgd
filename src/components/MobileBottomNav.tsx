import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Globe, Phone } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Briefcase, label: "Services", path: "/services" },
  { icon: Globe, label: "Destinations", path: "/destinations" },
  { icon: Phone, label: "Contact", path: "/contact" },
];

const MobileBottomNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="glass border-t-0 shadow-[0_-4px_30px_rgba(0,0,0,0.08)]" style={{ borderTop: '1px solid hsl(0 0% 100% / 0.3)' }}>
        <div className="flex items-center justify-around px-2 py-1.5 pb-[env(safe-area-inset-bottom,8px)]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative flex flex-col items-center gap-0.5 py-1.5 px-3 min-w-[60px]"
              >
                {isActive && (
                  <motion.div
                    layoutId="bottomNavIndicator"
                    className="absolute -top-1.5 w-8 h-1 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <motion.div
                  whileTap={{ scale: 0.85 }}
                  className={`transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-foreground/40"
                  }`}
                >
                  <item.icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                </motion.div>
                <span
                  className={`text-[10px] font-medium transition-colors ${
                    isActive ? "text-primary" : "text-foreground/35"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default MobileBottomNav;

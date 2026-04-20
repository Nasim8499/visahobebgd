import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { NAV_LINKS, type NavLink } from "@/constants/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.85, 0.98]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <motion.nav
      style={{ opacity: navOpacity }}
      className={`fixed top-0 left-0 right-0 z-50 font-nav transition-all duration-500 ${
        scrolled ? "py-0" : "py-1"
      }`}
    >
      {/* Glassmorphism background */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: scrolled
            ? `linear-gradient(135deg, hsl(var(--nav-from) / 0.95), hsl(var(--nav-to) / 0.95))`
            : `linear-gradient(135deg, hsl(var(--nav-from) / 0.8), hsl(var(--nav-to) / 0.8))`,
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(16px) saturate(150%)",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "blur(16px) saturate(150%)",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(255,255,255,0.04)",
          boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.15)" : "none",
        }}
      />

      {/* Animated accent line at top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />

      <div className="relative z-10 container-main flex items-center justify-between h-14 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <motion.div whileHover={{ rotate: 5, scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
            <img src="/logo.png" alt="VisaHOBe" className="w-8 h-8 rounded-lg object-contain" />
          </motion.div>
          <div className="flex flex-col">
            <span className="font-semibold text-white text-[13px] leading-tight tracking-wide group-hover:text-primary-foreground transition-colors">
              VisaHOBe
            </span>
            <span className="text-[9px] text-white/35 tracking-[0.1em] uppercase hidden sm:block">
              Global Mobility
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            const hasDropdown = !!link.dropdown;

            return (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => hasDropdown && setActiveDropdown(link.path)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "text-white bg-white/[0.1]"
                      : "text-white/45 hover:text-white/90 hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon size={13} strokeWidth={1.8} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span>{link.label}</span>
                  {hasDropdown && (
                    <ChevronDown
                      size={10}
                      className={`ml-0.5 transition-transform duration-200 ${
                        activeDropdown === link.path ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveBar"
                      className="absolute -bottom-[2px] left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-primary via-[hsl(202,79%,50%)] to-primary"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {hasDropdown && activeDropdown === link.path && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-1 w-48 rounded-xl overflow-hidden"
                      style={{
                        background: "hsl(var(--nav-from) / 0.97)",
                        backdropFilter: "blur(24px) saturate(180%)",
                        WebkitBackdropFilter: "blur(24px) saturate(180%)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                      }}
                    >
                      <div className="py-1">
                        {link.dropdown!.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center gap-2 px-4 py-2 text-[12px] text-white/45 hover:text-white hover:bg-white/[0.06] transition-all duration-150"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary/60" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Separator */}
          <div className="w-px h-5 bg-white/10 mx-2" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait">
              {theme === "light" ? (
                <motion.div key="moon" initial={{ opacity: 0, rotate: -90, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.5 }} transition={{ duration: 0.2 }}>
                  <Moon size={14} strokeWidth={2} />
                </motion.div>
              ) : (
                <motion.div key="sun" initial={{ opacity: 0, rotate: 90, scale: 0.5 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: -90, scale: 0.5 }} transition={{ duration: 0.2 }}>
                  <Sun size={14} strokeWidth={2} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* CTA */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="ml-2">
              <span className="inline-block px-4 py-1.5 text-[12px] font-semibold rounded-lg text-white bg-gradient-to-r from-primary to-[hsl(202,79%,41%)] hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                Get Started
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Mobile: only theme toggle */}
        <div className="flex lg:hidden items-center gap-1">
          <button
            onClick={toggleTheme}
            className="text-white/60 p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

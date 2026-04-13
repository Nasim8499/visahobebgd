import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, Briefcase, Globe, Newspaper, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/", icon: Home },
  { label: "About Us", path: "/about", icon: Info },
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
  { label: "Insights", path: "/insights", icon: Newspaper },
  { label: "Contact", path: "/contact", icon: Phone },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-nav transition-all duration-300 ${
        scrolled ? "bg-[hsl(222,47%,11%)/0.95]" : "bg-[hsl(222,47%,11%)/0.85]"
      }`}
      style={{
        backdropFilter: "blur(24px) saturate(150%)",
        WebkitBackdropFilter: "blur(24px) saturate(150%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container-main flex items-center justify-between h-16 md:h-[68px] px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="font-display font-bold text-white text-base">V</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white text-sm leading-tight tracking-wide">
              VisaHOBe Pte. Ltd.
            </span>
            <span className="text-[10px] text-white/40 tracking-[0.12em] uppercase">
              Global Manpower Recruiter
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
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
                  className={`relative flex items-center gap-1.5 px-3.5 py-2 text-[13px] font-medium rounded-lg transition-colors duration-200 group ${
                    isActive
                      ? "text-white bg-white/[0.08]"
                      : "text-white/50 hover:text-white/90 hover:bg-white/[0.04]"
                  }`}
                >
                  <Icon size={14} strokeWidth={1.8} className="opacity-60 group-hover:opacity-90 transition-opacity" />
                  <span>{link.label}</span>
                  {hasDropdown && (
                    <ChevronDown
                      size={12}
                      className={`ml-0.5 transition-transform duration-200 ${
                        activeDropdown === link.path ? "rotate-180" : ""
                      }`}
                    />
                  )}

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="navActiveBar"
                      className="absolute -bottom-[1px] left-3 right-3 h-[2px] rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {hasDropdown && activeDropdown === link.path && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-1.5 w-48 rounded-xl overflow-hidden"
                      style={{
                        background: "hsl(222 47% 13% / 0.97)",
                        backdropFilter: "blur(20px)",
                        WebkitBackdropFilter: "blur(20px)",
                        borderBottom: "1px solid rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div className="py-1.5">
                        {link.dropdown!.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center gap-2 px-4 py-2.5 text-[13px] text-white/50 hover:text-white hover:bg-white/[0.05] transition-colors duration-150"
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

          <Link to="/contact" className="ml-4">
            <span className="inline-block px-5 py-2 text-[13px] font-semibold rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors duration-200">
              Get Started
            </span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white/80 p-2 rounded-lg hover:bg-white/[0.06] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.15 }}>
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.15 }}>
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "hsl(222 47% 11% / 0.98)",
              borderTop: "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <div className="px-4 py-3 space-y-0.5">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors duration-150 ${
                        isActive
                          ? "text-white bg-white/[0.08]"
                          : "text-white/45 hover:text-white/80 hover:bg-white/[0.03]"
                      }`}
                    >
                      <Icon size={17} strokeWidth={1.8} />
                      <span>{link.label}</span>
                      {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.2 }}
                className="pt-2 pb-1"
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-sm font-semibold rounded-lg text-center text-white bg-primary hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

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
      className={`fixed top-0 left-0 right-0 z-50 font-nav transition-all duration-500 ${
        scrolled
          ? "shadow-2xl shadow-black/30"
          : "shadow-lg shadow-black/10"
      }`}
      style={{
        background: "linear-gradient(135deg, hsl(222 47% 11%), hsl(217 33% 17%))",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
      }}
    >
      <div className="container-main flex items-center justify-between h-16 md:h-[72px] px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30"
          >
            <span className="font-display font-bold text-white text-lg">V</span>
          </motion.div>
          <div className="flex flex-col">
            <span className="font-semibold text-white text-sm md:text-base leading-tight tracking-wide">
              VisaHOBe Pte. Ltd.
            </span>
            <span className="text-[10px] md:text-xs text-white/50 tracking-[0.15em] uppercase">
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
                  className={`relative flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-medium rounded-xl transition-all duration-300 group ${
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  <Icon size={15} strokeWidth={1.8} className="opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span>{link.label}</span>
                  {hasDropdown && (
                    <ChevronDown
                      size={13}
                      className={`ml-0.5 transition-transform duration-200 ${
                        activeDropdown === link.path ? "rotate-180" : ""
                      }`}
                    />
                  )}

                  {/* Active underline */}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-primary to-accent"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}

                  {/* Hover glow */}
                  <span className="absolute inset-0 rounded-xl bg-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover scale-up shadow effect */}
                  <motion.span
                    className="absolute inset-0 rounded-xl"
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0 4px 20px rgba(99, 102, 241, 0.15)",
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {hasDropdown && activeDropdown === link.path && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-52 rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
                      style={{
                        background: "linear-gradient(160deg, hsl(222 47% 14%), hsl(217 33% 20%))",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="py-2">
                        {link.dropdown!.map((item) => (
                          <Link
                            key={item.path}
                            to={item.path}
                            className="flex items-center gap-2 px-5 py-3 text-[13px] text-white/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
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

          <Link
            to="/contact"
            className="ml-5 group"
          >
            <motion.span
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-6 py-2.5 text-[13px] font-semibold rounded-xl text-white bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-shadow duration-300"
            >
              Get Started
            </motion.span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="lg:hidden text-white p-2.5 rounded-xl hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X size={22} />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu size={22} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "linear-gradient(180deg, hsl(217 33% 17%), hsl(222 47% 13%))",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = location.pathname === link.path;
                const Icon = link.icon;
                return (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "text-white bg-white/10 shadow-inner"
                          : "text-white/50 hover:text-white hover:bg-white/[0.05]"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                      <span>{link.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="mobileActive"
                          className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                className="pt-3"
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3.5 text-sm font-semibold rounded-xl text-center text-white bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/25"
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

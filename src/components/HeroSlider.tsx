import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import heroClouds from "@/assets/hero-clouds.jpg";
import globalNetwork from "@/assets/global-network.jpg";
import servicesManpower from "@/assets/services-manpower.jpg";

const slides = [
  {
    image: heroClouds,
    title: "A better way to manage global immigration.",
    subtitle: "Delivering seamless corporate immigration services to manage your global workforce.",
  },
  {
    image: globalNetwork,
    title: "Connecting talent across 180+ countries.",
    subtitle: "Strategic manpower recruitment and visa solutions for businesses worldwide.",
  },
  {
    image: servicesManpower,
    title: "Your workforce, our expertise.",
    subtitle: "Skilled and semi-skilled worker placement with end-to-end support.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[92vh] md:h-screen overflow-hidden bg-foreground">
      {/* Ken Burns animated background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.08] }}
            transition={{ duration: 5, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/50 to-foreground/70" />
        </motion.div>
      </AnimatePresence>

      {/* Animated gradient overlay lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              x: ["-100%", "100%"],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + i * 0.8,
              delay: i * 1.2,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating light orbs */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4 + i * 3,
              height: 4 + i * 3,
              left: `${10 + i * 11}%`,
              top: `${15 + (i % 4) * 18}%`,
              background: `radial-gradient(circle, hsl(15 85% 55% / 0.5), transparent)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i * 0.7,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Animated rings */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3, type: "spring" }}
          className="absolute w-[250px] h-[250px] md:w-[420px] md:h-[420px] rounded-full border border-primary/15 pointer-events-none"
        >
          <motion.div
            className="w-full h-full rounded-full border border-primary/10"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.6, type: "spring" }}
          className="absolute w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full border border-primary/8 pointer-events-none"
        >
          <motion.div
            className="w-full h-full rounded-full border border-primary/5"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-16 h-1 bg-primary rounded-full mx-auto mb-6"
            />
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight mb-6">
              {slides[current].title}
            </h1>
            <p className="text-background/75 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services"
              className="block px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-highlight-hover transition-all shadow-lg hover:shadow-2xl hover:shadow-primary/30"
            >
              Our Services
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="block px-8 py-3.5 border-2 border-background/30 text-background font-semibold rounded-full hover:bg-background/10 backdrop-blur-sm transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-24 md:bottom-20 flex gap-2">
          {slides.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrent(i)}
              whileHover={{ scale: 1.2 }}
              className={`h-3 rounded-full transition-all duration-500 ${
                i === current ? "bg-primary w-10" : "bg-background/40 w-3 hover:bg-background/60"
              }`}
            />
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-10 md:bottom-8"
        >
          <ChevronDown className="text-background/60" size={28} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSlider;

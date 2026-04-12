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
    <section className="relative h-[90vh] md:h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-hero-overlay/60" />
        </motion.div>
      </AnimatePresence>

      <div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        {/* Animated rings */}
        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full border-2 border-primary/20 pointer-events-none"
        />
        <motion.div
          initial={{ scale: 0, rotate: 45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.5, type: "spring" }}
          className="absolute w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full border border-primary/10 pointer-events-none"
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i * 0.5,
              delay: i * 0.3,
            }}
          />
        ))}

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(5px)" }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-background max-w-4xl leading-tight mb-6">
              {slides[current].title}
            </h1>
            <p className="text-background/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/services"
              className="block px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-highlight-hover transition-all shadow-lg hover:shadow-xl hover:shadow-primary/20"
            >
              Our Services
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="block px-8 py-3.5 border-2 border-background/30 text-background font-semibold rounded-full hover:bg-background/10 backdrop-blur-sm transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-20 flex gap-2">
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
          className="absolute bottom-8"
        >
          <ChevronDown className="text-background/60" size={28} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSlider;

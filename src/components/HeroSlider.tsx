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
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay/60" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* Orange circle accent */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-2 border-primary/30 pointer-events-none"
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
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
          <Link
            to="/services"
            className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-highlight-hover transition-all shadow-lg hover:shadow-xl"
          >
            Our Services
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3.5 border-2 border-background/30 text-background font-semibold rounded-full hover:bg-background/10 transition-all"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-8" : "bg-background/40"
              }`}
            />
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8"
        >
          <ChevronDown className="text-background/60" size={28} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSlider;

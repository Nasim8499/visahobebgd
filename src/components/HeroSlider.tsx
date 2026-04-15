import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, MapPin, Users } from "lucide-react";
import heroClouds from "@/assets/hero-clouds.jpg";
import globalNetwork from "@/assets/global-network.jpg";
import servicesManpower from "@/assets/services-manpower.jpg";

const slides = [
  {
    image: heroClouds,
    title: "A better way to manage global immigration.",
    subtitle: "Delivering seamless corporate immigration services to manage your global workforce.",
    tag: "Immigration",
  },
  {
    image: globalNetwork,
    title: "Connecting talent across 180+ countries.",
    subtitle: "Strategic manpower recruitment and visa solutions for businesses worldwide.",
    tag: "Global Reach",
  },
  {
    image: servicesManpower,
    title: "Your workforce, our expertise.",
    subtitle: "Skilled and semi-skilled worker placement with end-to-end support.",
    tag: "Recruitment",
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
    <section className="relative h-[92vh] md:h-screen overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.06] }}
            transition={{ duration: 5, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(207,100%,10%)]/40 via-[hsl(207,100%,10%)]/30 to-background/90" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(6px)" }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-xs font-semibold mb-6 backdrop-blur-sm border border-primary/30"
            >
              <MapPin size={12} /> {slides[current].tag}
            </motion.span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              {slides[current].title}
            </h1>
            <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8">
              {slides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/services"
              className="block px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-highlight-hover transition-all shadow-lg"
            >
              Our Services
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.96 }}>
            <Link
              to="/contact"
              className="block px-8 py-3.5 bg-white/15 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/25 transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-24 md:bottom-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                i === current ? "bg-primary w-10" : "bg-white/30 w-2.5 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="absolute bottom-10 md:bottom-8"
        >
          <ChevronDown className="text-white/40" size={28} />
        </motion.div>
      </div>

      {/* Bottom info pills */}
      <div className="absolute bottom-28 md:bottom-24 left-1/2 -translate-x-1/2 z-10 hidden md:flex gap-3">
        {[
          { icon: MapPin, text: "180+ Countries" },
          { icon: Users, text: "5000+ Placed" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/80 text-xs font-medium">
            <item.icon size={13} /> {item.text}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountryCard from "@/components/CountryCard";
import globalNetwork from "@/assets/global-network.jpg";

const countries = [
  { name: "Singapore", code: "SG", description: "Work Permit, S Pass, and Employment Pass placements. One of our primary corridors with deep employer networks.", visaTypes: ["Work Permit", "S Pass", "Employment Pass"] },
  { name: "Australia", code: "AU", description: "Subclass 482 temporary skill shortage visas. A high-value destination with growing demand for skilled workers.", visaTypes: ["Subclass 482", "Skilled Worker", "Tourist"] },
  { name: "Russia", code: "RU", description: "Worker registration and employment facilitation. New registration requirements effective April 2026.", visaTypes: ["Work Visa", "Business Visa"] },
  { name: "Saudi Arabia", code: "SA", description: "Skilled and semi-skilled worker placement in construction, services, and industrial sectors.", visaTypes: ["Work Visa", "Business Visa", "Iqama"] },
  { name: "Cambodia", code: "KH", description: "Emerging destination with streamlined work visa procedures. Growing opportunities for skilled workers.", visaTypes: ["Work Visa", "Business Visa"] },
  { name: "Belarus", code: "BY", description: "Worker placement and employment coordination in manufacturing and industrial sectors.", visaTypes: ["Work Visa", "Temporary Permit"] },
  { name: "Serbia", code: "RS", description: "Emerging European gateway with growing opportunities. New language test requirements for worker visas.", visaTypes: ["Work Visa", "Business Visa", "Tourist"] },
  { name: "Moldova", code: "MD", description: "Strategic European gateway destination. Growing demand for specialized worker placements.", visaTypes: ["Work Visa", "Residence Permit"] },
];

const Destinations = () => {
  return (
    <div className="pt-20 pb-16 lg:pb-0">
      {/* Hero */}
      <section className="relative h-[45vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <motion.img
          src={globalNetwork}
          alt="Global destinations"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/60 to-foreground/80" />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/60 to-primary"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.6 }}
            className="h-1 bg-primary rounded-full mb-6"
          />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-3xl md:text-5xl font-bold text-background mb-4"
          >
            Our Destinations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-background/80 max-w-2xl text-sm md:text-base"
          >
            We serve talent placement across 8+ strategic destinations worldwide.
          </motion.p>
        </div>
      </section>

      {/* Countries grid */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                className="block h-1 bg-primary rounded-full mx-auto mb-4"
              />
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
                Target Countries
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Each destination has unique requirements. Our team ensures embassy-ready documentation and compliance for every corridor.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {countries.map((c, i) => (
              <AnimatedSection key={c.code} delay={i * 0.08}>
                <CountryCard {...c} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{
            backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 21px)",
            backgroundSize: "200% 200%",
          }}
        />
        <div className="container-main text-center relative z-10">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Planning to Work Abroad?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Let our experts guide you through the process for your target destination.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-background text-foreground font-semibold rounded-full hover:shadow-xl transition-all">
              Contact Us <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;

import { motion } from "framer-motion";

const partners = [
  { name: "Ministry of Manpower", abbr: "MOM" },
  { name: "ACRA Singapore", abbr: "ACRA" },
  { name: "ILO International", abbr: "ILO" },
  { name: "IATA Certified", abbr: "IATA" },
  { name: "Global Compact", abbr: "UNGC" },
  { name: "ISO 9001:2015", abbr: "ISO" },
  { name: "Singapore HR Institute", abbr: "SHRI" },
  { name: "Manpower Ministry KH", abbr: "MLVT" },
];

const PartnersMarquee = () => {
  const doubled = [...partners, ...partners];

  return (
    <section className="py-12 bg-section-alt overflow-hidden border-y border-border">
      <div className="container-main mb-6">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground">
          Trusted By & Affiliated With
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-section-alt to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-section-alt to-transparent z-10" />
        <motion.div
          className="flex gap-8 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {doubled.map((p, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-3 bg-card rounded-xl border border-border shadow-sm min-w-[180px]"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-primary text-xs">{p.abbr}</span>
              </div>
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{p.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersMarquee;

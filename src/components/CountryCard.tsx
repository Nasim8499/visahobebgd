import { motion } from "framer-motion";

interface Props {
  name: string;
  code: string;
  description: string;
  visaTypes: string[];
}

const CountryCard = ({ name, code, description, visaTypes }: Props) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-2xl transition-shadow group cursor-pointer relative"
  >
    {/* Animated wave top bar */}
    <div className="relative h-2 overflow-hidden bg-primary/20">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-primary/70 to-primary"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
      />
    </div>
    <div className="p-4 sm:p-6">
      <div className="flex items-center gap-3 mb-3">
        <motion.div
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring" }}
          className="relative"
        >
          <img
            src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
            alt={`${name} flag`}
            className="w-12 h-8 rounded object-cover shadow-md"
            loading="lazy"
          />
          {/* Flag glow effect */}
          <motion.div
            className="absolute inset-0 rounded shadow-lg"
            animate={{ boxShadow: ["0 0 0px hsl(15 85% 55% / 0)", "0 0 12px hsl(15 85% 55% / 0.3)", "0 0 0px hsl(15 85% 55% / 0)"] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          />
        </motion.div>
        <h3 className="font-display font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors">{name}</h3>
      </div>
      <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {visaTypes.map((v) => (
          <motion.span
            key={v}
            whileHover={{ scale: 1.1 }}
            className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
          >
            {v}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default CountryCard;

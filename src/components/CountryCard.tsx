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
    className="bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-2xl transition-shadow group cursor-pointer"
  >
    <div className="h-1.5 bg-gradient-to-r from-primary via-primary/70 to-primary group-hover:h-2 transition-all duration-300" />
    <div className="p-6">
      <div className="flex items-center gap-3 mb-3">
        <motion.img
          whileHover={{ scale: 1.15, rotate: 5 }}
          transition={{ type: "spring" }}
          src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
          alt={`${name} flag`}
          className="w-12 h-8 rounded object-cover shadow-md"
          loading="lazy"
        />
        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors">{name}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {visaTypes.map((v) => (
          <motion.span
            key={v}
            whileHover={{ scale: 1.1 }}
            className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
          >
            {v}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default CountryCard;

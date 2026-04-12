import { motion } from "framer-motion";

interface Props {
  name: string;
  code: string;
  description: string;
  visaTypes: string[];
}

const CountryCard = ({ name, code, description, visaTypes }: Props) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:shadow-xl transition-shadow group"
  >
    <div className="h-3 bg-primary" />
    <div className="p-6">
      <div className="flex items-center gap-3 mb-3">
        <img
          src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
          alt={`${name} flag`}
          className="w-12 h-8 rounded object-cover shadow-sm"
          loading="lazy"
        />
        <h3 className="font-display font-bold text-lg text-foreground">{name}</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-1.5">
        {visaTypes.map((v) => (
          <span key={v} className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {v}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default CountryCard;

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface Props {
  name: string;
  code: string;
  description: string;
  visaTypes: string[];
}

const CountryCard = ({ name, code, description, visaTypes }: Props) => (
  <motion.div
    whileHover={{ y: -6 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="relative rounded-3xl overflow-hidden cursor-pointer h-[240px] sm:h-[280px] group"
  >
    {/* Full flag background */}
    <img
      src={`https://flagcdn.com/w640/${code.toLowerCase()}.png`}
      alt={`${name} flag`}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    />

    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(150,30%,6%)]/90 via-[hsl(150,30%,8%)]/50 to-transparent group-hover:from-[hsl(150,30%,6%)]/95 transition-all duration-500" />

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-end h-full p-4 sm:p-5">
      <div className="flex items-center gap-2.5 mb-2">
        <img
          src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
          alt=""
          className="w-7 h-[18px] rounded-sm object-cover shadow-md border border-white/20"
        />
        <h3 className="font-display font-bold text-base sm:text-lg text-white drop-shadow-lg">
          {name}
        </h3>
      </div>

      <p className="text-[11px] sm:text-xs text-white/65 leading-relaxed line-clamp-2 mb-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {visaTypes.map((v) => (
          <span
            key={v}
            className="px-2.5 py-1 text-[9px] sm:text-[10px] font-medium bg-primary/25 backdrop-blur-sm text-primary-foreground rounded-full border border-primary/30 group-hover:bg-primary/40 transition-colors"
          >
            {v}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default CountryCard;

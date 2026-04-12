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
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer h-[220px] sm:h-[260px]"
  >
    {/* Full flag background */}
    <img
      src={`https://flagcdn.com/w640/${code.toLowerCase()}.png`}
      alt={`${name} flag`}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      loading="lazy"
    />

    {/* Dark gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20 group-hover:from-foreground/95 group-hover:via-foreground/60 transition-all duration-500" />

    {/* Animated shine sweep */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
      initial={{ x: "-150%" }}
      whileHover={{ x: "150%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col justify-end h-full p-4 sm:p-5">
      {/* Small flag icon + name */}
      <div className="flex items-center gap-2.5 mb-2">
        <motion.img
          src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
          alt=""
          className="w-8 h-5 rounded-sm object-cover shadow-md border border-white/20"
          whileHover={{ scale: 1.15 }}
        />
        <h3 className="font-display font-bold text-base sm:text-lg text-white drop-shadow-lg">
          {name}
        </h3>
      </div>

      <p className="text-[11px] sm:text-xs text-white/75 leading-relaxed line-clamp-2 mb-3">
        {description}
      </p>

      {/* Visa type tags */}
      <div className="flex flex-wrap gap-1.5">
        {visaTypes.map((v) => (
          <motion.span
            key={v}
            whileHover={{ scale: 1.1 }}
            className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[11px] font-semibold bg-white/15 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors cursor-pointer"
          >
            {v}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default CountryCard;

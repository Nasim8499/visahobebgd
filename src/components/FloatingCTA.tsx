import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 300 }}
      className="fixed bottom-20 right-4 z-40 lg:hidden"
    >
      <Link
        to="/contact"
        className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-primary to-[hsl(202,79%,41%)] text-white font-semibold text-sm rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
      >
        Get Started <ArrowRight size={14} />
      </Link>
    </motion.div>
  );
};

export default FloatingCTA;

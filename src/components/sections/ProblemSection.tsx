import { motion } from "framer-motion";
import { Building2, PipetteIcon, MapPin, Droplets } from "lucide-react";
import WaterStream from "../WaterStream";
import pressureImg from "@/assets/pressure-comparison.jpg";

const causes = [
  { icon: MapPin, label: "Distance from water supply" },
  { icon: Building2, label: "Shared plumbing in apartments" },
  { icon: PipetteIcon, label: "Older or corroded pipes" },
  { icon: Droplets, label: "Low pressure municipal supply" },
];

interface Props {
  onNext: () => void;
}

const ProblemSection = ({ onNext }: Props) => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-3">
          Weak Shower Pressure?
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Millions of homes suffer from disappointing shower pressure. Here's why — and what you can do about it.
        </p>
      </motion.div>

      {/* Comparison */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-6 max-w-2xl mx-auto"
      >
        <div className="glass-card rounded-xl p-6 flex flex-col items-center">
          <p className="text-sm font-medium text-destructive mb-4">Low Pressure</p>
          <WaterStream intensity={15} height={160} />
          <p className="text-xs text-muted-foreground mt-3">Frustrating drips</p>
        </div>
        <div className="glass-card rounded-xl p-6 flex flex-col items-center border-primary/30">
          <p className="text-sm font-medium text-primary mb-4">With ShowerBoost</p>
          <WaterStream intensity={85} height={160} />
          <p className="text-xs text-muted-foreground mt-3">Powerful, consistent flow</p>
        </div>
      </motion.div>

      {/* Causes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto"
      >
        {causes.map((cause, i) => (
          <div key={i} className="glass-card rounded-lg p-4 text-center">
            <cause.icon className="mx-auto mb-2 text-primary" size={24} />
            <p className="text-xs text-muted-foreground">{cause.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <button
          onClick={onNext}
          className="water-gradient text-primary-foreground px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          Explore the Solution →
        </button>
      </motion.div>
    </div>
  );
};

export default ProblemSection;

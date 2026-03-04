import { motion } from "framer-motion";
import { Building2, PipetteIcon, MapPin, Droplets } from "lucide-react";
import WaterStream from "../WaterStream";

const causes = [
  { icon: MapPin, label: "Distance from water supply" },
  { icon: Building2, label: "Shared plumbing in apartments" },
  { icon: PipetteIcon, label: "Older or corroded pipes" },
  { icon: Droplets, label: "Low pressure municipal supply" },
];

const ProblemSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">The Problem</p>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
          Weak Shower Pressure?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          Millions of homes suffer from disappointing shower pressure. Here's why — and what you can do about it.
        </p>
      </div>

      {/* Comparison */}
      <div className="grid grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-8 flex flex-col items-center"
        >
          <p className="text-sm font-bold text-destructive mb-4">Low Pressure</p>
          <WaterStream intensity={15} height={160} />
          <p className="text-xs text-muted-foreground mt-4">Annoyingly weak pressure</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-8 flex flex-col items-center border-primary/30 ring-2 ring-primary/10"
        >
          <p className="text-sm font-bold text-primary mb-4">With ShowerBoost</p>
          <WaterStream intensity={85} height={160} />
          <p className="text-xs text-muted-foreground mt-4">Powerful, consistent flow</p>
        </motion.div>
      </div>

      {/* Causes */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {causes.map((cause, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-5 text-center hover:shadow-xl transition-shadow"
          >
            <cause.icon className="mx-auto mb-3 text-primary" size={28} />
            <p className="text-sm text-muted-foreground font-medium">{cause.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSection;

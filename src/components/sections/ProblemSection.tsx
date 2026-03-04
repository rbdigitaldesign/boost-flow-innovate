import { motion } from "framer-motion";
import { Building2, PipetteIcon, MapPin, Droplets } from "lucide-react";
import beforeAfterImg from "@/assets/before-after-pressure.png";

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

      {/* Real before/after comparison image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="glass-card rounded-3xl p-3 overflow-hidden">
          <img
            src={beforeAfterImg}
            alt="Before and after comparison — weak pressure vs ShowerBoost enhanced flow"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="flex justify-between mt-4 px-4">
          <div className="text-center flex-1">
            <p className="text-sm font-bold text-destructive">Without ShowerBoost</p>
            <p className="text-xs text-muted-foreground">Weak, inconsistent trickle</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-sm font-bold text-primary">With ShowerBoost</p>
            <p className="text-xs text-muted-foreground">Powerful, consistent spray</p>
          </div>
        </div>
      </motion.div>

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

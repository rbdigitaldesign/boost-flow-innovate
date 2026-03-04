import { motion } from "framer-motion";
import { Zap, Wrench, Usb, Filter, CircleDot, RotateCcw, Volume2 } from "lucide-react";

const features = [
  { icon: Zap, title: "Battery Powered Booster Pump", desc: "Efficient brushless motor delivers consistent pressure enhancement." },
  { icon: Wrench, title: "Tool-Free Installation", desc: "Screws on in seconds — no plumber needed." },
  { icon: Usb, title: "USB-C Rechargeable", desc: "Universal charging, weeks of battery life." },
  { icon: Filter, title: "Replaceable Sediment Filter", desc: "Keeps water clean and protects the pump." },
  { icon: CircleDot, title: "Smart LED Status Ring", desc: "Instant visual feedback for battery, filter and flow." },
  { icon: RotateCcw, title: "Micro-Recirculation Stabiliser", desc: "Smooths pressure spikes for a consistent experience." },
  { icon: Volume2, title: "Quiet Brushless Motor", desc: "Near-silent operation for a relaxing shower." },
];

const FeaturesSection = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Features</h2>
        <p className="text-muted-foreground">Everything you need in a compact, elegant package.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="glass-card rounded-xl p-5 hover:border-primary/40 transition-all hover:shadow-xl group"
          >
            <div className="w-11 h-11 rounded-xl water-gradient flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <f.icon size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-sm mb-1">{f.title}</h3>
            <p className="text-xs text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

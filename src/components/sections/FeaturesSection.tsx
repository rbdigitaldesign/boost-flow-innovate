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
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Features</p>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
          Everything You Need
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A compact, elegant package designed for effortless showers.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass-card rounded-2xl p-6 hover:border-primary/40 transition-all hover:shadow-xl group"
          >
            <div className="w-12 h-12 rounded-xl water-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
              <f.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-bold text-sm mb-1.5">{f.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;

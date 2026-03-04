import { motion } from "framer-motion";
import { Zap, Wrench, Battery, Filter, CircleDot, RotateCcw, Volume2 } from "lucide-react";
import chargingDockImg from "@/assets/product-charging-dock.png";

const features = [
  { icon: Zap, title: "Battery Powered Booster Pump", desc: "Efficient brushless motor delivers consistent pressure enhancement." },
  { icon: Wrench, title: "Tool-Free Installation", desc: "Screws on in seconds — no plumber needed." },
  { icon: Battery, title: "Removable Battery", desc: "Swap and charge separately — device stays installed on the shower." },
  { icon: Filter, title: "Replaceable Sediment Filter", desc: "Keeps water clean and protects the pump." },
  { icon: CircleDot, title: "Smart LED Status Ring", desc: "Instant visual feedback for battery, filter and flow." },
  { icon: RotateCcw, title: "Micro-Recirculation Stabiliser", desc: "Smooths pressure spikes for a consistent experience." },
  { icon: Volume2, title: "Quiet Brushless Motor", desc: "Near-silent operation for a relaxing shower." },
];

const FeaturesSection = () => {
  return (
    <div className="space-y-16">
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

      {/* Removable battery showcase */}
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl mb-3">Pop Out. Charge. Pop Back In.</h3>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            The battery slides out while ShowerBoost stays screwed into your shower. Charge it on the countertop next to your toothbrush — no tools, no fuss.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-3 overflow-hidden"
        >
          <img
            src={chargingDockImg}
            alt="ShowerBoost removable battery charging on bathroom countertop"
            className="w-full rounded-2xl"
          />
          <div className="p-4 text-center">
            <p className="text-sm font-bold">Removable Battery</p>
            <p className="text-xs text-muted-foreground">Swap in seconds — charge anywhere via USB-C or magnetic dock</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesSection;

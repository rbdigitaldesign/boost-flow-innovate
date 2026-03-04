import { motion } from "framer-motion";
import { Package, Cable, BookOpen, Cylinder } from "lucide-react";
import unboxingImg from "@/assets/product-unboxing.png";

const boxContents = [
  { icon: Cylinder, label: "ShowerBoost Device", desc: "The compact pressure booster unit" },
  { icon: Cable, label: "USB-C Cable & Adapter", desc: "For fast, universal charging" },
  { icon: Cylinder, label: "Spare Sediment Filter", desc: "One extra filter included" },
  { icon: BookOpen, label: "Quick Start Guide", desc: "Get set up in under a minute" },
];

const WhatsInTheBoxSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Unboxing</p>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
          What's in the Box
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Everything you need to get started — no extra purchases required.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-3 overflow-hidden"
        >
          <img
            src={unboxingImg}
            alt="ShowerBoost premium packaging with device, USB-C cable, spare filter, and quick start guide"
            className="w-full rounded-2xl"
          />
        </motion.div>

        <div className="space-y-4">
          {boxContents.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="w-11 h-11 rounded-xl water-gradient flex items-center justify-center flex-shrink-0 shadow-md">
                <item.icon size={20} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-bold">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsInTheBoxSection;

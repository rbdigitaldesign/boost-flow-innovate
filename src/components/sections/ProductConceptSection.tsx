import { motion } from "framer-motion";
import { Zap, Battery, Usb, CircleDot, Filter, Gauge, RotateCcw } from "lucide-react";
import deviceImg from "@/assets/showerboost-device.jpg";

const components = [
  { icon: Zap, label: "Micro brushless booster pump", desc: "Silent, efficient pressure amplification" },
  { icon: Battery, label: "Rechargeable lithium battery", desc: "Weeks of use per charge" },
  { icon: Usb, label: "USB-C charging port", desc: "Universal fast charging" },
  { icon: CircleDot, label: "LED status ring", desc: "Battery, filter & flow status at a glance" },
  { icon: Filter, label: "Replaceable sediment filter", desc: "Cleaner water, longer life" },
  { icon: Gauge, label: "Pressure sensor", desc: "Auto-adjusts boost level" },
  { icon: RotateCcw, label: "Micro-recirculation chamber", desc: "Stabilises flow, amplifies pressure" },
];

const ProductConceptSection = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
          Meet <span className="text-gradient">ShowerBoost</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A compact inline device that screws between your shower pipe and shower head. No tools, no plumber, no hassle.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        {/* Device image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="glass-card rounded-2xl p-4 overflow-hidden">
            <img
              src={deviceImg}
              alt="ShowerBoost device installed between shower pipe and head"
              className="w-full rounded-xl"
            />
          </div>
          {/* Pulse ring effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-primary/30 animate-pulse-ring pointer-events-none" />
        </motion.div>

        {/* Component callouts */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          {components.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="glass-card rounded-lg p-3 flex items-start gap-3 hover:border-primary/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-lg water-gradient flex items-center justify-center flex-shrink-0">
                <comp.icon size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold">{comp.label}</p>
                <p className="text-xs text-muted-foreground">{comp.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Recirculation explanation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glass-card rounded-xl p-6 max-w-2xl mx-auto text-center"
      >
        <RotateCcw className="mx-auto mb-3 text-primary" size={28} />
        <h3 className="font-heading font-semibold mb-2">Micro-Recirculation Technology</h3>
        <p className="text-sm text-muted-foreground">
          A small portion of water cycles through an internal chamber before exiting, stabilising flow and amplifying pressure.
          This reduces energy use and improves shower feel even when incoming pressure is very low.
        </p>
      </motion.div>
    </div>
  );
};

export default ProductConceptSection;

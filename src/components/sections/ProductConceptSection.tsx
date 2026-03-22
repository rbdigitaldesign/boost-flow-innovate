import { motion } from "framer-motion";
import { Zap, Battery, Magnet, CircleDot, Filter, Gauge, RotateCcw } from "lucide-react";
import deviceImg from "@/assets/product-handheld.png";

const components = [
  { icon: Zap, label: "Magnetic drive centrifugal micro-pump", desc: "Brushless DC motor (40–80W) in sealed dry chamber, magnetic coupling spins impeller in wet chamber" },
  { icon: Battery, label: "Rechargeable lithium-ion battery", desc: "7.4–11.1V, 3000–6000mAh — approximately 3–5 showers per charge" },
  { icon: Magnet, label: "Magnetic drive coupling", desc: "Motor and impeller connected magnetically — no shaft seal, no leak risk" },
  { icon: CircleDot, label: "LED status ring", desc: "Battery level, filter status & flow indication at a glance" },
  { icon: Filter, label: "Sediment pre-filter", desc: "Protects the impeller and improves water quality" },
  { icon: Gauge, label: "Pressure & flow sensors", desc: "Auto-activates on flow detection, ramps pump speed, shuts off when flow stops" },
  { icon: RotateCcw, label: "Stabilisation chamber", desc: "Smooths turbulent output for consistent, even spray" },
];

const ProductConceptSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">The Device</p>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
          Meet <span className="text-gradient">ShowerBoost</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A compact inline device that screws between your shower arm and shower head using standard ½″ BSP threads. No tools, no plumber, no hassle.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        {/* Device image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-3 overflow-hidden">
            <img
              src={deviceImg}
              alt="ShowerBoost device held in hand showing compact size with LED status ring"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-primary/30 animate-pulse-ring pointer-events-none" />
        </motion.div>

        {/* Component callouts */}
        <div className="space-y-3">
          {components.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-card rounded-xl p-4 flex items-start gap-3.5 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-xl water-gradient flex items-center justify-center flex-shrink-0 shadow-md">
                <comp.icon size={18} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-bold">{comp.label}</p>
                <p className="text-xs text-muted-foreground">{comp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Internal architecture callout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-2xl p-8 max-w-2xl mx-auto text-center"
      >
        <RotateCcw className="mx-auto mb-3 text-primary" size={32} />
        <h3 className="font-heading font-bold text-lg mb-2">Dual-Chamber Architecture</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The wet chamber contains the impeller and water path. The dry chamber houses the motor, battery, and electronics.
          Magnetic coupling connects them without a physical shaft — eliminating the primary waterproofing failure point used in traditional pumps.
        </p>
      </motion.div>
    </div>
  );
};

export default ProductConceptSection;

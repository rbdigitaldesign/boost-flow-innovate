import { motion } from "framer-motion";
import { ArrowDown, Droplets, Zap, RefreshCw, ShowerHead, ChevronRight, Filter, Gauge } from "lucide-react";

const steps = [
  { label: "Water In", desc: "Water enters from the pipe", icon: Droplets, iconColor: "text-blue-100" },
  { label: "Pre-Filter", desc: "Sediment filter protects impeller", icon: Filter, iconColor: "text-amber-100" },
  { label: "Pressure Sensor", desc: "Detects flow, triggers pump", icon: Gauge, iconColor: "text-green-100" },
  { label: "Pump Boost", desc: "Magnetic drive impeller adds pressure", icon: Zap, iconColor: "text-yellow-100" },
  { label: "Stabilisation", desc: "Chamber smooths turbulent output", icon: RefreshCw, animate: true, iconColor: "text-white" },
  { label: "Water Out", desc: "Boosted water exits shower head", icon: ShowerHead, iconColor: "text-white" },
];

const benefits = [
  "Smooths out pressure fluctuations",
  "Auto-activates on flow detection",
  "PWM speed control matches demand",
];

const RecirculationSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Technology</p>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
          Internal Flow Architecture
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
          How water flows through the ShowerBoost device — from inlet to boosted output.
        </p>
      </div>

      {/* Flow diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl p-6 md:p-10 max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-2">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col md:flex-row items-center gap-2 md:gap-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 md:w-18 md:h-18 rounded-full bg-primary/90 flex items-center justify-center shadow-lg border-2 border-primary-foreground/20">
                    {step.animate ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                        <Icon size={24} className={step.iconColor} />
                      </motion.div>
                    ) : (
                      <Icon size={24} className={step.iconColor} />
                    )}
                  </div>
                  <p className="text-xs font-bold mt-2">{step.label}</p>
                  <p className="text-[10px] text-muted-foreground text-center max-w-[100px]">{step.desc}</p>
                </motion.div>

                {i < steps.length - 1 && (
                  <div className="flex items-center">
                    <div className="hidden md:flex items-center gap-0.5">
                      {[0, 1].map((j) => (
                        <motion.div
                          key={j}
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 + j * 0.1 }}
                        >
                          <ChevronRight size={14} className="text-primary/70" />
                        </motion.div>
                      ))}
                    </div>
                    <div className="md:hidden">
                      <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                        <ArrowDown size={14} className="text-primary" />
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Benefits */}
      <div className="grid md:grid-cols-3 gap-5 max-w-3xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-5 text-center hover:shadow-xl transition-shadow"
          >
            <div className="w-10 h-10 rounded-full water-gradient mx-auto mb-3 flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-extrabold text-sm">{i + 1}</span>
            </div>
            <p className="text-sm text-muted-foreground font-medium">{b}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecirculationSection;

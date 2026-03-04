import { motion } from "framer-motion";
import { ArrowDown, Droplets, Zap, RefreshCw, ShowerHead, ChevronRight } from "lucide-react";

const steps = [
  { label: "Water In", desc: "Water enters from the pipe", icon: Droplets, iconColor: "text-blue-100" },
  { label: "Pump Boost", desc: "Internal pump increases pressure", icon: Zap, iconColor: "text-yellow-100" },
  { label: "Recirculation", desc: "Portion cycles through chamber", icon: RefreshCw, animate: true, iconColor: "text-white" },
  { label: "Water Out", desc: "Boosted water exits shower head", icon: ShowerHead, iconColor: "text-white" },
];

const benefits = [
  "Smooths out pressure fluctuations",
  "Increases perceived spray intensity",
  "Reduces power requirements for the pump",
];

const RecirculationSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Technology</p>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
          How Micro-Recirculation Works
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
          A simplified look at how water flows through the ShowerBoost device.
        </p>
      </div>

      {/* Flow diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl p-8 md:p-10 max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.12 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg border-2 border-primary-foreground/20">
                    {step.animate ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }}>
                        <Icon size={28} className={step.iconColor} />
                      </motion.div>
                    ) : (
                      <Icon size={28} className={step.iconColor} />
                    )}
                  </div>
                  <p className="text-sm font-bold mt-2">{step.label}</p>
                  <p className="text-xs text-muted-foreground text-center max-w-[120px]">{step.desc}</p>
                </motion.div>

                {i < steps.length - 1 && (
                  <div className="flex items-center">
                    <div className="hidden md:flex items-center gap-0.5">
                      {[0, 1, 2].map((j) => (
                        <motion.div
                          key={j}
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 + j * 0.15 }}
                        >
                          <ChevronRight size={18} className={`text-primary/${60 + j * 20}`} />
                        </motion.div>
                      ))}
                    </div>
                    <div className="md:hidden">
                      <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                        <ArrowDown size={18} className="text-primary" />
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex justify-center"
        >
          <div className="relative w-48 h-12">
            <motion.div
              className="absolute inset-0 border-2 border-dashed border-primary/40 rounded-full"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-primary font-semibold bg-card px-2">recirculation loop</span>
            </div>
          </div>
        </motion.div>
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

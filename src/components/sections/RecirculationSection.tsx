import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Droplets, Zap, RefreshCw, ShowerHead, ChevronRight } from "lucide-react";

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
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
          How Micro-Recirculation Works
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A simplified look at how water flows through the ShowerBoost device.
        </p>
      </motion.div>

      {/* Flow diagram */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-2xl p-8 max-w-4xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg border-2 border-primary-foreground/20">
                    {step.animate ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      >
                        <Icon size={28} className={step.iconColor} />
                      </motion.div>
                    ) : (
                      <Icon size={28} className={step.iconColor} />
                    )}
                  </div>
                  <p className="text-sm font-semibold mt-2">{step.label}</p>
                  <p className="text-xs text-muted-foreground text-center max-w-[120px]">{step.desc}</p>
                </motion.div>

                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="flex items-center"
                  >
                    {/* Animated flowing arrow */}
                    <div className="hidden md:flex items-center gap-0.5">
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      >
                        <ChevronRight size={18} className="text-primary/60" />
                      </motion.div>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 + 0.15 }}
                      >
                        <ChevronRight size={18} className="text-primary/80" />
                      </motion.div>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 + 0.3 }}
                      >
                        <ChevronRight size={18} className="text-primary" />
                      </motion.div>
                    </div>
                    <div className="md:hidden flex flex-col items-center gap-0.5">
                      <motion.div
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      >
                        <ArrowDown size={18} className="text-primary" />
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Recirculation loop visual */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 flex justify-center"
        >
          <div className="relative w-48 h-12">
            <motion.div
              className="absolute inset-0 border-2 border-dashed border-primary/40 rounded-full"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-primary font-medium bg-card px-2">recirculation loop</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto"
      >
        {benefits.map((b, i) => (
          <div key={i} className="glass-card rounded-lg p-4 text-center">
            <div className="w-8 h-8 rounded-full water-gradient mx-auto mb-2 flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">{i + 1}</span>
            </div>
            <p className="text-sm text-muted-foreground">{b}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RecirculationSection;

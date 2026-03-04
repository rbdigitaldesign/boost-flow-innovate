import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, RotateCcw } from "lucide-react";

const steps = [
  { label: "Water In", desc: "Water enters from the pipe", color: "bg-water-light" },
  { label: "Pump Boost", desc: "Internal pump increases pressure", color: "water-gradient" },
  { label: "Recirculation", desc: "Portion cycles through chamber", color: "water-gradient" },
  { label: "Water Out", desc: "Boosted water exits shower head", color: "bg-primary" },
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
        className="glass-card rounded-2xl p-8 max-w-3xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center shadow-md`}>
                  {i === 2 ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <RotateCcw size={24} className="text-primary-foreground" />
                    </motion.div>
                  ) : (
                    <ArrowDown size={24} className={i === 3 ? "text-primary-foreground" : "text-water-dark"} />
                  )}
                </div>
                <p className="text-sm font-semibold mt-2">{step.label}</p>
                <p className="text-xs text-muted-foreground text-center max-w-[120px]">{step.desc}</p>
              </motion.div>

              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.15 }}
                >
                  <ArrowRight size={20} className="text-muted-foreground hidden md:block" />
                  <ArrowDown size={20} className="text-muted-foreground md:hidden" />
                </motion.div>
              )}
            </div>
          ))}
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

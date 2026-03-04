import { motion } from "framer-motion";
import { Droplets, ChevronDown } from "lucide-react";
import WaterStream from "../WaterStream";

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById("problem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative water-gradient-hero min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated water particles */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary-foreground/30"
            style={{
              width: 4 + Math.random() * 6,
              height: 4 + Math.random() * 6,
              left: `${10 + Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground/80 text-xs font-medium mb-6"
            >
              <Droplets size={14} />
              Product Concept — Patent Pending
            </motion.div>

            <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.05] mb-6 tracking-tight">
              Transform Your
              <br />
              <span className="text-gradient-bold">Shower Pressure</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-lg leading-relaxed mb-8">
              ShowerBoost is a compact inline device that screws between your shower pipe and head — boosting weak pressure with zero installation hassle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToNext}
                className="px-8 py-4 bg-primary-foreground text-water-deep font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Explore the Concept
              </button>
              <button
                onClick={() => document.getElementById("simulation")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-semibold rounded-full text-lg hover:bg-primary-foreground/10 transition-all"
              >
                Try the Simulator
              </button>
            </div>
          </motion.div>

          {/* Right — water stream demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-primary-foreground/5 blur-3xl" />
              <div className="relative bg-primary-foreground/5 rounded-3xl border border-primary-foreground/10 p-10 backdrop-blur-sm">
                <WaterStream intensity={80} width={200} height={260} />
                <p className="text-center text-primary-foreground/50 text-sm mt-4 font-medium">
                  Boosted pressure output
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
};

export default HeroSection;

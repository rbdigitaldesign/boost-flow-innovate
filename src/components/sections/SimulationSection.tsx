import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Battery, Droplets, Filter, Gauge } from "lucide-react";
import WaterStream from "../WaterStream";

const SimulationSection = () => {
  const [pressure, setPressure] = useState(30);
  const [pumpPower, setPumpPower] = useState(60);
  const [battery, setBattery] = useState(80);
  const [filterCondition, setFilterCondition] = useState(90);

  const effectivePressure = Math.min(
    100,
    pressure + (pumpPower * (battery / 100) * (filterCondition / 100) * 0.7)
  );

  const flowStrength = effectivePressure > 70 ? "Strong" : effectivePressure > 40 ? "Moderate" : "Weak";
  const sprayDensity = effectivePressure > 60 ? "Dense" : effectivePressure > 30 ? "Normal" : "Sparse";
  const stability = filterCondition > 50 && battery > 20 ? "Stable" : "Fluctuating";

  const ledColor = battery > 60 ? "bg-success" : battery > 25 ? "bg-warning" : "bg-destructive";

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
          Interactive Simulation
        </h2>
        <p className="text-muted-foreground">Adjust conditions to see how ShowerBoost responds in real time.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-xl p-6 space-y-6"
        >
          <h3 className="font-heading font-semibold text-lg">Control Panel</h3>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center gap-2"><Gauge size={16} className="text-primary" /> Incoming Pressure</span>
                <span className="font-mono text-muted-foreground">{pressure}%</span>
              </div>
              <Slider value={[pressure]} onValueChange={([v]) => setPressure(v)} max={100} step={1} />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center gap-2"><Droplets size={16} className="text-primary" /> Pump Power</span>
                <span className="font-mono text-muted-foreground">{pumpPower}%</span>
              </div>
              <Slider value={[pumpPower]} onValueChange={([v]) => setPumpPower(v)} max={100} step={1} />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center gap-2"><Battery size={16} className="text-primary" /> Battery Level</span>
                <span className="font-mono text-muted-foreground">{battery}%</span>
              </div>
              <Slider value={[battery]} onValueChange={([v]) => setBattery(v)} max={100} step={1} />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center gap-2"><Filter size={16} className="text-primary" /> Filter Condition</span>
                <span className="font-mono text-muted-foreground">{filterCondition}%</span>
              </div>
              <Slider value={[filterCondition]} onValueChange={([v]) => setFilterCondition(v)} max={100} step={1} />
            </div>
          </div>
        </motion.div>

        {/* Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card rounded-xl p-6 flex flex-col items-center"
        >
          <h3 className="font-heading font-semibold text-lg mb-4">Output Preview</h3>

          <WaterStream intensity={effectivePressure} width={160} height={180} />

          {/* Status indicators */}
          <div className="grid grid-cols-3 gap-4 mt-6 w-full">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Flow</p>
              <p className="text-sm font-semibold">{flowStrength}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Density</p>
              <p className="text-sm font-semibold">{sprayDensity}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Stability</p>
              <p className="text-sm font-semibold">{stability}</p>
            </div>
          </div>

          {/* LED & indicators */}
          <div className="flex items-center gap-6 mt-6 p-3 rounded-lg bg-secondary/50 w-full justify-center">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${ledColor}`} />
              <span className="text-xs text-muted-foreground">LED Status</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${effectivePressure > 40 ? 'bg-success' : 'bg-warning'}`} />
              <span className="text-xs text-muted-foreground">Pressure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${filterCondition > 30 ? 'bg-success' : 'bg-destructive'}`} />
              <span className="text-xs text-muted-foreground">Filter</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SimulationSection;

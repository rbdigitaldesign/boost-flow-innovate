import { useState } from "react";
import { motion } from "framer-motion";
import { Battery, Droplets, Filter, Gauge, Info } from "lucide-react";
import WaterStream from "../WaterStream";
import { Input } from "@/components/ui/input";

type PumpMode = "off" | "low" | "high";

const SimulationSection = () => {
  const [flowRate, setFlowRate] = useState("6");
  const [pumpMode, setPumpMode] = useState<PumpMode>("low");
  const [battery, setBattery] = useState(80);
  const [filterCondition, setFilterCondition] = useState(90);

  const parsedFlow = Math.max(0, Math.min(25, parseFloat(flowRate) || 0));
  const basePressure = Math.min(100, (parsedFlow / 15) * 100);
  const batteryFactor = battery / 100;
  const pumpBoost = pumpMode === "off" ? 0 : pumpMode === "low" ? 25 * batteryFactor : 50 * batteryFactor;
  const effectivePressure = Math.min(100, basePressure + pumpBoost);
  const flowStrength = effectivePressure > 70 ? "Strong" : effectivePressure > 40 ? "Moderate" : "Weak";
  const outputLpm = Math.min(25, parsedFlow + (pumpMode === "off" ? 0 : pumpMode === "low" ? 2 : 4) * batteryFactor);
  const waterQuality = filterCondition > 70 ? "Clean" : filterCondition > 40 ? "Slightly Cloudy" : filterCondition > 15 ? "Discoloured" : "Very Poor";
  const stability = battery > 20 && pumpMode !== "off" ? "Stable" : pumpMode === "off" ? "Unassisted" : "Fluctuating";
  const ledColor = battery > 60 ? "bg-success" : battery > 25 ? "bg-warning" : "bg-destructive";
  const waterHue = filterCondition > 70 ? 200 : filterCondition > 40 ? 45 : 30;
  const waterSaturation = filterCondition > 70 ? 80 : filterCondition > 40 ? 50 : 40;
  const waterLightness = filterCondition > 70 ? 60 : filterCondition > 40 ? 55 : 45;
  const waterOpacity = filterCondition > 50 ? 0.7 : 0.9;

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Try It</p>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
          Interactive Simulation
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">See how ShowerBoost responds to real-world conditions.</p>
      </div>

      {/* Measurement instructions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-2xl p-6 max-w-2xl mx-auto"
      >
        <div className="flex items-start gap-3">
          <Info size={20} className="text-primary mt-0.5 shrink-0" />
          <div>
            <h4 className="font-heading font-bold text-sm mb-2">How to measure your flow rate</h4>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Get a <strong>10 litre bucket</strong> and a stopwatch</li>
              <li>Turn on your shower at full and time how long it takes to fill</li>
              <li>Divide <strong>10 by the seconds</strong>, then multiply by <strong>60</strong></li>
              <li>Example: 10L in 80 seconds = <strong>7.5 L/min</strong></li>
            </ol>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 space-y-6"
        >
          <h3 className="font-heading font-bold text-lg">Control Panel</h3>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center gap-2"><Gauge size={16} className="text-primary" /> Incoming Flow Rate</span>
              </div>
              <div className="flex items-center gap-3">
                <Input type="number" min={0} max={25} step={0.5} value={flowRate} onChange={(e) => setFlowRate(e.target.value)} className="w-28 font-mono text-center" />
                <span className="text-sm text-muted-foreground">L/min</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Typical range: 4–15 L/min. Below 6 is considered low.</p>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center gap-2"><Droplets size={16} className="text-primary" /> Pump Power</span>
              </div>
              <div className="flex gap-2">
                {(["off", "low", "high"] as PumpMode[]).map((mode) => (
                  <button key={mode} onClick={() => setPumpMode(mode)} className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${pumpMode === mode ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>{mode}</button>
                ))}
              </div>
              {pumpMode !== "off" && battery < 20 && <p className="text-xs text-destructive mt-1">⚠ Low battery — pump performance severely reduced</p>}
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center gap-2"><Battery size={16} className="text-primary" /> Battery Level</span>
                <span className="font-mono text-muted-foreground">{battery}%</span>
              </div>
              <input type="range" min={0} max={100} value={battery} onChange={(e) => setBattery(parseInt(e.target.value))} className="w-full accent-primary h-2" />
              {battery === 0 && pumpMode !== "off" && <p className="text-xs text-destructive mt-1">⚠ Battery dead — pump inactive, no pressure boost</p>}
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="flex items-center gap-2"><Filter size={16} className="text-primary" /> Filter Condition</span>
                <span className="font-mono text-muted-foreground">{filterCondition}%</span>
              </div>
              <input type="range" min={0} max={100} value={filterCondition} onChange={(e) => setFilterCondition(parseInt(e.target.value))} className="w-full accent-primary h-2" />
              {filterCondition < 30 && <p className="text-xs text-destructive mt-1">⚠ Filter needs replacing — water quality degraded</p>}
            </div>
          </div>
        </motion.div>

        {/* Visualization */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 flex flex-col items-center"
        >
          <h3 className="font-heading font-bold text-lg mb-4">Output Preview</h3>
          <WaterStream intensity={effectivePressure} width={160} height={180} waterHue={waterHue} waterSaturation={waterSaturation} waterLightness={waterLightness} waterOpacity={waterOpacity} />

          <div className="grid grid-cols-2 gap-4 mt-6 w-full">
            <div className="text-center p-3 rounded-xl bg-secondary/50">
              <p className="text-xs text-muted-foreground mb-1">Output Flow</p>
              <p className="text-lg font-mono font-extrabold">{outputLpm.toFixed(1)}</p>
              <p className="text-xs text-muted-foreground">L/min</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-secondary/50">
              <p className="text-xs text-muted-foreground mb-1">Flow Strength</p>
              <p className="text-sm font-bold">{flowStrength}</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-secondary/50">
              <p className="text-xs text-muted-foreground mb-1">Water Quality</p>
              <p className={`text-sm font-bold ${filterCondition < 40 ? 'text-destructive' : filterCondition < 70 ? 'text-warning' : ''}`}>{waterQuality}</p>
            </div>
            <div className="text-center p-3 rounded-xl bg-secondary/50">
              <p className="text-xs text-muted-foreground mb-1">Stability</p>
              <p className="text-sm font-bold">{stability}</p>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-4 p-3 rounded-xl bg-secondary/50 w-full justify-center">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${ledColor} ${battery < 15 ? 'animate-pulse' : ''}`} />
              <span className="text-xs text-muted-foreground">Battery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${effectivePressure > 40 ? 'bg-success' : 'bg-warning'}`} />
              <span className="text-xs text-muted-foreground">Pressure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${filterCondition > 30 ? 'bg-success' : 'bg-destructive'} ${filterCondition < 20 ? 'animate-pulse' : ''}`} />
              <span className="text-xs text-muted-foreground">Filter</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SimulationSection;

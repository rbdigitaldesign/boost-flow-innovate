import { motion } from "framer-motion";

const criteria = [
  { label: "Installation", standard: "Already installed", hphead: "Swap head", wholehouse: "Professional required", showerboost: "DIY, 30 seconds" },
  { label: "Cost (AUD)", standard: "$15–50", hphead: "$60–150", wholehouse: "$500–1,200+", showerboost: "$249" },
  { label: "Actual Pressure Boost", standard: "None", hphead: "None (nozzle physics only)", wholehouse: "High", showerboost: "0.5–1.5 bar" },
  { label: "How It Works", standard: "Basic nozzle", hphead: "Jet acceleration, aeration, vortex chambers", wholehouse: "Mains pump + accumulator", showerboost: "Magnetic drive micro-pump" },
  { label: "Portability", standard: "Fixed", hphead: "Semi-portable", wholehouse: "Fixed", showerboost: "Fully portable" },
  { label: "Energy Use", standard: "None", hphead: "None", wholehouse: "High (240V)", showerboost: "Low (battery, 40–80W)" },
  { label: "Noise", standard: "Silent", hphead: "Silent", wholehouse: "Moderate–Loud", showerboost: "Target <45dB" },
  { label: "Maintenance", standard: "None", hphead: "None", wholehouse: "Annual service", showerboost: "Replace filter, charge battery" },
];

const headers = ["Standard Head", "High-Pressure Head", "Whole House Pump", "ShowerBoost"];

const bomItems = [
  { part: "Pump & motor", cost: "$20–40" },
  { part: "Battery (Li-ion)", cost: "$10–20" },
  { part: "Electronics & PCB", cost: "$8–15" },
  { part: "Housing & seals", cost: "$10–15" },
  { part: "Filter & connectors", cost: "$5–10" },
  { part: "Assembly", cost: "$8–12" },
];

const ComparisonSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Compare</p>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
          How It Compares
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          See how ShowerBoost stacks up — including high-pressure shower heads that feel stronger but don't actually boost pressure.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl overflow-hidden max-w-5xl mx-auto"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-muted-foreground font-medium">Criteria</th>
                {headers.map((h, i) => (
                  <th key={i} className={`p-4 text-center font-heading font-bold text-xs md:text-sm ${i === 3 ? 'water-gradient text-primary-foreground' : ''}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0">
                  <td className="p-4 font-semibold text-xs md:text-sm">{row.label}</td>
                  <td className="p-4 text-center text-muted-foreground text-xs md:text-sm">{row.standard}</td>
                  <td className="p-4 text-center text-muted-foreground text-xs md:text-sm">{row.hphead}</td>
                  <td className="p-4 text-center text-muted-foreground text-xs md:text-sm">{row.wholehouse}</td>
                  <td className="p-4 text-center font-bold text-primary text-xs md:text-sm">{row.showerboost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Manufacturing Cost Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-2xl p-6 md:p-8 max-w-md mx-auto"
      >
        <h3 className="font-heading font-bold text-lg mb-1 text-center">Manufacturing Cost Estimate</h3>
        <p className="text-xs text-muted-foreground text-center mb-4">Bill of Materials at scale</p>
        <div className="space-y-2">
          {bomItems.map((item, i) => (
            <div key={i} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{item.part}</span>
              <span className="font-semibold">{item.cost}</span>
            </div>
          ))}
          <div className="border-t border-border pt-2 mt-3 flex justify-between text-sm">
            <span className="font-bold">Total BOM</span>
            <span className="font-bold text-primary">~$60–110</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-bold">Target Retail</span>
            <span className="font-bold text-primary">$249</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComparisonSection;

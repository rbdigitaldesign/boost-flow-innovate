import { motion } from "framer-motion";

const criteria = [
  { label: "Installation", standard: "Already installed", wholehouse: "Professional required", showerboost: "DIY, 30 seconds" },
  { label: "Cost (AUD)", standard: "$15–50", wholehouse: "$500–1,200+", showerboost: "~$100–130" },
  { label: "Pressure Improvement", standard: "None", wholehouse: "High", showerboost: "Moderate–High" },
  { label: "Portability", standard: "Fixed", wholehouse: "Fixed", showerboost: "Fully portable" },
  { label: "Energy Use", standard: "None", wholehouse: "High", showerboost: "Low (battery)" },
  { label: "Maintenance", standard: "None", wholehouse: "Annual service", showerboost: "Replace filter" },
];

const headers = ["Standard Shower Head", "Whole House Pump", "ShowerBoost"];

const ComparisonSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Compare</p>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
          How It Compares
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          See how ShowerBoost stacks up against alternatives.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl overflow-hidden max-w-4xl mx-auto"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-5 text-muted-foreground font-medium">Criteria</th>
                {headers.map((h, i) => (
                  <th key={i} className={`p-5 text-center font-heading font-bold ${i === 2 ? 'water-gradient text-primary-foreground' : ''}`}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0">
                  <td className="p-5 font-semibold">{row.label}</td>
                  <td className="p-5 text-center text-muted-foreground">{row.standard}</td>
                  <td className="p-5 text-center text-muted-foreground">{row.wholehouse}</td>
                  <td className="p-5 text-center font-bold text-primary">{row.showerboost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default ComparisonSection;

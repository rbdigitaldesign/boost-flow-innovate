import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const criteria = [
  { label: "Installation", standard: "Already installed", wholehouse: "Professional required", showerboost: "DIY, 30 seconds" },
  { label: "Cost", standard: "£10–30", wholehouse: "£300–800+", showerboost: "~£60–80" },
  { label: "Pressure Improvement", standard: "None", wholehouse: "High", showerboost: "Moderate–High" },
  { label: "Portability", standard: "Fixed", wholehouse: "Fixed", showerboost: "Fully portable" },
  { label: "Energy Use", standard: "None", wholehouse: "High", showerboost: "Low (battery)" },
  { label: "Maintenance", standard: "None", wholehouse: "Annual service", showerboost: "Replace filter" },
];

const headers = ["Standard Shower Head", "Whole House Pump", "ShowerBoost"];

const ComparisonSection = () => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">How It Compares</h2>
        <p className="text-muted-foreground">See how ShowerBoost stacks up against alternatives.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-xl overflow-hidden max-w-4xl mx-auto"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 text-muted-foreground font-medium">Criteria</th>
                {headers.map((h, i) => (
                  <th
                    key={i}
                    className={`p-4 text-center font-heading font-semibold ${i === 2 ? 'water-gradient text-primary-foreground' : ''}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((row, i) => (
                <tr key={i} className="border-b border-border/50 last:border-0">
                  <td className="p-4 font-medium">{row.label}</td>
                  <td className="p-4 text-center text-muted-foreground">{row.standard}</td>
                  <td className="p-4 text-center text-muted-foreground">{row.wholehouse}</td>
                  <td className="p-4 text-center font-semibold text-primary">{row.showerboost}</td>
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

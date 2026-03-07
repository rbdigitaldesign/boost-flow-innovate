import { motion } from "framer-motion";
import { Cpu, Home, ShieldAlert, Users, FileCheck } from "lucide-react";

const reasons = [
  {
    icon: Cpu,
    title: "Miniaturisation is Hard",
    description:
      "Shrinking a pump powerful enough to meaningfully boost water pressure into a compact, quiet, inline device requires advances in micro-motor and impeller design that have only recently become viable.",
  },
  {
    icon: Home,
    title: "Existing Solutions 'Work'",
    description:
      "Whole-house pumps and high-pressure showerheads already address the problem — but they're expensive, permanently installed, or barely effective. There's been little incentive to innovate in the portable space.",
  },
  {
    icon: ShieldAlert,
    title: "Battery + Water = Caution",
    description:
      "Combining lithium batteries with wet environments raises safety, certification, and liability concerns that deter most manufacturers from attempting the product.",
  },
  {
    icon: Users,
    title: "Perceived as a Niche Problem",
    description:
      "Low shower pressure affects millions of renters and apartment dwellers, yet it's often dismissed as a minor inconvenience — not a problem worth building a new product category around.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Barriers",
    description:
      "Waterproofing certifications (IPX ratings), electrical safety standards, and plumbing compliance create costly hurdles that keep startups out of the space.",
  },
];

const WhyNotExistSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          The Gap
        </p>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
          Why Doesn't This Already Exist?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Good question. Here's why the market has left this problem unsolved — and why the timing is right.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-2xl p-6 space-y-3"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <reason.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg">{reason.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyNotExistSection;

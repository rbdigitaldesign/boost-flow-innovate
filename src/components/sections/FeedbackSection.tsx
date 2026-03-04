import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageSquare } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const interestLevels = ["Just curious", "Would consider buying", "Would buy immediately", "Want to invest"];

const FeedbackSection = () => {
  const { toast } = useToast();
  const [features, setFeatures] = useState("");
  const [problems, setProblems] = useState("");
  const [interest, setInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!interest) {
      toast({ title: "Please select your interest level", variant: "destructive" });
      return;
    }
    console.log("Feedback submitted:", { features, problems, interest });
    setSubmitted(true);
    toast({ title: "Thank you!", description: "Your feedback helps shape the future of ShowerBoost." });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-12 max-w-lg mx-auto text-center"
      >
        <MessageSquare className="mx-auto text-primary mb-4" size={48} />
        <h2 className="text-2xl font-heading font-extrabold mb-2">Feedback Received!</h2>
        <p className="text-muted-foreground">
          Your suggestions may help shape future versions of this product. Thank you for contributing to the concept.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Get Involved</p>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
          Share Your Thoughts
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Help us understand what matters most to you. Your feedback shapes this product.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl p-8 max-w-2xl mx-auto space-y-6"
      >
        <div>
          <label className="text-sm font-bold mb-2 block">What features would you want?</label>
          <Textarea value={features} onChange={(e) => setFeatures(e.target.value)} placeholder="e.g. Bluetooth control, temperature display, eco mode..." className="bg-secondary/50 border-border/50 rounded-xl" />
        </div>

        <div>
          <label className="text-sm font-bold mb-2 block">What problems could this solve for you?</label>
          <Textarea value={problems} onChange={(e) => setProblems(e.target.value)} placeholder="e.g. My apartment has terrible pressure, I rent and can't install a pump..." className="bg-secondary/50 border-border/50 rounded-xl" />
        </div>

        <div>
          <label className="text-sm font-bold mb-3 block">Interest level</label>
          <div className="grid grid-cols-2 gap-2">
            {interestLevels.map((level) => (
              <button
                key={level}
                onClick={() => setInterest(level)}
                className={`p-3.5 rounded-xl text-sm font-medium border-2 transition-all ${
                  interest === level
                    ? 'water-gradient text-primary-foreground border-transparent shadow-md'
                    : 'bg-secondary/50 border-border/50 hover:border-primary/40'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full water-gradient text-primary-foreground py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
        >
          <Send size={18} />
          Submit Feedback
        </button>

        <p className="text-xs text-muted-foreground text-center">
          Your suggestions may help shape future versions of the product.
        </p>
      </motion.div>
    </div>
  );
};

export default FeedbackSection;

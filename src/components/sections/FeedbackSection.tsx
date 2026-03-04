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
    // Mock store
    console.log("Feedback submitted:", { features, problems, interest });
    setSubmitted(true);
    toast({ title: "Thank you!", description: "Your feedback helps shape the future of ShowerBoost." });
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-2xl p-12 max-w-lg mx-auto text-center"
      >
        <MessageSquare className="mx-auto text-primary mb-4" size={48} />
        <h2 className="text-2xl font-heading font-bold mb-2">Feedback Received!</h2>
        <p className="text-muted-foreground">
          Your suggestions may help shape future versions of this product. Thank you for contributing to the concept.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Share Your Thoughts</h2>
        <p className="text-muted-foreground">Help us understand what matters most to you.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="glass-card rounded-xl p-6 max-w-2xl mx-auto space-y-5"
      >
        <div>
          <label className="text-sm font-medium mb-2 block">What features would you want?</label>
          <Textarea
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
            placeholder="e.g. Bluetooth control, temperature display, eco mode..."
            className="bg-secondary/50 border-border/50"
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-2 block">What problems could this solve for you?</label>
          <Textarea
            value={problems}
            onChange={(e) => setProblems(e.target.value)}
            placeholder="e.g. My apartment has terrible pressure, I rent and can't install a pump..."
            className="bg-secondary/50 border-border/50"
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-3 block">Interest level</label>
          <div className="grid grid-cols-2 gap-2">
            {interestLevels.map((level) => (
              <button
                key={level}
                onClick={() => setInterest(level)}
                className={`p-3 rounded-lg text-sm font-medium border transition-all ${
                  interest === level
                    ? 'water-gradient text-primary-foreground border-transparent'
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
          className="w-full water-gradient text-primary-foreground py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
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

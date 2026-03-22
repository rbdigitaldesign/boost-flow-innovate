import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Battery, Flame, Droplets, Shield, Thermometer, Volume2 } from "lucide-react";

const questions = [
  {
    icon: Battery,
    title: "Power Budget vs Runtime",
    content:
      "At 40–80W draw, a 30Wh battery (three 18650 cells at 7.4–11.1V) would provide approximately 20–45 minutes of runtime — roughly 3–5 showers before recharging. This assumes 70–85% pump efficiency under load. Real-world efficiency depends on inlet pressure, flow resistance, and motor thermal losses. Conservative estimate: 3 showers at full boost, potentially more at lower pressure-boost settings with PWM speed control.",
  },
  {
    icon: Droplets,
    title: "Cavitation Risk",
    content:
      "Small pumps operating at 8,000–20,000 RPM with potentially aerated municipal water face cavitation risk — vapour bubbles forming and collapsing on the impeller, causing noise, vibration, and erosion. Risk increases with low inlet pressure (below ~0.5 bar), high water temperature, and dissolved air. Mitigation: inlet pressure sensing to limit RPM, a small stabilisation chamber before the impeller, and impeller geometry designed for low-NPSH operation. Municipal water at typical temperatures should be manageable if RPM is properly controlled.",
  },
  {
    icon: Flame,
    title: "Thermal Management",
    content:
      "40–80W dissipated inside a sealed 120mm × 60mm cylinder. The wet chamber benefits from continuous water flow acting as a heat sink — water entering at 30–40°C absorbs significant thermal energy. The dry chamber (motor, battery, electronics) is the concern. At 80W with 85% efficiency, ~12W becomes waste heat in the dry chamber. Passive aluminium heat sinking through the housing wall to the water path may be sufficient for 8–12 minute shower cycles, but sustained operation could push battery cell temperatures above safe limits (>60°C). Thermal cutoff circuitry is essential.",
  },
  {
    icon: Shield,
    title: "Waterproofing Architecture",
    content:
      "The dual-chamber design — wet chamber (impeller, water path) and dry chamber (motor, battery, electronics) — uses o-rings, gaskets, and ultrasonic-welded housing joints targeting IPX7 or higher. The magnetic drive coupling eliminates the shaft seal, which is traditionally the primary failure point. However, constant steam exposure in a shower environment degrades elastomers over time. Material selection (EPDM or silicone o-rings, marine-grade seals) and regular battery cartridge removal/inspection could achieve a 2+ year consumer lifespan, but accelerated life testing would be critical before market launch.",
  },
  {
    icon: Thermometer,
    title: "The Mixer Valve Problem",
    content:
      "This may be the biggest technical risk. Thermostatic and pressure-balance mixer valves are designed to maintain a set temperature ratio by adjusting flow in response to pressure changes. If the pump boosts pressure on the mixed output side (downstream of the valve), it creates a pressure differential that the valve may compensate for — potentially cancelling the boost. However, because the pump is downstream and simply accelerating the already-mixed flow, it shouldn't trigger the valve's balancing mechanism in most installations. The pump reduces downstream resistance rather than creating upstream pressure. Real-world testing across valve types is essential to validate this assumption.",
  },
  {
    icon: Volume2,
    title: "Noise Target: Under 45dB",
    content:
      "A brushless motor running at 8,000–20,000 RPM in a small, resonant housing attached to plumbing creates multiple noise vectors: motor whine, impeller turbulence, water cavitation, and structural vibration transmitted through pipes to bathroom walls. Mitigation: rubber motor mounts to decouple vibration, a dynamically balanced impeller, soft-start PWM ramping, and acoustic damping material in the housing cavity. Comparable aquarium pumps achieve 35–45dB at similar flow rates, but they aren't attached to resonant plumbing. Achievable, but will require iterative prototype testing — likely the hardest spec to hit consistently.",
  },
];

const EngineeringDeepDiveSection = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          Feasibility
        </p>
        <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 tracking-tight">
          Engineering Deep Dive
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Honest answers to the hard engineering questions. No hand-waving — just physics.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-3xl p-6 md:p-8 max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="w-full">
          {questions.map((q, i) => {
            const Icon = q.icon;
            return (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="hover:no-underline gap-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-heading font-bold">{q.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pl-11">
                  {q.content}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </motion.div>
    </div>
  );
};

export default EngineeringDeepDiveSection;

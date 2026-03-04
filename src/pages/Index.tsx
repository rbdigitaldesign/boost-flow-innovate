import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Box, SlidersHorizontal, RotateCcw, LayoutGrid, BarChart3, MessageSquare } from "lucide-react";
import ProblemSection from "@/components/sections/ProblemSection";
import ProductConceptSection from "@/components/sections/ProductConceptSection";
import SimulationSection from "@/components/sections/SimulationSection";
import RecirculationSection from "@/components/sections/RecirculationSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FeedbackSection from "@/components/sections/FeedbackSection";

const tabs = [
  { id: "problem", label: "The Problem", icon: Droplets },
  { id: "product", label: "The Device", icon: Box },
  { id: "simulation", label: "Simulate", icon: SlidersHorizontal },
  { id: "recirculation", label: "How It Works", icon: RotateCcw },
  { id: "features", label: "Features", icon: LayoutGrid },
  { id: "comparison", label: "Compare", icon: BarChart3 },
  { id: "feedback", label: "Feedback", icon: MessageSquare },
];

const Index = () => {
  const [activeTab, setActiveTab] = useState("problem");

  const goToTab = (id: string) => setActiveTab(id);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-b border-border/50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg water-gradient flex items-center justify-center">
              <Droplets size={18} className="text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-lg">ShowerBoost</span>
          </div>
          <p className="text-xs text-muted-foreground hidden sm:block">Interactive Product Concept</p>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="sticky top-[57px] z-40 bg-background/90 backdrop-blur-sm border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => goToTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? "water-gradient text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:bg-secondary"
                }`}
              >
                <tab.icon size={14} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === "problem" && <ProblemSection onNext={() => goToTab("product")} />}
            {activeTab === "product" && <ProductConceptSection />}
            {activeTab === "simulation" && <SimulationSection />}
            {activeTab === "recirculation" && <RecirculationSection />}
            {activeTab === "features" && <FeaturesSection />}
            {activeTab === "comparison" && <ComparisonSection />}
            {activeTab === "feedback" && <FeedbackSection />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-6 text-center">
        <p className="text-xs text-muted-foreground">
          ShowerBoost — Concept Prototype · Not a final product · For demonstration and feedback purposes
        </p>
      </footer>
    </div>
  );
};

export default Index;

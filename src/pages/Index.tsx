import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTABanner from "@/components/CTABanner";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ProductConceptSection from "@/components/sections/ProductConceptSection";
import RecirculationSection from "@/components/sections/RecirculationSection";
import SimulationSection from "@/components/sections/SimulationSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FeedbackSection from "@/components/sections/FeedbackSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection />

      <SectionWrapper id="problem">
        <ProblemSection />
      </SectionWrapper>

      <CTABanner
        headline="Ready to see the solution?"
        description="Discover how ShowerBoost transforms your daily shower experience."
        buttonText="See the Device →"
        targetId="product"
      />

      <SectionWrapper id="product" wave>
        <ProductConceptSection />
      </SectionWrapper>

      <SectionWrapper id="how-it-works" className="water-gradient-subtle">
        <RecirculationSection />
      </SectionWrapper>

      <CTABanner
        headline="Curious how it performs?"
        description="Use our interactive simulator to test ShowerBoost with your actual water pressure."
        buttonText="Try the Simulator →"
        targetId="simulation"
        dark
      />

      <SectionWrapper id="simulation">
        <SimulationSection />
      </SectionWrapper>

      <SectionWrapper id="features" className="water-gradient-subtle">
        <FeaturesSection />
      </SectionWrapper>

      <SectionWrapper id="comparison">
        <ComparisonSection />
      </SectionWrapper>

      <CTABanner
        headline="Help shape the future of ShowerBoost"
        description="Your feedback directly influences the next version of this product."
        buttonText="Share Your Thoughts →"
        targetId="feedback"
        dark
      />

      <SectionWrapper id="feedback">
        <FeedbackSection />
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Index;

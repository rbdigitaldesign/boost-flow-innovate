import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import CTABanner from "@/components/CTABanner";
import ParallaxBanner from "@/components/ParallaxBanner";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ProductConceptSection from "@/components/sections/ProductConceptSection";
import RecirculationSection from "@/components/sections/RecirculationSection";
import SimulationSection from "@/components/sections/SimulationSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import WhyNotExistSection from "@/components/sections/WhyNotExistSection";
import EngineeringDeepDiveSection from "@/components/sections/EngineeringDeepDiveSection";
import WhatsInTheBoxSection from "@/components/sections/WhatsInTheBoxSection";
import FeedbackSection from "@/components/sections/FeedbackSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection />

      <SectionWrapper id="problem">
        <ProblemSection />
      </SectionWrapper>

      <ParallaxBanner image="/images/product-installation.png" height="h-[75vh] md:h-[85vh]" bgPosition="top">
        <div className="text-center">
          <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4">
            Installs in 30 Seconds
          </h3>
          <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto">
            Just unscrew your shower head, screw on ShowerBoost, and reattach. No tools. No plumber. Done.
          </p>
        </div>
      </ParallaxBanner>

      <SectionWrapper id="product" wave>
        <ProductConceptSection />
      </SectionWrapper>

      <SectionWrapper id="how-it-works" className="water-gradient-subtle">
        <RecirculationSection />
      </SectionWrapper>

      <ParallaxBanner image="/images/shower-fixture.jpg" height="h-[300px]">
        <div className="text-center">
          <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-primary-foreground mb-3">
            Curious how it performs?
          </h3>
          <p className="text-primary-foreground/70 text-base max-w-md mx-auto mb-6">
            Use our interactive simulator to test ShowerBoost with your actual water pressure.
          </p>
          <button
            onClick={() => document.getElementById("simulation")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary-foreground text-water-deep font-bold rounded-full shadow-lg hover:scale-105 transition-all"
          >
            Try the Simulator →
          </button>
        </div>
      </ParallaxBanner>

      <SectionWrapper id="simulation">
        <SimulationSection />
      </SectionWrapper>

      <ParallaxBanner image="/images/showerhead-closeup.jpg" height="h-[350px]">
        <div className="text-center">
          <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4">
            Built to Last, Designed to Impress
          </h3>
          <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto">
            Premium materials. Sleek design. Powerful performance.
          </p>
        </div>
      </ParallaxBanner>

      <SectionWrapper id="features" className="water-gradient-subtle">
        <FeaturesSection />
      </SectionWrapper>

      <SectionWrapper id="comparison">
        <ComparisonSection />
      </SectionWrapper>

      <SectionWrapper id="why-not-exist" className="water-gradient-subtle">
        <WhyNotExistSection />
      </SectionWrapper>

      <SectionWrapper id="whats-in-the-box">
        <WhatsInTheBoxSection />
      </SectionWrapper>

      <ParallaxBanner image="/images/water-splash.jpg" height="h-[350px]">
        <div className="text-center">
          <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4">
            Help Shape the Future of ShowerBoost
          </h3>
          <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto mb-6">
            Your feedback directly influences the next version of this product.
          </p>
          <button
            onClick={() => document.getElementById("feedback")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary-foreground text-water-deep font-bold rounded-full shadow-lg hover:scale-105 transition-all"
          >
            Share Your Thoughts →
          </button>
        </div>
      </ParallaxBanner>

      <SectionWrapper id="feedback">
        <FeedbackSection />
      </SectionWrapper>

      <Footer />
    </div>
  );
};

export default Index;

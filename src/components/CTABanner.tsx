import { motion } from "framer-motion";

interface CTABannerProps {
  headline: string;
  description: string;
  buttonText: string;
  targetId: string;
  dark?: boolean;
}

const CTABanner = ({ headline, description, buttonText, targetId, dark = false }: CTABannerProps) => {
  return (
    <section className={`py-16 ${dark ? "water-gradient-dark" : "water-gradient-subtle"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <h3 className={`font-heading font-extrabold text-2xl md:text-3xl mb-3 ${dark ? "text-primary-foreground" : ""}`}>
          {headline}
        </h3>
        <p className={`text-base mb-6 max-w-lg mx-auto ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {description}
        </p>
        <button
          onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })}
          className={`px-8 py-3.5 rounded-full font-bold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all ${
            dark
              ? "bg-primary-foreground text-water-deep"
              : "water-gradient text-primary-foreground"
          }`}
        >
          {buttonText}
        </button>
      </motion.div>
    </section>
  );
};

export default CTABanner;

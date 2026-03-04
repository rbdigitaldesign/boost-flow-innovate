import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  wave?: boolean;
}

const SectionWrapper = ({ id, children, className = "", dark = false, wave = false }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 scroll-mt-20 ${dark ? "water-gradient-dark text-primary-foreground" : ""} ${wave ? "wave-bg" : ""} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;

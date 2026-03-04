import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, Menu, X } from "lucide-react";

const navLinks = [
  { id: "problem", label: "The Problem" },
  { id: "product", label: "The Device" },
  { id: "how-it-works", label: "How It Works" },
  { id: "simulation", label: "Simulate" },
  { id: "features", label: "Features" },
  { id: "comparison", label: "Compare" },
  { id: "feedback", label: "Feedback" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/40 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl water-gradient flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Droplets size={18} className="text-primary-foreground" />
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight">
            Shower<span className="text-gradient">Boost</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/60 rounded-lg transition-all"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("feedback")}
            className="ml-2 px-5 py-2 water-gradient text-primary-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity shadow-md"
          >
            Get Involved
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/40 bg-card/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/60 rounded-lg transition-all"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("feedback")}
                className="mt-2 px-5 py-3 water-gradient text-primary-foreground text-sm font-bold rounded-full text-center"
              >
                Get Involved
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

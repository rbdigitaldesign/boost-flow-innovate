import { motion } from "framer-motion";
import { useMemo } from "react";

interface WaterStreamProps {
  intensity: number; // 0-100
  width?: number;
  height?: number;
}

const WaterStream = ({ intensity, width = 120, height = 200 }: WaterStreamProps) => {
  const droplets = useMemo(() => {
    const count = Math.floor((intensity / 100) * 30) + 3;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * (width * 0.6),
      delay: Math.random() * 1.2,
      size: 2 + Math.random() * (intensity / 25),
      speed: 0.6 + Math.random() * 0.8,
    }));
  }, [intensity, width]);

  return (
    <div className="relative flex items-start justify-center" style={{ width, height }}>
      {/* Shower head */}
      <div className="absolute top-0 w-16 h-3 rounded-b-lg chrome-gradient" />
      
      {/* Water drops */}
      {droplets.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute rounded-full"
          style={{
            left: `calc(50% + ${drop.x}px)`,
            top: 12,
            width: drop.size,
            height: drop.size * 2.5,
            background: `linear-gradient(180deg, hsl(200 80% ${70 - intensity * 0.2}%), hsl(205 90% ${50 - intensity * 0.1}%))`,
          }}
          animate={{
            y: [0, height - 20],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: drop.speed,
            repeat: Infinity,
            delay: drop.delay,
            ease: "easeIn",
          }}
        />
      ))}

      {/* Splash at bottom */}
      {intensity > 30 && (
        <motion.div
          className="absolute bottom-0 rounded-full water-gradient"
          style={{ width: intensity * 0.8, height: 4 }}
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </div>
  );
};

export default WaterStream;

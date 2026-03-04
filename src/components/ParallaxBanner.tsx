import { useEffect, useRef, useState } from "react";

interface ParallaxBannerProps {
  image: string;
  height?: string;
  overlay?: boolean;
  children?: React.ReactNode;
}

const ParallaxBanner = ({ image, height = "h-[400px]", overlay = true, children }: ParallaxBannerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const visible = rect.top < windowHeight && rect.bottom > 0;
      if (visible) {
        setOffset((rect.top / windowHeight) * 80);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      <div
        className="absolute inset-0 w-full h-[130%] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${image})`,
          transform: `translateY(${offset - 40}px)`,
        }}
      />
      {overlay && <div className="absolute inset-0 bg-water-deep/50" />}
      {children && (
        <div className="relative z-10 flex items-center justify-center h-full container mx-auto px-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default ParallaxBanner;

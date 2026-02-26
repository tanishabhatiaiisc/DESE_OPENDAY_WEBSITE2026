import { useState, useEffect } from "react";
import { RiArrowUpSLine } from "@remixicon/react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-10 right-10 z-50 
      bg-[#2E2388] text-white p-5 rounded-full 
      shadow-lg transition-transform duration-300 
      hover:scale-110"
      aria-label="Back to top"
    >
      <RiArrowUpSLine className="w-8 h-8" />
    </button>
  );
};

export default ScrollToTopButton;

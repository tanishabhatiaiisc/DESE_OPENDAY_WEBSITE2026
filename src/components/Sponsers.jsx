import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import TexasInstrument from "../assets/TexasInstruments-Logo.svg";

const Sponsors = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          x: "-50%",
          duration: 30,
          repeat: -1,
          ease: "linear",
        });
      }
    }, 1000);
  }, []);

  const logos = [
    // TexasInstrument,
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457484/TalentSprint_Logo__JPG_ji5eww.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457484/JPEG_ISWDP_Logo_aiqbsn.jpg",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457484/L2M_logo_nel4po.png",
    "https://res.cloudinary.com/dtgkwatby/image/upload/v1747457484/Sasken_eshtjk.jpg",
  ];

  return (
    <div className="relative py-12 sm:py-16 md:py-24 overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to- opacity-95"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r p-1 from-white to-blue-500 bg-clip-text text-transparent">
          Our Sponsors
        </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4 font-medium">
            Proud to be supported by industry leaders who share our vision for innovation
          </p>
        </div>

        <div className="relative mx-auto w-full overflow-hidden py-6 sm:py-8 md:py-12 bg-gray-900/70
          before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[50px] sm:before:w-[75px] md:before:w-[100px] before:bg-gradient-to-r before:from-gray-900 before:to-transparent 
          after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[50px] sm:after:w-[75px] md:after:w-[100px] after:bg-gradient-to-l after:from-gray-900 after:to-transparent">
          <div
            ref={marqueeRef}
            className="flex items-center space-x-8 sm:space-x-12 md:space-x-20 whitespace-nowrap"
            style={{ width: "max-content" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="group relative flex items-center justify-center h-16 w-32 sm:h-20 sm:w-40 md:h-24 md:w-48 rounded-xl bg-white/50 backdrop-blur-sm border border-white/30 hover:border-white/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30"
              >
                <img
                  src={logo}
                  alt="Sponsor Logo"
                  className="h-8 sm:h-10 md:h-12 w-auto opacity-100 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
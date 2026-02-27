import React from "react";
import LTM from "../assets/ltm_logo.png"; // Use RED version

const Sponsors = () => {
  return (
    <div className="relative py-16 md:py-24 backdrop-blur-sm">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-500 bg-clip-text text-transparent">
            Our Sponsor
          </h2>

          <p className="text-gray-300 text-lg max-w-xl mx-auto mt-4">
            Proudly supported by our industry partner
          </p>
        </div>

        {/* Sponsor Card */}
        <div className="flex justify-center">
          <div className="relative group bg-white/80 backdrop-blur-xl p-10 rounded-2xl border border-white/40 shadow-2xl transition-all duration-500 hover:shadow-red-500/40 hover:scale-105">

            <img
              src={LTM}
              alt="LTM Sponsor Logo"
              className="h-20 md:h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
            />

            {/* Soft Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition duration-500"></div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Sponsors;
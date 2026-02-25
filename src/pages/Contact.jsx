import React from "react";
import DESELogoLeft from "../assets/new_logo_orange.png";
import IISCBuilding from "../assets/IISC main building svg.svg";

const Contact = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#030418] to-[#0a0b2e] text-white min-h-screen flex flex-col items-center p-6">

      {/* Logo */}
      <div className="w-full mb-4 sm:mb-0">
        <img
          src={DESELogoLeft}
          alt="DESE Logo"
          className="h-[100px] md:h-[120px] transition-transform duration-300 hover:scale-110 
          mx-auto sm:absolute sm:top-8 sm:left-8"
          style={{
            filter:
              "invert(42%) sepia(75%) saturate(600%) hue-rotate(350deg) brightness(95%) contrast(105%)",
          }}
        />
      </div>

      {/* Heading */}
      <div className="text-amber-500 text-center mt-20">
        <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
          Contact Us
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Background Image */}
      <img
        src={IISCBuilding}
        alt="IISC Building"
        className="fixed w-full h-full object-contain object-center"
        style={{
          filter: "brightness(0) invert(1)",
          opacity: 0.2,
          zIndex: -1,
        }}
      />

      {/* Contact Sections */}
      <div className="w-full max-w-5xl mt-14 space-y-12">

       {/* Website Team */}
<div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10 shadow-xl hover:scale-[1.02] transition-all duration-300">
  <h2 className="text-2xl font-bold text-amber-400 mb-6 text-center">
    Website Team
  </h2>

  <p className="text-center text-xl md:text-2xl font-semibold text-white tracking-wide">
    Sayantika Roy • Tanisha Bhatia • Shubham Lanjewar • Sujay Ghosh
  </p>
</div>

        {/* Event Coordinator */}
<div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10 shadow-xl hover:scale-[1.02] transition-all duration-300">
  <h2 className="text-2xl font-bold text-amber-400 mb-8 text-center">
    Event Coordinator
  </h2>

  <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-center md:text-left">
    
    <div className="space-y-2">
      <p className="text-xl font-semibold text-white">Pranjal Upadhyay</p>
      <p>Email: pranjalu@iisc.ac.in</p>
      <p>Contact: +91-8218017135</p>
    </div>

    <div className="space-y-2">
      <p className="text-xl font-semibold text-white"> Chirag Purwar</p>
      <p>Email: chiragpurwar@iisc.ac.in</p>
      <p>Contact: +91-8543838080</p>
    </div>

  </div>
</div>

        {/* Hackathon Coordinator */}
<div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10 shadow-xl hover:scale-[1.02] transition-all duration-300">
  <h2 className="text-2xl font-bold text-amber-400 mb-8 text-center">
    Hackathon Coordinator
  </h2>

  <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-center md:text-left">
    
    <div className="space-y-2">
      <p className="text-xl font-semibold text-white">Name 1</p>
      <p>Email: hack1@email.com</p>
      <p>Contact: +91-XXXXXXXXXX</p>
    </div>

    <div className="space-y-2">
      <p className="text-xl font-semibold text-white">Name 2</p>
      <p>Email: hack2@email.com</p>
      <p>Contact: +91-XXXXXXXXXX</p>
    </div>

  </div>
</div>

      </div>
    </div>
  );
};

export default Contact;

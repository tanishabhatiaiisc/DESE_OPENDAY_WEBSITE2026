import React from "react";
import DESELogoLeft from "../assets/new_logo_orange.png";
import IISCBuilding from "../assets/IISC main building svg.svg";
import IISCMasterSealBlack from "../assets/IISC MasterSealBlack.svg";

const Contact = () => {
  return (
    <div className="relative z-0 min-h-screen bg-gradient-to-b from-[#030418] to-[#0a0b2e] text-white flex flex-col items-center p-6">

     {/* Logo above banner on mobile, absolute on larger screens */}
      <div className="w-full mb-4 sm:mb-0">
        <img
          src={DESELogoLeft}
          alt="DESE Logo"
          className="h-[clamp(40px,6vw,110px)] transition-all duration-300 hover:scale-110 hover:brightness-125" 
         
          style={{
            filter:
              "invert(42%) sepia(75%) saturate(600%) hue-rotate(350deg) brightness(95%) contrast(105%)",
          }}
        />
        {/* IISC Logo (Top Right) */}
        <img
          src={IISCMasterSealBlack}
          alt="IISC Logo"
          className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 
                    h-[50px] sm:h-[70px] md:h-[120px] 
                    transition-all duration-300 hover:scale-110 hover:brightness-125"
          style={{
            filter: "brightness(0) invert(1)",
          }}
        />
      </div>
      {/* Title */}
      <div className="mt-20 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 animate-text-glow">
          Contact Us
        </h1>

        <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto">
          Reach out to the team for queries regarding Open Day events and activities.
        </p>
      </div>

      {/* Background Image */}
      <img
        src={IISCBuilding}
        alt="IISC Building"
        className="fixed w-full h-full object-contain object-center"
        style={{
          filter: "brightness(0) invert(1)",
          opacity: 0.15,
          zIndex: -1,
        }}
      />

      {/* Contact Sections */}
      <div className="w-full max-w-5xl mt-16 space-y-12">

        {/* Hackathon Coordinator */}
        <div className="relative bg-[#0a0b2e]/80 p-10 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-500">
          
          <h2 className="text-2xl font-bold text-blue-300 mb-8 text-center">
            Hackathon Coordinators
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-gray-300 text-center place-items-center">
            
            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">Debasmita Deoghuria</p>
              <p>Email: ddebasmita@iisc.ac.in</p>
              <p>Contact: +91-9831343698</p>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">Aniket Sarkar</p>
              <p>Email: aniketsarkar@iisc.ac.in</p>
              <p>Contact: +91-8002746733</p>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">Bibhore Goswami</p>
              <p>Email: bibhoreg@iisc.ac.in</p>
              <p>Contact: +91-9733037441</p>
            </div>

          </div>
        </div>

        {/* Event Coordinator */}
        <div className="relative bg-[#0a0b2e]/80 p-10 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-500">
          
          <h2 className="text-2xl font-bold text-blue-300 mb-8 text-center">
            Event Coordinators
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-gray-300 text-center place-items-center">
            
            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">Pranjal Upadhyay</p>
              <p>Email: pranjalu@iisc.ac.in</p>
              <p>Contact: +91-8218017135</p>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">Chirag Purwar</p>
              <p>Email: chiragpurwar@iisc.ac.in</p>
              <p>Contact: +91-8543838080</p>
            </div>

            <div className="space-y-2">
              <p className="text-lg font-semibold text-white">Akash Ranjan Sahu</p>
              <p>Email: akashsahu@iisc.ac.in</p>
              <p>Contact: +91-7077139224</p>
            </div>

          </div>
        </div>

        

        

      </div>
    </div>
  );
};

export default Contact;

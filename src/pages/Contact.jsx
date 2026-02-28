import React from "react";
import DESELogoLeft from "../assets/new_logo_orange.png";
import IISCBuilding from "../assets/IISC main building svg.svg";
import IISCMasterSealBlack from "../assets/IISC MasterSealBlack.svg";
import dummy from "../assets/dummy.png";

const teamData = [
  // {
  //   section: "Hackathon Coordinators",
  //   members: [
  //     {
  //       name: "Debasmita Deoghuria",
  //       // role: "Hackathon Coordinator",
  //       image: dummy,
  //       email: "ddebasmita@iisc.ac.in",
  //       phone: "+91-9831343698",
  //     },
  //     {
  //       name: "Aniket Sarkar",
  //       // role: "Hackathon Coordinator",
  //       image: dummy,
  //       email: "aniketsarkar@iisc.ac.in",
  //       phone: "+91-8002746733",
  //     },
  //     {
  //       name: "Bibhore Goswami",
  //       // role: "Hackathon Coordinator",
  //       image: dummy,
  //       email: "bibhoreg@iisc.ac.in",
  //       phone: "+91-7365037441",
  //     },
  //   ],
  // },
  // {
  //   section: "Event Coordinators",
  //   members: [
  //     {
  //       name: "Pranjal Upadhyay",
  //       // role: "Event Coordinator",
  //       image: dummy,
  //       email: "pranjalu@iisc.ac.in",
  //       phone: "+91-8218017135",
  //     },
  //     {
  //       name: "Chirag Purwar",
  //       // role: "Event Coordinator",
  //       image: dummy,
  //       email: "chiragpurwar@iisc.ac.in",
  //       phone: "+91-8543838080",
  //     },
  //     {
  //       name: "Akash Ranjan Sahu",
  //       // role: "Event Coordinator",
  //       image: dummy,
  //       email: "akashsahu@iisc.ac.in",
  //       phone: "+91-7077139224",
  //     },
  //   ],
  // },
  {
    section: "Logistic Team",
    members: [
      {
        name: "Sudipta Das",
        role: "MTech MVLSI 2nd Year",
        image: dummy,
        // email: "pranjalu@iisc.ac.in",
        // phone: "+91-8218017135",
      },
      {
        name: "Nilanjan Das",
        role: "MTech ESE 1st Year",
        image: dummy,
        // email: "akashsahu@iisc.ac.in",
        // phone: "+91-7077139224",
      },
    ],
  },
  
  {
    section: "Design Team",
    members: [
      {
        name: "Sakshi S",
        role: "MTech EPD 1st Year",
        image: dummy,
        // email: "pranjalu@iisc.ac.in",
        // phone: "+91-8218017135",
      },
      {
        name: "Aditya Kashyap",
        role: "MTech EPD 2nd Year",
        image: dummy,
        // email: "chiragpurwar@iisc.ac.in",
        // phone: "+91-8543838080",
      },
      {
        name: "Sudipta Debnath",
        role: "MTech ESE 2nd Year",
        image: dummy,
        // email: "akashsahu@iisc.ac.in",
        // phone: "+91-7077139224",
      },
      {
        name: "Edla Siddharth Pavan",
        role: "MTech EPD 2nd Year",
        image: dummy,
        // email: "akashsahu@iisc.ac.in",
        // phone: "+91-7077139224",
      },
      {
        name: "Sreejaya",
        role: "MTech EPD 2nd Year",
        image: dummy,
        // email: "akashsahu@iisc.ac.in",
        // phone: "+91-7077139224",
      },
      {
        name: "Shiwangi Sonowal",
        role: "MTech ESE 2nd Year",
        image: dummy,
        // email: "akashsahu@iisc.ac.in",
        // phone: "+91-7077139224",
      },
      {
        name: "Nidhi",
        role: "MTech EPD 2nd Year",
        image: dummy,
        // email: "akashsahu@iisc.ac.in",
        // phone: "+91-7077139224",
      },
    ],
  },
  {
    section: "Website Team",
    members: [
      {
        name: "Sayantika Roy",
        role: "MTech MVLSI 2nd Year",
        image: dummy,
        // email: "pranjalu@iisc.ac.in",
        // phone: "+91-8218017135",
      },
      {
        name: "Tanisha Bhatia",
        role: "MTech MVLSI 2nd Year",
        image: dummy,
        // email: "chiragpurwar@iisc.ac.in",
        // phone: "+91-8543838080",
      },
      {
        name: "Shubham Lanjewar",
        role: "Ph.D. 2nd Year",
        image: dummy,
        // email: "akashsahu@iisc.ac.in",
        // phone: "+91-7077139224",
      },
      {
        name: "Sujay Ghosh",
        role: "MTech MVLSI 2nd Year",
        image: dummy,
        // email: "akashsahu@iisc.ac.in",
        // phone: "+91-7077139224",
      },
    ],
  },
  {
    section: "Steering Committee",
    members: [
      {
        name: "Prof. Debayan Das",
        role: "Assistant Professor, Dept. of ESE",
        image: dummy,
        // email: "pranjalu@iisc.ac.in",
        // phone: "+91-8218017135",
      },
      {
        name: "Prof. Mayank Shrivastava",
        role: "Professor & Chair, Dept. of ESE",
        image: dummy,
        // email: "chiragpurwar@iisc.ac.in",
        // phone: "+91-8543838080",
      },
    ],
  },
  
];

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
          Meet our Organizing Teams
        </h1>

        <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto">
          Reach out to the teams for queries regarding Open Day events and activities.
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
      <div className="w-full max-w-6xl mt-16 space-y-16">

        {teamData.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="relative bg-[#0a0b2e]/80 p-10 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-500"
          >
            <h2 className="text-2xl font-bold text-blue-300 mb-10 text-center">
              {group.section}
            </h2>

            <div className="flex flex-wrap justify-center gap-10 text-center">
              {group.members.map((member, index) => (
                <div
                  key={index}
                  className="w-full sm:w-[240px] md:w-[260px] lg:w-[280px] 
                              flex-shrink-0 
                              bg-[#11154d]/70 p-6 rounded-xl 
                              border border-purple-500/20 
                              hover:border-purple-400 
                              transition-all duration-300 
                              hover:-translate-y-2 
                              shadow-md hover:shadow-purple-400/30"
                >
                  {/* Profile Image */}
                  <div className="flex justify-center mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover border-2 border-purple-400/40"
                    />
                  </div>

                  {/* Name */}
                  <p className="text-lg font-semibold text-white">
                    {member.name}
                  </p>

                  {/* Role */}
                  <p className="text-purple-300 text-sm mb-3">
                    {member.role}
                  </p>

                  {/* Email */}
                  <a
                    href={`mailto:${member.email}`}
                    className="block text-gray-300 text-sm hover:text-purple-300 transition"
                  >
                    {member.email}
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${member.phone}`}
                    className="block text-gray-400 text-sm mt-1 hover:text-purple-300 transition"
                  >
                    {member.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Contact;

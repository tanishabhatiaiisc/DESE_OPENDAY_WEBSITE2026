import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DESELogoLeft from "../assets/new_logo_orange.png";
import IISCMasterSealBlack from "../assets/IISC MasterSealBlack.svg";
import IISCBuilding from "../assets/IISC main building svg.svg";

const hackData = [
  {
    title: "ESE Open Day Hackathon 2026",
    description:
      "The Neuromorphic Hackathon is a two-round technical challenge focused on brain-inspired computing systems. Participants will design, simulate, and prototype intelligent architectures inspired by neural models and event-driven systems.",

    round1Title: "Round 1 – Concept & Simulation",
    round1Desc:
      "Teams will propose a neuromorphic-inspired system such as a spiking neural network, event-driven architecture, or low-power AI design. Submission includes a concept note and simulation results.",

    round2Title: "Round 2 – Final Implementation",
    round2Desc:
      "Shortlisted teams will demonstrate a working prototype at DESE. This may include FPGA implementation, embedded systems, or AI-based hardware-software co-design.",

    eligibility: [
      "Open to UG and PG students",
      "Team size: 2–4 members",
      "Basic knowledge of electronics / programming recommended",
    ],

    prizes: [
      "🥇 First Prize – To be announced",
      "🥈 Second Prize – To be announced",
      "🥉 Third Prize – To be announced",
      "Certificates for all finalists",
    ],

    registrationText:
      "Registration is mandatory to participate in the Neuromorphic Hackathon. Secure your slot before the deadline.",

    registrationLink: "#", // 🔥 Replace later with Google Form / Devfolio link
  },
];

const Hackathon = () => {
  const navigate = useNavigate();

  return (
    <div className="relative z-0 min-h-screen bg-gradient-to-b from-[#030418] to-[#0a0b2e]">

      {/* Logos */}
      <div className="w-full mb-4 sm:mb-0">
        <img
          src={DESELogoLeft}
          alt="DESE Logo"
          className="h-[50px] md:h-[120px] absolute top-4 left-4 sm:top-8 sm:left-8 transition-transform duration-300 hover:scale-110"
          style={{
            filter:
              "invert(42%) sepia(75%) saturate(600%) hue-rotate(350deg) brightness(95%) contrast(105%)",
          }}
        />

        <img
          src={IISCMasterSealBlack}
          alt="IISC Logo"
          className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 h-[50px] sm:h-[70px] md:h-[120px] transition-all duration-300 hover:scale-110 hover:brightness-125"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/src/assets/tech-pattern.svg')] opacity-5"></div>
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">

        <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 animate-text-glow">
          Hackathon
        </h1>

        {hackData.map((hack, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#0a0b2e]/80 p-10 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-purple-500/20 hover:border-purple-400/40 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>

            <div className="relative z-10">

              {/* Title */}
              <h2 className="text-2xl font-semibold text-blue-300 mb-6 text-center">
                {hack.title}
              </h2>

              <p className="text-gray-300 leading-relaxed mb-10 text-center">
                {hack.description}
              </p>

              {/* Round 1 */}
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                {hack.round1Title}
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {hack.round1Desc}
              </p>

              {/* Round 2 */}
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                {hack.round2Title}
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {hack.round2Desc}
              </p>

              {/* Eligibility */}
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Eligibility
              </h3>
              <ul className="text-gray-300 mb-8 list-disc list-inside space-y-2">
                {hack.eligibility.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Prizes */}
              <h3 className="text-xl font-semibold text-purple-300 mb-3">
                Prizes
              </h3>
              <ul className="text-gray-300 mb-10 list-disc list-inside space-y-2">
                {hack.prizes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* ================= REGISTRATION SECTION ================= */}
              <div className="bg-[#11163a]/60 p-6 rounded-xl border border-purple-400/30 mt-10 text-center">
                <h3 className="text-xl font-semibold text-blue-300 mb-4">
                  Registration
                </h3>

                <p className="text-gray-300 mb-6">
                  {hack.registrationText}
                </p>

                <a
                  href={hack.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#b584fd] hover:bg-white hover:text-[#0a0f2d] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
                >
                  Register Now
                </a>
              </div>

              {/* Contact Button */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => navigate("/contact")}
                  className="border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-[#0a0f2d] font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
                >
                  Contact Us
                </button>
              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Hackathon;
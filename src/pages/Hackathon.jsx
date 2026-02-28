import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DESELogoLeft from "../assets/new_logo_orange.png";
import IISCMasterSealBlack from "../assets/IISC MasterSealBlack.svg";
import IISCBuilding from "../assets/IISC main building svg.svg";
import HackathonPoster from "../assets/Event/hackathon.jpg";

const hackData = [
  {
    title: "ESE Open Day Hackathon 2026",
    description:
      "The Department of Electronic Systems Engineering (ESE), IISc is excited to announce the ESE Open Day Hackathon — a competition that blends strong engineering fundamentals with emerging research in neuromorphic computing. This year’s hackathon features a dedicated Neuromorphic Computing Challenge, inspired by the work being carried out at the NeuRonICS Lab, ESE, where research focuses on brain-inspired computing, analog VLSI neuron models, subthreshold circuit design, and energy-efficient hardware implementations of neural systems. Participants will get a glimpse into this domain through a hands-on problem that evaluates not just coding ability, but system-level thinking and design approach.",

    round1Title: "Round 1 – Written Qualifying Round (Duration: 1 hour)",
    round1Desc:
      "This round consists of basic circuits and coding questions designed to test fundamental understanding and problem-solving skills.",

    round2Title: "Round 2 – Neuromorphic Computing Challenge (Duration: 2 hours)",
    round2Desc:
      "•	Participants will build and demonstrate a solution (Python or any preferred language). Additional credit will be given for circuit-level insights. Evaluation will include a short demo to understand the participant’s thought process and design reasoning.",

    eligibility: [
      "Open to UG and PG students",
      "Team size: 1-3 members",
      "Strong knowledge of python is needed",
      "Participants should have the MNIST and DVS dataset downloaded on their laptops "
    ],

    prizes: [
      "🥇 First Prize - worth ₹ 15,000",
      "🥈 Second Prize - worth ₹ 9,000",
      "🥉 Third Prize - worth ₹ 6,000",
      "Certificates for all finalists",
    ],

    registrationText:
      "Registration is mandatory to participate in the Hackathon. Secure your slot before 6th March,2026.",

    registrationLink: "https://forms.gle/AoqPH71T3Uy2fpS97", // 🔥 Replace later with Google Form / Devfolio link
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
        {/* Poster Section */}
        <div className="flex justify-center mb-12">
          <motion.img
            src={HackathonPoster}
            alt="Hackathon Poster"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl rounded-2xl shadow-2xl border border-purple-400/30 hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* <h1 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 animate-text-glow">
          
        </h1> */}

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

              <p className="text-gray-300 leading-relaxed mb-10 justify-end ">
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

              {/* Contact Button
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => navigate("/contact")}
                  className="border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-[#0a0f2d] font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
                >
                  Contact Us
                </button>
              </div> */}

              <div className="w-full max-w-5xl mt-16 space-y-12">
                {/* Hackathon Coordinator */}
                <div className="w-full max-w-5xl mx-auto mt-20">
                  <div className="relative bg-[#0a0b2e]/70 p-10 rounded-3xl backdrop-blur-xl border border-purple-500/20 shadow-xl">

                    <h2 className="text-2xl font-semibold text-purple-300 mb-4 text-center tracking-wide">
                      Hackathon Coordinators
                    </h2>

                    <p className="text-center text-gray-400 mb-10">
                      Any queries? Contact our coordinators directly.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                      {[
                        {
                          name: "Debasmita Deoghuria",
                          email: "ddebasmita@iisc.ac.in",
                          phone: "+91-9831343698",
                        },
                        {
                          name: "Aniket Sarkar",
                          email: "aniketsarkar@iisc.ac.in",
                          phone: "+91-8002746733",
                        },
                        {
                          name: "Bibhore Goswami",
                          email: "bibhoreg@iisc.ac.in",
                          phone: "+91-7365037441",
                        },
                      ].map((person, index) => (
                        <div
                          key={index}
                          className="bg-[#11154d]/70 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-purple-400/30"
                        >
                          <p className="text-lg font-semibold text-white mb-2">
                            {person.name}
                          </p>

                          <p className="text-gray-300 text-sm">
                            {person.email}
                          </p>

                          <p className="text-gray-400 text-sm mt-1">
                            {person.phone}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Hackathon;

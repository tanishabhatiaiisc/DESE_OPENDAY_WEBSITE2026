import { motion } from "framer-motion";
import DESELogoLeft from "../assets/new_logo_orange.png";
import IISCMasterSealBlack from "../assets/IISC MasterSealBlack.svg";
import IISCBuilding from "../assets/IISC main building svg.svg";
const projectData = [
  {
    title: "Coherers Effect",
    description: "",
    //   "A simple demonstration of the coherer effect using aluminum foil balls in a glass container. When an arc lighter is activated, the conductivity between the foil balls increases, completing the circuit and lighting up an LED.",
    team: ["Uma Bharathi", "Om Prakash", " Guluvindala Bhagyalakshmi"],
  },
  {
    title: "Edge AI Security & Interaction System",
    description: "",
    //   "An Edge AI-based security and interaction system that performs real-time vision detection directly on-device without cloud dependency. It responds using LEDs, display feedback, and optional IoT alerts, demonstrating embedded AI, edge computing, and real-time decision-making.",
    team: ["Shreevathsa K S"],
  },
  {
    title: "FPGA-Based Brick Breaker Game Using Artix-7",
    description: "",
    //   "A real-time Brick Breaker game implemented on an Artix-7 FPGA using VGA output (640×480). The design includes paddle control, collision detection, brick logic, scoring, and life management, all built using digital logic and finite state machines. Graphics are rendered directly in hardware without a CPU, GPU, OS, or frame buffering.",
    team: ["Nawras Ahamed", "Gautham Bolar"],
  },
  {
    title: "Human Following Robot",
    description: "",
    team: ["Shivangi Ahlawat", "Nikita Singh", "Sarthak Bansal"],
  },
  {
    title: "Li-Fi Audio Transmission Project",
    description:"",
    //   "A demonstration of Li-Fi (Light Fidelity) technology for audio transmission. The project uses an LED to modulate audio signals at high frequencies, which are then received by a photodiode and converted back into sound. This setup showcases the potential of Li-Fi for high-speed, secure wireless communication using visible light.",
    team: ["Shubha Ghosh", "Sisir Mridha", "Chirag Purwar"],
  },
  {
    title: "Line Follower with Object Detection",
    description:"",
    //   "A demonstration of Li-Fi (Light Fidelity) technology for audio transmission. The project uses an LED to modulate audio signals at high frequencies, which are then received by a photodiode and converted back into sound. This setup showcases the potential of Li-Fi for high-speed, secure wireless communication using visible light.",
    team: ["Leuna Das", "Shriya Das","Shankha Bhattacharya"],
  },
  {
    title: "Smart Robot with Bluetooth and Obstacle Avoidance ",
    description:"",
    //   "A demonstration of Li-Fi (Light Fidelity) technology for audio transmission. The project uses an LED to modulate audio signals at high frequencies, which are then received by a photodiode and converted back into sound. This setup showcases the potential of Li-Fi for high-speed, secure wireless communication using visible light.",
    team: [ "Aravind Sundar","Samudrala Hareesh", "Panth Satish Kumar"],
  },
  {
    title: "Gesture Control Car",
    description: "",
    //   "A gesture-controlled robotic car using Arduino Nano 33 BLE Sense boards. Hand movements are detected using the onboard IMU and transmitted via Bluetooth Low Energy (BLE) to control the car’s motors in real time. The system integrates motion sensing, embedded processing, wireless communication, and motor control for intuitive human–machine interaction.",
    team: ["Pasala Sampath",  "Deekshith K", "Ellandula Pranay", "Pamisetty Sreenivasulu", "Simhadri Vishnukumar"],
  },
];

const ScienceDemo = () => {
  return (
    <div className="relative z-0 min-h-screen bg-gradient-to-b from-[#030418] to-[#0a0b2e]">
      
      {/* Logo */}
      <div className="w-full mb-4 sm:mb-0">
        <img
          src={DESELogoLeft}
          alt="DESE Logo"
          className="h-[50px] md:h-[120px] transition-transform duration-300 hover:scale-110 
          absolute top-4 left-4 sm:top-8 sm:left-8"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 animate-text-glow">
          Science Demonstrations
        </h1>

        <p className="text-lg text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Explore hands-on scientific prototypes and student-driven innovations presented during Open Day.
        </p>

        {/* Grid Layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#0a0b2e]/80 p-6 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-purple-500/20 hover:border-purple-400/40 transition-all duration-500"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>

              <div className="relative z-10">
                
                {/* Project Title */}
                <h3 className="text-lg font-semibold text-blue-300 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Team */}
                <p className="text-sm font-semibold text-purple-300 mb-3">
                  Project Team
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.team.map((member, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-purple-500/20 text-purple-200 rounded-full border border-purple-400/40 backdrop-blur-sm hover:bg-purple-500/30 transition"
                    >
                      {member}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScienceDemo;
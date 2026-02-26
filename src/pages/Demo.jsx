import React from "react";
import { useState, useRef } from "react";
import DESELogoLeft from "../assets/new_logo_orange.png";
import IISCMasterSealBlack from "../assets/IISC MasterSealBlack.svg";
import IISCBuilding from "../assets/IISC main building svg.svg";
import BEES from "../assets/Lab_Logo/BEES LAB.jpeg";
import csrl from "../assets/Lab_Logo/CSRL_logo.png";
import emb from "../assets/Lab_Logo/EmSys32.drawio.png";
import msd from "../assets/Lab_Logo/MSDLab LOGO2.jpg";
import neu from "../assets/Lab_Logo/Neuronics_Lab_Logo.png";
import sin from "../assets/Lab_Logo/SINESys_logo.png";
import pow from "../assets/Lab_Logo/POWER_LAB_LOGO.png";
import rc from "../assets/Lab_Logo/RC LAB Logo.png";
import zen from "../assets/Lab_Logo/ZENLAB.jpeg";
import qu from "../assets/Lab_Logo/FrontPage_QClaSSIC.png";

import ScrollToTopButton from "../components/Scrolltotppage";


const labData = [
  {
    labName: "BEES Lab",
    labLogo: BEES,
    projects: [
      {
        title: "Cytology Scanner for Oral Cancer Screening",
        description: "A compact, low-cost cytology slide scanner designed for rapid digitisation of whole-slide samples at cellular resolution. The system integrates precision XY scanning, compact custom optics, and controlled illumination to generate high-contrast, stitchable image tiles suitable for automated analysis. It is optimised for point-of-care and resource-constrained settings, balancing optical performance with mechanical simplicity. The platform is extensible toward AI-assisted cytology screening and quantitative diagnostics.",
        team: ["Anujkumar Prajapati", "Koushik Chandra Chenna", "Sharanya Bhattacharjee", "Shreenidhi Bedarkar"]
      },
      {
        title: "HFIS: Handheld Fluorescence Imaging System",
        description: "The Handheld Fluorescence Imaging System (HFIS) revolutionises surgical procedures by enabling real-time visualisation of normally invisible anatomical structures through immunofluorescence technology. Using Indocyanine Green (ICG) dye, which binds to proteins and remains in blood vessels, HFIS allows surgeons to visualise blood vessels beneath tissue, assess surgical margins, and accurately track cancer spread to lymph nodes. The system illuminates ICG-containing tissues, making them visible through fluorescence and providing crucial information about blood flow, tissue perfusion, and lymphatic drainage patterns during surgery. This technology addresses three critical surgical challenges: preventing unexpected bleeding, reducing the risk of wound infections, and ensuring complete tumour removal.",
        team: ["Anujkumar Prajapati", "Rajdeep Saha", "Sharanya Bhattacharjee", "Shreenidhi Bedarkar"]
      },
      {
        title: "Electrical Impedance Tomography (EIT) based Imaging system",
        description: "A compact electrical impedance tomography (EIT) system that images tissues by injecting tiny electrical currents and measuring the resulting voltages at the surface. From these measurements, it reconstructs maps showing how electrical properties vary inside the tissue. The system is designed to be fast, low-noise, and easy to integrate into portable or clinical tools.",
        team: ["Anujkumar Prajapati", "Hari R S", "Ismayil K I"]
      }
    ]
  },
  {
    labName: "CSRL Lab",
    labLogo: csrl,
    projects: [
      {
        title: "ML-based Hardware for Gesture Recognition at the Edge",
        description: "This project presents a machine learning–based hardware system for real-time hand gesture recognition at the edge. Hand gestures offer a natural and intuitive way for humans to interact with machines without relying on buttons or touchscreens. The system captures hand movement or muscle signals using sensors and processes them through a lightweight Convolutional Neural Network (CNN). The CNN plays a key role by automatically extracting important patterns from the input signals and accurately classifying different gestures. To enable fast and efficient operation, the CNN is implemented directly in hardware (such as FPGA or ASIC) using parallel computation and optimized on-chip memory. Since all processing is done locally on the device, the system achieves low latency, reduced power consumption, and improved data privacy. This approach is well suited for applications such as prosthetic control, sign language recognition, wearable technology, robotics, gaming, and touch-free human–computer interaction systems.",
        team: ["M.Kamal Sai", "Biplab Das", "Giju Vargheese" ]
      },
      {
        title: "Breaking Classical and Modern Cryptography Using Power Side-Channel Attacks on ChipWhisperer",
        description: "Side-channel attacks (SCA) exploit physical leakages such as power consumption, timing variations, or electromagnetic emissions to recover secret information from cryptographic implementations rather than attacking their mathematical foundations. In the Advanced Encryption Standard (AES), Correlation Power Analysis (CPA) targets intermediate computations such as the first-round S-box output by correlating measured power traces with a leakage model like Hamming weight, enabling recovery of secret key bytes through statistical hypothesis testing. In our setup, these traces are captured using the ChipWhisperer platform, which provides precise triggering, synchronized acquisition, and high-resolution power measurements for practical hardware attacks. While CPA is highly effective for AES due to its byte-wise operations and strong nonlinear S-box leakage, it assumes a linear leakage model and accurate trace alignment. Machine learning (ML)-based attacks extend this approach by automatically learning complex and nonlinear leakage patterns directly from collected traces using neural networks or CNNs, improving resilience against noise and countermeasures. Extending ML-based SCA to SNOW-V is particularly compelling because it is a 5G security standard candidate built on LFSR updates and nonlinear state transitions, where leakage arises during repeated feedback and state-update operations. By targeting these LFSR update cycles, machine learning models can be trained to distinguish key-dependent state behaviour and recover secret information with high success probability, often requiring significantly fewer traces than traditional statistical methods.",
        team: ["Madhumitha Ramaswamy", "Samarpit Karar", "Abhay Aryan"]
      },
      {
        title: "The Security You Trust Is Leaking - Understanding and Preventing Side-Channel Attacks",
        description: "With the rapid rise of resource-constrained connected devices, hardware security has become critically important. While cryptographic algorithms such as AES are mathematically secure, their physical implementations often leak sensitive information through measurable effects like power consumption. These physical side-channel attacks (SCA) exploit tiny fluctuations in supply current to recover secret keys, without ever breaking the encryption algorithm itself. As embedded and FPGA-based systems become widespread in IoT, automotive, and edge applications, protecting against such leakage is no longer optional. Traditional countermeasures such as masking and wave dynamic differential logic (WDDL) introduce significant power, area, and performance overheads. Moreover, many circuit-level defenses rely on supply isolation and are unsuitable for FPGA implementations. This work presents TYLOR, a TDC-based, low-overhead, fully synthesizable generic circuit-level countermeasure for FPGAs. By sensing instantaneous current and dynamically equalizing power consumption using a ring-oscillator-based bleed circuit, TYLOR maintains nearly constant supply current. Implemented on an Artix-7 FPGA running AES-256, TYLOR achieves over 300x improvement in power SCA resistance with minimal area and power overhead, and no performance degradation. ",
        team: ["Samarth S T"]
      }
    ]
  },
  {
    labName: "EmSys Lab",
    labLogo: emb,
    projects: [
      {
        title: "cycleGAN",
        description: "How visually Horse to Zebra and Zebra to Horse image translation with help of GAN.",
        team: ["Yeshwant", "Kishan Baranwal" ]
      },
      {
        title: "Pocket intrusion: when your phone isn't yours anymore",
        description: "A well-placed malicious payload can silently turn your phone into an open book. Delivered through a malicious app or phishing link, it grants attackers remote access, allowing them to steal SMS messages and call logs undetected. Every conversation, OTP, and contact detail exposed, enabling Identity theft or deeper infiltration ",
        team: ["Ayush Chand Ramola", "Deepak Sharma", "Adeline Pinto", "Onkar Joshi"]
      },
      {
        title: "Robo Goalie",
        description: "Robotic arm acting as goalie for air hockey.",
        team: ["Sai Santosh Tejendra. T", "Aditya Sharma"]
      },
      {
        title: "Human Follower Robot using Thermal Sensor",
        description: "The system will detect a person using a thermal sensing module that identifies body heat patterns and determine their direction relative to the robot. An ultrasonic distance sensor will continuously measure the separation between the robot and the person to maintain a safe and stable following distance. The control logic will be implemented on an embedded microcontroller TIVA Board MCU , which will process sensor data in real time and drive the motors accordingly. The objective is to demonstrate practical embedded systems concepts such as sensor interfacing, real-time decision making, motor control, and power management in a way that is intuitive for visitors while being technically meaningful.",
        team: ["Karney Jayanath", "Sayooj Krishna"]
      },
      {
        title: "Come Hack Me: Learn the tricks before the tricks learn you",
        description: "Try to solve these cybersecurity challenges. Find the mistakes, spot the tricks, and learn how to stay safe online.",
        team: ["Surakshith DT", "Giridhar S", "Adeline Pinto", "Onkar Joshi"]
      },
      {
        title: "NoFi Band",
        description: "Floods De-authentication packets to the all or selected connected devices exploiting the vulnerability in the WPA2. WPA2 encrypts data but the management frames are not authenticated or integrity protected. The attacker is designed to look like a wristwatch, but actually a stealth WiFi DoS attack device.",
        team: ["Aditya R B", "P Allen Thiagaraj", "Ghiridhar S", "Surakshith D T"]
      },
      {
        title: "PalmPilot Maze",
        description: "A gesture-controlled Stewart platform that allows a user to move a ball through a 3D-printed maze by tilting their hand. A Python-based hand-tracking system estimates palm orientation in real time and sends tilt commands to a six-servo Stewart platform. As the user rotates their hand, the platform tilts accordingly, guiding the ball through the maze. This project demonstrates the integration of hand tracking with a parallel manipulator to create an intuitive, hands-free physical gaming interface.",
        team: ["P Allen Thiagaraj", "Keerthana Jayaprakash", "Aditya R B"]
      },
      {
        title: "Depth Estimation Using Stereo Vision Camera",
        description: "This project implements depth estimation using a stereo camera setup that captures two slightly offset images. By computing the disparity between the images, the system estimates distances to obstacles and surrounding objects, demonstrating practical 3D perception using stereo vision principles.",
        team: ["Saumya Babu", "Katta Surekha"]
      },
      {
        title: "Firmware Extraction",
        description: "This project focuses on extracting source-level information from binary firmware files of electronic devices. The extracted data is visualized within a graphical user interface, demonstrating reverse engineering techniques and firmware analysis.",
        team: ["Allen", "Karney Jayanath"]
      },
      {
        title: "Maze Solver (Micro Racer)",
        description: "The Micro Racer is a compact, high-performance smart mini racing car built using the ESP32 microcontroller with wireless BLE communication. The system includes a miniature car and a dedicated handheld controller. Using an analog joystick and push buttons, the controller wirelessly manages speed, direction, and special functions in real time.",
        team: ["Hurali Sai Shanmukha", "Deepak Varma"]
      },
      // {
      //   title: "The Inverted Pendulum Path Seeker",
      //   description: "A two-wheeled self-balancing robot that uses an IMU and PID control to maintain upright stability. Stepper motors with micro-stepping provide high-resolution motion control. Integrated IR line sensors enable simultaneous balance maintenance and path tracking, demonstrating advanced sensor fusion and nested control logic for autonomous navigation.",
      //   team: ["Shrihari", "Srushti Bailurkar", "Rajani G"]
      // },
      {
        title: "Voice Controlled Bot",
        description: "A home-assistant style robot that navigates based on voice commands. The system uses time-based SLAM techniques for localization and movement, allowing the bot to autonomously move toward user-specified destinations.",
        team: ["Akash Singh", "Harsh Prajapati"]
      }
    ]
  },
  // add rest of the labs here
  
  
  {
    labName: "MSDLab",
    labLogo: msd,
    projects: [
      {
        title: "Van de Graaff Generator",
        description: "A Van de Graaff generator builds up high voltage using a moving belt to transfer electric charge. A motor-driven insulating belt moves through two rollers, one at the base and one at the top. At the base, a comb-like electrode deposits charge onto the belt via corona discharge. As the belt moves, it carries the charge upward to a hollow metal sphere. Another comb at the top transfers the charge to the Lab_Logosphere, accumulating high voltage. The process continues until electrical breakdown occurs or the leakage equals the charging rate. It is used in physics experiments and particle accelerators.",
        team: ["Mayank Yadav", "Harihar Nath", "Ajinkya Deshpande", "Harsh Raj", "Utpreksh Pathbaje", "Ishaan"]
      },

    ]
  },
  {
    labName: "NeuRonICS Lab",
    labLogo: neu,
    projects: [
      {
        title: "Asynchronous Tracking Using Neuromorphic Camera for Edge Computing",
        description: "A neuromorphic (event-based) camera detects changes in brightness and emits asynchronous events that indicate whether local intensity increased or decreased. Because each pixel responds independently rather than being sampled synchronously as in a frame-based camera, neuromorphic cameras achieve very high temporal resolution, which is ideal for tracking fast motion. Many prior tracking methods rely on deep learning pipelines or convert events into frames, which reduces the temporal resolution that the sensor can provide. In our demo, we present a hardware-optimized asynchronous Extended Kalman Filter that updates on every incoming event and tracks event clusters with an EKF update latency below 1 microsecond. We will showcase how this tracker follows a point target moving along circular and Lissajous trajectories across a wide range of target speeds.",
        team: ["Satyapreet Singh Yadav", "Muthiah S", "Bhoomika R", "Purab"]
      },
      
      {
       title: "Edge AI RISC-V SoC: Flexible Hardware for Intelligent Applications",
        description: "The SoC combines a lightweight RISC-V processor core with hardware-accelerated compute units to support real-time AI inference under tight power and resource constraints. By offloading computationally intensive workloads to the AI accelerator, the system achieves improved performance-per-watt, reduced latency, and optimized memory utilization. The architecture supports multimodal sensing and intelligent processing across applications such as audio analysis, vision systems, and future human–machine interfaces including brain–computer interface (BCI) systems.",
        team: ["Tanisha Bhatia"]
        },
        
        {
        title: "Live Demo: Real-Time EdgeAI Gesture Recognition with Event Camera",
        description: "Event cameras offer significant advantages for edge robotics applications due to their asynchronous operation and sparse, event-driven output, making them well-suited for tasks requiring fast and efficient closed-loop control, such as gesture-based human-robot interaction. Despite this potential, existing event processing solutions remain limited, often lacking complete end-to-end implementations, exhibiting high latency, and insufficiently exploiting event data sparsity. In this work, we demonstrate a real-time gesture recognition application using HOMI, an ultra-low latency, end-to-end edge AI platform comprising a Prophesee IMX636 event sensor chip with an Xilinx Zynq UltraScale+MPSoC FPGA chip, deploying an in-house developed AI accelerator. We have developed hardware-optimized pre-processing pipelines supporting both constant-time and constant-event modes for histogram accumulation, linear and exponential time surfaces. Our general-purpose implementation caters to both accuracy-driven and low-latency applications. HOMI achieves 94% accuracy on the DVS Gesture dataset as a use case when configured for high accuracy operation and provides a throughput of 1000 fps for low-latency configuration. The hardware-optimised pipeline maintains a compact memory footprint and utilises only 33% of the available LUT resources on the FPGA, leaving ample headroom for further latency reduction, model parallelisation, multi-task deployments, or integration of more complex architectures.",
        team: ["Shankaranarayanan H", "Guha H", "Ashutosh Ratha", "Shivam Dhamesha"]
      },
      
            
      {
        title: "Accelerated NP-Hard Optimisation with Neuromorphic Ising Machine",
        description: "Physics-inspired Ising machines tackle hard optimisation problems by allowing physical dynamics to naturally converge to the best solution, instead of step-by-step computation on a CPU. Combined with neuromorphic hardware inspired by the brain's sparse, event-driven processing, this approach delivers fast, low-power performance. In this demo, a real-time IPL fixture is generated, optimising team travel across cities in India to reduce carbon emissions. Implemented on an FPGA, the system efficiently finds high-quality solutions to a challenging NP-hard problem.",
        team: ["Saptarshi Maiti", "Sayantika Roy", "Asutosh Ratha", "Naznin Haque"]
      },
      

    ]
  },
  
  {
    labName: "SINESys Lab",
    labLogo: sin,
    projects: [
      {
        title: "Password Cracking using Power Side Channel Attack",
        description: "This project demonstrates password extraction using a Power Side-Channel Attack (SCA) on an STM32 microcontroller with the help of ChipWhisperer. Power consumption traces are captured while the device performs password comparison. Data-dependent variations in power reveal information about correct and incorrect characters. By analyzing these traces, the secret password can be recovered byte-by-byte. This highlights the importance of implementing side-channel countermeasures in embedded systems.",
        team: ["Azeem Gadkari", "Sudipta Debnath "]
      },

    ]
  },
  
  {
    labName: "Power Electronics Lab",
    labLogo: pow,
    projects: [
      {
        title: "Gimbal-Based Attitude Control Demonstrator",
        description: "This project presents a two-axis gimbal-based actuation platform for demonstrating attitude control principles in aerospace applications. The system enables controlled pitch and yaw motion using servo-based actuation and manual input. The modular design allows future integration of sensors and feedback control for advanced experimentation.",
        team: ["Drishana Jhunjhunwalla"]
      },
      
      {
       title: "Eight-Legged Theo Jansen Walking Robot",
        description: "This project presents an eight-legged walking robot based on the Theo Jansen linkage mechanism, designed to demonstrate bio-inspired locomotion principles for robotic mobility applications. The system utilizes dual motor-driven crankshafts to generate synchronized leg motion on both sides, enabling stable and efficient forward walking over flat terrain. The mechanical linkage converts rotary motion into a smooth stepping gait, mimicking natural walking patterns.",
        team: ["Manoj Kumar" , "Narasimha" , "Sakshi" , "Kinjal"]
        },
        
        {
        title: "100kg Payload Octocopter Drone ",
        description: "This 100kg payload octocopter is designed to navigate without GPS, relying instead on an Inertial Measurement Unit (IMU) and camera. Powered by 50V Lithium cells, the drone has a peak power consumption of 45kW. The propulsion system features custom Field-Oriented Control (FOC) BLDC drivers capable of delivering up to 120A per motor. For ease of transport, the aluminium frame incorporates a folding mechanism for each arm.",
        team: ["Dishan" , "Sampath" , "Joshua"]
      },
      
            
      {
        title: "Arm Exo-skeleton",
        description: "This project presents an exoskeleton with arm-like functionality de signed to perform upper-limb movements. The system integrates a lightweight 3D-printed mechanical structure, servo-motor actu ation, and a microcontroller-based control unit to provide precise and anatomically consistent wrist and finger motion. User inputs are processed in real time to regulate actuator response, ensur ing smooth and reliable movement. Experimental results show im proved joint mobility and dexterity, demonstrating the device’s po tential in grip assistance and general assistive-technology applications.",
        team: ["Gauransh", "Joffin Jacob", "Sreyas"]
      },
   ]
  },
  
  {
    labName: "RC Lab",
    labLogo: rc,
    projects: [
      {
        title: "Inside the Chip - Hardware Debugging via JTAG",
        description: "A live look at how we inspect hardware health at microscopic level. By using a boundary scan, we can verify thousands of connections instantly, ensuring every “leg” of a microchip is wired and working perfectly.",
        team: ["Rajesh Mutum"]
      },
    ]
    
    },
    
    {
    labName: "ZENLAB",
    labLogo: zen,
    projects: [
      {
        title: "Smart Glass",
        description: "This project is a wearable IoT-based gesture recognition system that detects hand gestures in real time using a camera and embedded machine learning. It processes gestures through an edge AI pipeline and displays the translated output on a near-eye OLED screen mounted on a spectacle design. The system integrates camera interfacing, OLED control, and low-power processing for efficient performance. It serves as an assistive communication solution, enabling smart and inclusive human–machine interaction using wearable embedded AI.",
        team: ["Vignesh K "]
      },
      
      {
        title: "Haptic Navigation for Remote Robotics",
        description: "This project demonstrates a dual digital twin architecture for haptic-based remote robotic surgery, designed to enhance precision, safety, and situational awareness in teleoperated medical procedures. In conventional robotic surgery, the surgeon operates locally, allowing real-time video streaming with negligible delay; however, when it comes to interstate or intercontinental communication, the latency induced is significant. To mitigate this, the dual DT system communicates essential data such as state updates, environmental changes, and physical interaction parameters (e.g., position, force, and contact dynamics), which are sufficient to render the simulation accurately. This significantly reduces the data payload size, enabling low-latency synchronization even over long-distance networks. Meanwhile, the integration of haptic feedback allows the surgeon to perceive interaction forces in real time, enabling more precise surgical procedures.",
        team: ["Nashif","Sameera","Sindhoora"]
      },
      
      {
        title: "Semantic Communication",
        description: "Semantic communication focuses on exchanging understanding rather than exact data symbols. It emphasizes interpreting the intent or context behind transmitted information. This paradigm is inspired by how humans naturally communicate through meaning instead of raw details. It aims to reduce unnecessary data transfer by prioritizing relevance. Such communication frameworks often integrate intelligence to interpret and convey context effectively. The approach supports efficient interaction in bandwidth-limited environments. Overall, it represents a shift from data accuracy toward meaningful information exchange.",
        team: ["Lakshmi Poola","Sahana N"]
      },
      
      {
        title: "Bluetooth",
        description: "BLE channel sounding–based localization is an indoor positioning technique that estimates distance between devices and anchor nodes by analyzing detailed radio channel characteristics instead of relying only on RSSI. During the process, an initiator and a reflector exchange structured packets, enabling measurements such as round-trip time (RTT), phase variations, or channel response across frequencies. These measurements allow accurate distance (via time-of-flight) or angle (via angle-of-arrival) estimation, improving performance in multipath-rich indoor environments. When deployed with multiple anchor nodes, this method can achieve sub-10 cm accuracy and is well suited for applications such as indoor navigation and wayfinding in airports, hospitals, malls, warehouses and large industrial facilities.",
        team: ["Pooja H D","Partham B "]
      },
      
      {
        title: "ANRC App Demonstration Inflight Data",
        description: "It is an app used to transfer massive amounts of data using Delay-Tolerant Networking (DTN) at a terrestrial scale via a store-carry-forward mechanism. Data is divided into small chunks and offloaded from a sender server to a receiver server through a midpoint: the user’s mobile device. The sender server transmits encrypted chunks to the user, where they are temporarily stored until the user can safely access the receiver server. Finally, the data is securely offloaded, verified, reassembled, and stored permanently on the receiver server.",
        team: ["Arnav Bharadwaj"]
      },
      
      {
        title: "AI Air Writing",
        description: "Air Writing Recognition Using Mobile Phone Accelerometer Sensor and TinyML on Edge Impulse.Air Writing Recognition is a real-time TinyML system that uses a 3-axis accelerometer to capture hand gestures and classify them into letters or digits using a neural network trained on Edge Impulse. Motion data is preprocessed with spectral analysis and deployed on-device for low-latency, cloud-free inference, enabling a practical touchless input solution with applications in assistive technology, wearable computing, and IoT systems.",
        team: ["Ajith","Furqan","Misrah","Shreya"]
      },
    ]
    
    },
    
    {
    labName: "Qu-ClaSSIC Lab",
    labLogo: qu,
    projects: [
      {
        title: "Self-consistent, physics-based model for graphene Hall-effect magnetic sensors",
        description: "Graphene Hall Sensors (GHS) offer exceptionally high carrier mobility and superior Hall sensitivity, making them strong candidates for next-generation Hall-effect sensing applications. However, their practical deployment is limited by large DC and residual offset voltages—even after modulation—which reduce precision, especially in low magnetic field detection. This work integrates transport physics with finite element modeling (FEM) to enable performance optimization and develop effective offset cancellation strategies for improved sensor accuracy.",
        team: ["Koteswar Doddi", "Aadil Bashir Dar"]
      },
      
      {
        title: "Quantum Random Number Generator(QRNG)",
        description: "Fundamentally Classical Physics phenomena are deterministic. True randomness comes from quantum physical phenomena.",
        team: ["Salih Sulaiman"]
      },
      
      {
        title: "Enhancing Nanopore DNA Sequencing with Optimized Amplifier Design",
        description: "",
        team: ["K. Deepthi"]
      },
      
  ]
  },
  {
    labName: "Independent Projects",
    labLogo: "",//qu,
    projects: [
      {
        title: "Coherers Effect",
        description: 
          "A simple demonstration of the coherer effect using aluminum foil balls in a glass container. When an arc lighter is activated, the conductivity between the foil balls increases, completing the circuit and lighting up an LED.",
        team: ["Uma Bharathi", "Om Prakash", " Guluvindala Bhagyalakshmi"],
      },
      {
        title: "Edge AI Security & Interaction System",
        description:
          "An Edge AI-based security and interaction system that performs real-time vision detection directly on-device without cloud dependency. It responds using LEDs, display feedback, and optional IoT alerts, demonstrating embedded AI, edge computing, and real-time decision-making.",
        team: ["Shreevathsa K S"],
      },
      {
        title: "FPGA-Based Brick Breaker Game Using Artix-7",
        description: 
          "A real-time Brick Breaker game implemented on an Artix-7 FPGA using VGA output (640×480). The design includes paddle control, collision detection, brick logic, scoring, and life management, all built using digital logic and finite state machines. Graphics are rendered directly in hardware without a CPU, GPU, OS, or frame buffering.",
        team: ["Nawras Ahamed", "Gautham Bolar"],
      },
      {
        title: "Human Following Robot",
        description: "",
        team: ["Shivangi Ahlawat", "Nikita Singh", "Sarthak Bansal"],
      },
      {
        title: "Li-Fi Audio Transmission Project",
        description:
          "A demonstration of Li-Fi (Light Fidelity) technology for audio transmission. The project uses an LED to modulate audio signals at high frequencies, which are then received by a photodiode and converted back into sound. This setup showcases the potential of Li-Fi for high-speed, secure wireless communication using visible light.",
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
        description: 
          "A gesture-controlled robotic car using Arduino Nano 33 BLE Sense boards. Hand movements are detected using the onboard IMU and transmitted via Bluetooth Low Energy (BLE) to control the car’s motors in real time. The system integrates motion sensing, embedded processing, wireless communication, and motor control for intuitive human–machine interaction.",
        team: ["Pasala Sampath",  "Deekshith K", "Ellandula Pranay", "Pamisetty Sreenivasulu", "Simhadri Vishnukumar"],
      },
      
  ]
  },
  
];


const DemoPage = () => {
  const [openProject, setOpenProject] = useState(null);
  const projectRefs = useRef({});

  const handleToggle = (labIndex, projectIndex) => {
    const id = `${labIndex}-${projectIndex}`;
    const isOpening = openProject !== id;

    setOpenProject(isOpening ? id : null);

    if (isOpening) {
      setTimeout(() => {
        projectRefs.current[id]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 200);
    }
  };

  return (
    <div className="relative z-0 min-h-screen bg-gradient-to-b from-[#030418] to-[#0a0b2e]">
      
      
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
        
        <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
          Research Projects
        </h1>

        <p className="text-lg text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore Innovative Research Demonstrations from our laboratories.
        </p>

        <div className="space-y-16">
          {labData.map((lab, labIndex) => (
            <div
              key={labIndex}
              className="relative bg-[#0a0b2e]/80 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 max-w-4xl mx-auto"
            >
              <div className="relative z-10">

                {/* ===== LAB HEADER FIX ===== */}
                {lab.labName === "Independent Projects" ? (
                  <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ececed] via-[#d4b6ff] to-[#b584fd]">
                      Independent Projects
                    </h2>
                  </div>
                ) : (
                  <div className="flex items-center gap-6 mb-10">
                    <img
                      src={lab.labLogo}
                      alt="Lab Logo"
                      className="w-20 h-20 object-contain rounded-xl shadow-md"
                    />
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ececed] via-[#d4b6ff] to-[#b584fd]">
                      {lab.labName}
                    </h2>
                  </div>
                )}

                {/* ===== PROJECTS ===== */}
                <div className="space-y-6">
                  {lab.projects.map((project, projectIndex) => {
                    const id = `${labIndex}-${projectIndex}`;
                    const isOpen = openProject === id;

                    return (
                      <div
                        key={projectIndex}
                        ref={(el) => (projectRefs.current[id] = el)}
                        className={`relative rounded-xl border transition-all duration-500 backdrop-blur-md
                          ${
                            isOpen
                              ? "border-purple-400 shadow-lg shadow-purple-500/20 bg-white/10"
                              : "border-white/10 bg-white/5 hover:border-white/30"
                          }`}
                      >
                        <div
                          onClick={() => handleToggle(labIndex, projectIndex)}
                          className="flex justify-between items-center p-6 cursor-pointer"
                        >
                          <h3 className="text-lg font-semibold text-blue-300">
                            {project.title}
                          </h3>

                          <div
                            className={`transform transition-transform duration-500 text-purple-400 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </div>
                        </div>

                        <div
                          className={`transition-all duration-700 overflow-hidden ${
                            isOpen
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-gray-300 text-sm leading-relaxed mb-5">
                              {project.description}
                            </p>

                            <p className="text-sm font-semibold text-purple-300 mb-3">
                              Project Team
                            </p>

                            <div className="flex flex-wrap gap-3">
                              {project.team.map((member, idx) => (
                                <span
                                  key={idx}
                                  className="px-4 py-1 text-xs bg-purple-500/20 text-purple-200 rounded-full border border-purple-400/40"
                                >
                                  {member}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
        <ScrollToTopButton />
    </div>
  );

};

// export default DemoPage;

export default DemoPage;

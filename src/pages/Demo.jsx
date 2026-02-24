import React from "react";
import { useState, useRef } from "react";
// Define demo data as an array of objects with name, description, and image
// const demoData = [
//   {
//     name: "E security guard",
//     description: "This module helps in giving temporary access to guests in the department through facial recognition, sending OTP through mail to unlock doors upon successful detection, and also gives the details of a person's time of entering into the department using a speaker.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460544/securityguard_otrlei.webp",
//   },
//   {
//     name: "Electric vehicle using Theo Jansen Mechanism",
//     description: "Electric vehicle using Theo Jansen mechanism integrates motor-driven mechanical legs instead of wheels, enabling smooth and efficient multi-terrain mobility. Theo Jansen mechanism mimics natural walking patterns, reducing energy consumption compared to traditional wheeled vehicles. This design enhances adaptability on uneven surfaces, making it suitable for exploration and transport applications. Its bio-inspired design allows for better obstacle negotiation, making it ideal for off-road and rugged environments.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460490/electricvehicle_pvsymo.webp",
//   },
//   {
//     name: "Musical Staircase",
//     description: "The Musical Staircase is an interactive installation that uses PIR motion sensors mounted on stairs to detect movement and trigger musical notes. When someone walks up or down the stairs, the Arduino UNO detects their presence through the PIR sensors and sends signals to a computer, which then plays corresponding notes through a Python script, effectively turning the staircase into a musical instrument.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460507/musicalstaircase_fkya4v.jpg",
//   },
//   {
//     name: "Indigenous fabrication of flexible neural implants",
//     description: "This custom-designed and indigenously fabricated ECoG neural implant is used for the exploration of brain regions related to Parkinson's disease in small animal models before proposing in humans. The design is very unique in the world. The Polyimide flexible substrate material is a good biocompatible material. The electrode materials are chosen such that they support electrophysiological signal acquisition/brain stimulation.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460498/Indigenous_fabrication_of_flexible_neural_implants_-_Sreenivas_Bhaskara_k1qdy5.webp",
//   },
//   {
//     name: "Polarization-based Optical system for Heart Tissue Characterization",
//     description: "An optical system is developed to perform real-time and precise characterization of healthy and fibrotic myocardial tissues, facilitating quicker and more accurate diagnosis of cardiovascular disorders. It is envisaged that the developed technology has the potential to transform cardiac care and improve patient outcomes, thus reducing the global burden of heart diseases.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460538/Polarization-based_Optical_system_for_Heart_Tissue_Characterization_-_Twinkle_Bagha_jxujbs.webp",
//   },
//   {
//     name: "Handheld Fluorescence Imaging System",
//     description: "The Handheld Fluorescence Imaging System is a portable device that uses fluorescence imaging to detect and visualize biological markers, aiding in medical diagnostics. It captures real-time images of fluorescent signals emitted by tissues or cells, enabling non-invasive detection of diseases like cancer or infections. The compact design makes it ideal for point-of-care applications in clinical settings.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460494/HFIS_-_Aloysious_Benoy_umac5u.webp",
//   },
//   {
//     name: "Vein visualizer for assisting with cannulation.",
//     description: "The Vein Visualizer uses Near-Infrared (NIR) imaging to enhance vein visibility for easier cannulation. It captures and displays real-time vein patterns on a screen, aiding healthcare professionals in locating optimal insertion points. This reduces needle insertion attempts, improving accuracy and patient comfort, especially for those with difficult venous access (DVA).",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460565/vein_visualizer_-_Manikumar_R_oekgq3.webp",
//   },
//   {
//     name: "Van de Graaff generator",
//     description: "A Van de Graaff generator is an electrostatic generator that uses a moving belt to accumulate electric charge on a hollow metal globe on the top of an insulated column, creating very high electric potentials. It produces very high-voltage direct current (DC) electricity at low current levels.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460556/Van_de_graaff_generator_-_AJINKYA_DESHPANDE_udoe0m.jpg",
//   },
//   {
//     name: "Cytology scanner for oral cancer screening",
//     description: "An affordable and portable miniaturized version of a slide scanner for automated scanning and digitization of pathological slides.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460486/Cytology_scanner_for_oral_cancer_screening_-_Anujkumar_Prajapati_kjztae.webp",
//   },
//   {
//     name: "ML-based Hand Gesture Recognition System at the Edge",
//     description: "Hand Gesture Recognition System for Edge devices, that senses EMG signals, then uses a hardware classifier to classify them into respective gestures.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460551/tmp_2c2e7fdb-66c1-47e5-8c70-409200be5e4c_-_Swarnima_Mishra_sj3ltk.webp",
//   },
//   {
//     name: "Vein Visualiser",
//     description: "The Vein Visualizer is a biomedical device designed to assist healthcare professionals in locating veins for cannulation using Near-Infrared (NIR) imaging. NIR light penetrates the skin and is absorbed differently by blood and surrounding tissues, enhancing vein contrast. The captured vein patterns are processed and displayed on a screen in real-time, allowing medical personnel to identify optimal insertion points. This system is particularly useful for patients with difficult venous access (DVA), such as infants, elderly individuals, and those with obesity or dark skin tones. By improving vein visibility, the device enhances the accuracy of cannulation, reduces multiple needle insertion attempts, and minimizes patient discomfort.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460560/Vein_Visualiser_-_Aravind_Karthik_kdmy1n.webp",
//   },
//   {
//     name: "Electrical Impedance-based Multiplexed Biosensor for Point-of-Care Diagnosis",
//     description: "This project focuses on developing an innovative, cost-effective biosensor multiple analyte detection. The interdigitated electrodes (IDEs) on a PCB with a soft gold finish utilize electrical impedance sensing. The IDEs are chemically modified using various surface chemistries to enhance antibody immobilization and stability. This impedance-based biosensor can be tailored with specific bioreceptors to target multiple analytes in a single bioassay. The biosensor is paired with a compact impedance sensing module for precise EIS measurements.Additionally, the project aims to address the limitations of traditional biosensors, which typically detect single analytes and require individual measurements. By designing a simultaneous multiple analyte detection immunosensor array, this project seeks to enable large-scale manufacturing, reduce costs, and create reusable sensors for various scientific and industrial applications, from environmental monitoring to medical diagnostics. This immunosensor is a compact benchtop system that can be used as a reusable point-of-care device, unlike screenprinted electrode-based biosensors. This impedance-based biosensor can be tailored with specific bioreceptors to target various analytes.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460489/Electrical_Impedance-based_Multiplexed_Biosensor_for_Point-of-Care_Diagnosis_-_MOODE_SUSHMA_NAIK_moralk.webp",
//   },
//   {
//     name: "Optical modality for breast cancer tumor delineation",
//     description: "Breast cancer is one of the leading causes of death in the female population worldwide. This research explores a robust and cost-effective Elastic Scattering Spectroscopy (ESS)-based probe that aids surgeons in effectively diagnosing breast cancer during surgery, reducing the mortality rate through early and precise detection.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460536/Optical_modality_for_breast_cancer_tumor_deliration_-_Apurva_Dahake_igzriu.webp",
//   },
//   {
//     name: "Head bands for Auditory Hearing Screening",
//     description: "A novel system for detecting auditory malfunctions and defects in humans using headbands equipped with sensors to analyze auditory responses, enabling early diagnosis of hearing impairments.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460485/Auditory_Hearing_screenign_system_-_saravanan_murugaiyan_cx0pte.webp",
//   },
//   {
//     name: "QCM for liver cirrhosis screening",
//     description: "The system consists of a sensor array module for an E-Nose system featuring a combination of Quartz Crystal Microbalance (QCM) sensors, metal oxide sensors, and system parameter monitors. It also includes an acquisition module that integrates electronic and pneumatic components to analyze exhaled breath signatures for liver cirrhosis screening.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460541/QCM_for_liver_cirrhosis_screening_-_Amaresh_S_ycbj39.webp",
//   },
//   {
//     name: "Keyword Spotting in Audio Data for Edge Devices using Machine Learning Algorithms on an FPGA Platform",
//     description: "Implementing real-time keyword spotting on an FPGA platform using machine learning algorithms optimized for edge devices, enabling low-power and efficient voice recognition for edge AI applications.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460504/Keyword_Spotting_in_Audio_Data_for_Edge_Devices_using_Machine_Learning_Algorithms_on_an_FPGA_Platforms_-_SHOBHIT_VERMA_wtf7zp.webp",
//   },
//   {
//     name: "Solving Graph Max Cut with FPGA Acceleration",
//     description: "This project explores the efficacy of probabilistic computing in solving the max-cut problem, a common challenge in optimization. It uses a fast and scalable 2048-node system, called pc-COP, implemented on a Xilinx UltraScale+ FPGA.",
//     image: "https://res.cloudinary.com/dtgkwatby/image/upload/v1747460547/Solving_Graph_Max_Cut_with_FPGA_-_Elizabeth_Kuruvilla_hyek7y.webp",
//   },
// ];

// const DemoPage = () => {
//   return (
//     <div className="relative z-0 min-h-screen bg-gradient-to-b from-[#030418] to-[#0a0b2e]">
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[url('/src/assets/tech-pattern.svg')] opacity-5"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
//         <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 animate-text-glow">
//           Demo Projects
//         </h1>
//         <p className="text-lg text-center text-gray-300 mb-12 max-w-2xl mx-auto">
//           Experience cutting-edge technology through our innovative demonstrations
//         </p>

//         <div className="space-y-12"> 
//           {demoData.map((demo, index) => (
//             <div
//               key={index}
//               className="group relative bg-[#0a0b2e]/80 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-blue-500/20 max-w-3xl mx-auto"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
//               <div className="relative z-10">
//                 <img
//                   src={demo.image}
//                   alt={demo.name}
//                   className="w-full h-64 object-contain rounded-xl mb-6 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
//                 />
//                 <h2 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#ececed] via-[#d4b6ff] to-[#b584fd]">
//                   {demo.name}
//                 </h2>
//                 <p className="text-gray-300 text-base leading-relaxed">
//                   {demo.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const labData = [
  {
    labName: "Biomedical and Electronic Engineering Systems Lab (BEES)",
    labLogo: "/src/assets/nano-logo.png",
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
    labName: "Circuits and Security Research Lab (CSRL)",
    labLogo: "/src/assets/nano-logo.png",
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
    labName: "Embedded Systems Lab",
    labLogo: "/src/assets/nano-logo.png",
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
      {
        title: "The Inverted Pendulum Path Seeker",
        description: "A two-wheeled self-balancing robot that uses an IMU and PID control to maintain upright stability. Stepper motors with micro-stepping provide high-resolution motion control. Integrated IR line sensors enable simultaneous balance maintenance and path tracking, demonstrating advanced sensor fusion and nested control logic for autonomous navigation.",
        team: ["Shrihari", "Srushti Bailurkar", "Rajani G"]
      },
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
    labLogo: "/src/assets/nano-logo.png",
    projects: [
      {
        title: "Van de Graaff Generator",
        description: "A Van de Graaff generator builds up high voltage using a moving belt to transfer electric charge. A motor-driven insulating belt moves through two rollers, one at the base and one at the top. At the base, a comb-like electrode deposits charge onto the belt via corona discharge. As the belt moves, it carries the charge upward to a hollow metal sphere. Another comb at the top transfers the charge to the sphere, accumulating high voltage. The process continues until electrical breakdown occurs or the leakage equals the charging rate. It is used in physics experiments and particle accelerators.",
        team: ["Mayank Yadav", "Harihar Nath", "Ajinkya Deshpande", "Harsh Raj", "Utpreksh Pathbaje", "Ishaan"]
      },

    ]
  },
  {
    labName: "NeuRonICS Lab",
    labLogo: "/src/assets/nano-logo.png",
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
    labLogo: "/src/assets/nano-logo.png",
    projects: [
      {
        title: "Password Cracking using Power Side Channel Attack",
        description: "This project demonstrates password extraction using a Power Side-Channel Attack (SCA) on an STM32 microcontroller with the help of ChipWhisperer. Power consumption traces are captured while the device performs password comparison. Data-dependent variations in power reveal information about correct and incorrect characters. By analyzing these traces, the secret password can be recovered byte-by-byte. This highlights the importance of implementing side-channel countermeasures in embedded systems.",
        team: ["Azeem Gadkari", "Sudipta Debnath "]
      },

    ]
  },
  
  
];

// const DemoPage = () => {
//   return (
//     <div className="relative z-0 min-h-screen bg-gradient-to-b from-[#030418] to-[#0a0b2e]">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-[url('/src/assets/tech-pattern.svg')] opacity-5"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
//         {/* Page Title */}
//         <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 animate-text-glow">
//           Research Projects
//         </h1>

//         <p className="text-lg text-center text-gray-300 mb-12 max-w-2xl mx-auto">
//           Explore Innovative Research Demonstrations from our laboratories.
//         </p>

//         {/* Lab Cards */}
//         <div className="space-y-12">
//           {labData.map((lab, index) => (
//             <div
//               key={index}
//               className="group relative bg-[#0a0b2e]/80 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-blue-500/20 max-w-4xl mx-auto"
//             >
//               <div className="relative z-10">
//                 {/* Lab Header */}
//                 <div className="flex items-center gap-6 mb-8">
//                   <img
//                     src={lab.labLogo}
//                     alt={lab.labName}
//                     className="w-20 h-20 object-contain rounded-lg"
//                   />
//                   <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ececed] via-[#d4b6ff] to-[#b584fd]">
//                     {lab.labName}
//                   </h2>
//                 </div>

//                 {/* Projects */}
//                 <div className="space-y-6">
//                   {lab.projects.map((project, i) => (
//                     <div
//                       key={i}
//                       className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300"
//                     >
//                       {/* Project Title */}
//                       <h3 className="text-lg font-semibold text-blue-300 mb-2">
//                         {project.title}
//                       </h3>

//                       {/* Description */}
//                       <p className="text-gray-300 text-sm leading-relaxed mb-4">
//                         {project.description}
//                       </p>

//                       {/* Team Section */}
//                       <div>
//                         <p className="text-sm font-semibold text-purple-300 mb-2">
//                           Project Team
//                         </p>

//                         <div className="flex flex-wrap gap-2">
//                           {project.team.map((member, idx) => (
//                             <span
//                               key={idx}
//                               className="px-3 py-1 text-xs bg-purple-500/20 text-purple-200 rounded-full border border-purple-400/30"
//                             >
//                               {member}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };



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
      
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/src/assets/tech-pattern.svg')] opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400 animate-text-glow">
          Research Projects
        </h1>

        <p className="text-lg text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore Innovative Research Demonstrations from our laboratories.
        </p>

        {/* Labs */}
        <div className="space-y-16">
          {labData.map((lab, labIndex) => (
            <div
              key={labIndex}
              className="relative bg-[#0a0b2e]/80 p-8 rounded-2xl backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all duration-500 max-w-4xl mx-auto"
            >
              {/* Gradient Glow Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"></div>

              <div className="relative z-10">
                {/* Lab Header */}
                <div className="flex items-center gap-6 mb-10">
                  <img
                    src={lab.labLogo}
                    alt={lab.labName}
                    className="w-20 h-20 object-contain rounded-xl shadow-md"
                  />
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ececed] via-[#d4b6ff] to-[#b584fd]">
                    {lab.labName}
                  </h2>
                </div>

                {/* Projects */}
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
                        {/* Clickable Header */}
                        <div
                          onClick={() =>
                            handleToggle(labIndex, projectIndex)
                          }
                          className="flex justify-between items-center p-6 cursor-pointer"
                        >
                          <h3 className="text-lg font-semibold text-blue-300">
                            {project.title}
                          </h3>

                          {/* Animated Chevron */}
                          <div
                            className={`transform transition-transform duration-500 text-purple-400 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            ▼
                          </div>
                        </div>

                        {/* Expandable Section */}
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
                                  className="px-4 py-1 text-xs bg-purple-500/20 text-purple-200 rounded-full border border-purple-400/40 backdrop-blur-sm hover:bg-purple-500/30 transition"
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
    </div>
  );
};

// export default DemoPage;

export default DemoPage;
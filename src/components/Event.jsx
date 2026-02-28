import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  RiCalendarEventLine,
  RiMapPinLine,
  RiTimeLine,
} from "@remixicon/react";

import Theo from "../assets/Event/theo.png";
import AirWrite from "../assets/Event/airwrite.png";
import MusicalStair from "../assets/Event/musical_stair.png";
import Kids from "../assets/Event/kids.png";
import Robo from "../assets/Event/robo.png";
import Maze from "../assets/Event/maze.png";
import Palm from "../assets/Event/palm.png";
import Artist from "../assets/Event/artist.png";
import HackathonPoster from "../assets/Event/hackathon.jpg";


// ================= EVENTS DATA =================
const eventsData = [
  {
    id: 1,
    title: "ESE Open Day Hackathon 2026",
    date: "07-Mar-2026",
    time: "9:30 AM - 12:30 PM",
    location: "Room 305, ESE Building",
    image: HackathonPoster,
    redirect: true
  },
  {
    id: 2,
    title: "Octa-Stride",
    date: "07-Mar-2026",
    location: "ESE Building",
    image: Theo
  },
  {
    id: 3,
    title: "AI Air Writing",
    date: "07-Mar-2026",
    location: "ESE Building",
    image: AirWrite
  },
  {
    id: 4,
    title: "Musical Staircase",
    date: "07-Mar-2026",
    location: "2nd Floor Staircase",
    image: MusicalStair
  },
  {
    id: 5,
    title: "Saras Robot Assistant",
    date: "07-Mar-2026",
    location: "ESE Building",
    image: Robo
  },
  {
    id: 6,
    title: "Maze Solver",
    date: "07-Mar-2026",
    location: "ESE Building",
    image: Maze
  },
  {
    id: 7,
    title: "PalmPilot Maze",
    date: "07-Mar-2026",
    location: "ESE Building",
    image: Palm
  },
  {
    id: 8,
    title: "Robo Artist",
    date: "07-Mar-2026",
    location: "ESE Building",
    image: Artist
  },
  {
    id: 9,
    title: "Kids Zone",
    date: "07-Mar-2026",
    location: "ESE Building",
    image: Kids
  }
];


const Event = () => {

  const navigate = useNavigate();

  return (
    <div
      id="event-highlights"
      className="relative py-28 md:py-40 px-6 overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-20 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-purple-300 to-indigo-400 bg-clip-text text-transparent">
            Event Highlights
          </span>
        </motion.h2>


        {/* ================= HACKATHON FULL WIDTH ================= */}
        {eventsData
          .filter((event) => event.redirect)
          .map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
              onClick={() => navigate("/Hackathon")}
              className="mb-24 cursor-pointer group relative bg-gradient-to-br from-[#0a0f2d]/90 to-[#11185a]/70 rounded-3xl overflow-hidden backdrop-blur-xl border border-purple-500/30 hover:border-purple-400 transition-all duration-500 shadow-2xl"
            >
              <div className="grid md:grid-cols-2 items-center relative">

                {/* Image */}
                <div className="relative h-72 md:h-96 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-10">
                  <h3 className="text-4xl font-bold mb-6 text-white group-hover:text-purple-300 transition-colors duration-300 tracking-tight">
                    {event.title}
                  </h3>

                  <div className="space-y-4 text-lg text-gray-300">
                    <div className="flex items-center gap-3">
                      <RiCalendarEventLine className="w-6 h-6 text-purple-400" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <RiTimeLine className="w-6 h-6 text-purple-400" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <RiMapPinLine className="w-6 h-6 text-purple-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/Hackathon");
                      }}
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-white hover:to-white hover:text-[#0a0f2d] text-white font-semibold px-7 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-400/50"
                    >
                      Know More and Register
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}


        {/* ================= NORMAL EVENTS GRID ================= */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-12">
          {eventsData
            .filter((event) => !event.redirect)
            .map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 120 }}
                viewport={{ once: true }}
                className="group relative bg-[#0f133d]/70 rounded-2xl overflow-hidden backdrop-blur-lg border border-purple-500/20 hover:border-purple-400 transition-all duration-500 w-full max-w-sm shadow-lg hover:shadow-purple-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f2d]/50 to-[#0a0f2d] opacity-80 z-10"></div>

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="relative z-20 p-6 -mt-10">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white tracking-tight group-hover:text-purple-300 transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="space-y-3 text-base text-gray-300">
                    <div className="flex items-center gap-3">
                      <RiCalendarEventLine className="w-5 h-5 text-purple-400" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <RiMapPinLine className="w-5 h-5 text-purple-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>


        {/* ================= COORDINATORS ================= */}
        <div className="w-full max-w-5xl mx-auto mt-24">
          <div className="relative bg-[#0a0b2e]/70 p-10 rounded-3xl backdrop-blur-xl border border-purple-500/20 shadow-xl">
            <h2 className="text-2xl font-semibold text-purple-300 mb-10 text-center tracking-wide">
              Event Coordinators
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  name: "Pranjal Upadhyay",
                  role: "MTech MVLSI 1st Year",
                  email: "pranjalu@iisc.ac.in",
                  phone: "+91-8218017135",
                },
                {
                  name: "Chirag Purwar",
                  role: "MTech ESE 1st Year",
                  email: "chiragpurwar@iisc.ac.in",
                  phone: "+91-8543838080",
                },
                {
                  name: "Akash Ranjan Sahu",
                  role: "MTech MVLSI 2nd Year",
                  email: "akashsahu@iisc.ac.in",
                  phone: "+91-7077139224",
                },
              ].map((person, index) => (
                <div
                  key={index}
                  className="bg-[#11154d]/70 backdrop-blur-lg p-6 rounded-xl border border-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-purple-400/30"
                >
                  <p className="text-lg font-semibold text-white mb-2">
                    {person.name}
                  </p>
                  <p className="text-purple-300 text-sm mb-3">
                    {person.role}
                  </p>
                  <p className="text-gray-300 text-sm">{person.email}</p>
                  <p className="text-gray-400 text-sm mt-1">{person.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Event;
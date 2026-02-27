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
import HackathonPoster from "../assets/Event/hackathon.jpg";


// ================= EVENTS DATA =================
const eventsData = [
  {
    id: 1,
    title: "ESE Open Day Hackathon 2026",
    date: "07-Mar-2026",
    time: "9:00 AM - 1:00 PM",
    location: "Room 305, ESE Building",
    image: HackathonPoster,
    redirect: true
  },
  {
    id: 2,
    title: "Theo Jansen",
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
    title: "Kids Zone",
    date: "07-Mar-2026",
    location: "ESE Building",
    image: Kids
  }
];


const Event = () => {

  const navigate = useNavigate();

  return (
    <div id="event-highlights" className="relative py-20 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ececed] via-[#d4b6ff] to-[#b584fd] animate-text-shimmer">
            Event Highlights
          </span>
        </motion.h2>


        {/* ================= HACKATHON FULL WIDTH ================= */}
        {eventsData
          .filter((event) => event.redirect)
          .map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px 10px rgba(181,132,253,0.4)",
              }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => navigate("/Hackathon")}
              className="mb-20 cursor-pointer group relative bg-[#0a0f2d]/90 rounded-3xl overflow-hidden backdrop-blur-lg border border-[#b584fd]/40 hover:border-[#b584fd] transition-all duration-500"
            >
              <div className="grid md:grid-cols-2 items-center">
                <div className="h-72 md:h-96 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-10">
                  <h3 className="text-4xl font-bold mb-6 text-white group-hover:text-[#b584fd] transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="space-y-4 text-lg text-gray-300">
                    <div className="flex items-center gap-3">
                      <RiCalendarEventLine className="w-6 h-6 text-[#b584fd]" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <RiTimeLine className="w-6 h-6 text-[#b584fd]" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <RiMapPinLine className="w-6 h-6 text-[#b584fd]" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/Hackathon");
                      }}
                      className="bg-[#b584fd] hover:bg-white hover:text-[#0a0f2d] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
                    >
                      Know More and Register
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}


        {/* ================= NORMAL EVENTS GRID ================= */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {eventsData
            .filter((event) => !event.redirect)
            .map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 0 25px 8px rgba(155,93,229,0.35)",
                }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="group relative bg-[#0a0f2d]/80 rounded-2xl overflow-hidden backdrop-blur-lg border border-[#6354C3]/20 hover:border-[#b584fd]/50 transition-all duration-500 w-full max-w-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f2d]/50 to-[#0a0f2d] opacity-80 z-10"></div>

                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="relative z-20 p-6 -mt-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-[#b584fd] transition-colors duration-300">
                    {event.title}
                  </h3>

                  <div className="space-y-3 text-base text-gray-300">
                    <div className="flex items-center gap-3">
                      <RiCalendarEventLine className="w-5 h-5 text-[#b584fd]" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <RiMapPinLine className="w-5 h-5 text-[#b584fd]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Event;
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  RiCalendarEventLine,
  RiMapPinLine,
  RiTimeLine,
} from "@remixicon/react";

import Event1 from "../assets/Event/1.png";
import Event2 from "../assets/Event/2.png";
import Event3 from "../assets/Event/3.png";
import Event4 from "../assets/Event/4.png";
import Event5 from "../assets/Event/5.png";
import Event6 from "../assets/Event/6.png";
import HackathonPoster from "../assets/Event/6.png"; // Change if needed

const eventsData = [
  {
    id: 9,
    title: "DESE Open Day Hackathon 2026",
    date: "07-Mar-2026",
    time: "9:00 AM - 1:00 PM",
    location: "DESE Main Building",
    image: HackathonPoster,
  },
  {
    id: 8,
    title: "Buzz Wire Game",
    date: "07-Mar-2026",
    // time: "10:00 AM",
    location: "Near CSRL Lab, DESE",
    image:
      "https://res.cloudinary.com/dtgkwatby/image/upload/v1747459843/WhatsApp_Image_2025-02-25_at_23.54.41_0111e6a3_t1fkfg.jpg",
  },
  {
    id: 7,
    title: "Laser Labyrinth",
    date: "07-Mar-2026",
    location: "Room 129, DESE",
    image: Event1,
  },
  {
    id: 2,
    title: "Drone Odyssey",
    date: "07-Mar-2026",
    // time: "10:00 AM - 4:00 PM",
    location: "DESE Front Lawn",
    image: Event2,
  },
  {
    id: 3,
    title: "Musical Staircase",
    date: "07-Mar-2026",
    // time: "11:00 AM - 1:00 PM",
    location: "2nd Floor Staircase",
    image: Event3,
  },
  {
    id: 4,
    title: "Kids Zone",
    date: "07-Mar-2026",
    // time: "9:30 AM - 5:00 PM",
    location: "NPTEL Office",
    image: Event4,
  },
  {
    id: 5,
    title: "Virtual Shooting",
    date: "07-Mar-2026",
    location: "Room 137, DESE",
    image: Event5,
  },
  {
    id: 6,
    title: "Maze Runner",
    date: "07-Mar-2026",
    // time: "2:30 PM - 4:00 PM",
    location: "Room 134, DESE",
    image: Event6,
  },
];

const Event = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = selectedEvent ? "hidden" : "auto";
  }, [selectedEvent]);

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
          .filter((event) => event.id === 9)
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
              onClick={() => setSelectedEvent(event)}
              className="mb-20 group relative bg-[#0a0f2d]/90 rounded-3xl overflow-hidden backdrop-blur-lg border border-[#b584fd]/40 hover:border-[#b584fd] transition-all duration-500"
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

                    {event.time && (
                      <div className="flex items-center gap-3">
                        <RiTimeLine className="w-6 h-6 text-[#b584fd]" />
                        <span>{event.time}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      <RiMapPinLine className="w-6 h-6 text-[#b584fd]" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <div className="mt-8">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/contact"); // Change if your route is different
                      }}
                      className="bg-[#b584fd] hover:bg-white hover:text-[#0a0f2d] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
                    >
                      Contact Hackathon Coordinators
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        {/* ================= NORMAL EVENTS GRID ================= */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {eventsData
            .filter((event) => event.id !== 9)
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
                onClick={() => setSelectedEvent(event)}
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

                    {event.time && (
                      <div className="flex items-center gap-3">
                        <RiTimeLine className="w-5 h-5 text-[#b584fd]" />
                        <span>{event.time}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-3">
                      <RiMapPinLine className="w-5 h-5 text-[#b584fd]" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* ================= MODAL ================= */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#0a0f2d] rounded-2xl p-6 md:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto relative border border-[#b584fd]/30"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 text-[#b584fd] hover:text-white"
              >
                ✕
              </button>

              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-contain rounded-xl mb-6"
              />

              <h3 className="text-3xl font-bold text-white mb-4">
                {selectedEvent.title}
              </h3>

              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <RiCalendarEventLine className="w-5 h-5 text-[#b584fd]" />
                  <span>{selectedEvent.date}</span>
                </div>

                {selectedEvent.time && (
                  <div className="flex items-center gap-3">
                    <RiTimeLine className="w-5 h-5 text-[#b584fd]" />
                    <span>{selectedEvent.time}</span>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <RiMapPinLine className="w-5 h-5 text-[#b584fd]" />
                  <span>{selectedEvent.location}</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Event;
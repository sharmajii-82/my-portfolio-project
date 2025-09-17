import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/experience`);
        setExperiences(res.data);
      } catch (err) {
        console.error("Failed to fetch experiences:", err);
      }
    };
    fetchExperiences();
  }, []);

  return (
    <section id="experience" className="py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl"
          style={{
            width: `${Math.random() * 120 + 60}px`,
            height: `${Math.random() * 120 + 60}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 20 - 10],
            y: [0, Math.random() * 20 - 10],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 8 + 6,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-gray-400 to-purple-300"
      >
        👻 Experience
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {experiences.length > 0 ? (
          experiences.map((exp, i) => (
            <motion.div
              key={exp._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative p-6 bg-gray-800/60 backdrop-blur-lg border border-gray-700 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition duration-300 hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-indigo-300 mb-2">{exp.role}</h3>
              <p className="text-sm font-medium text-purple-400">{exp.company}</p>
              <p className="text-xs italic mb-3 text-gray-400">{exp.duration}</p>
              <p className="text-sm text-gray-300 line-clamp-3">{exp.description}</p>
              <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-sm col-span-full">No experiences found.</p>
        )}
      </div>
    </section>
  );
}

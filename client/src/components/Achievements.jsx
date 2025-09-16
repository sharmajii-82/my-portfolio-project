// Achievements.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Achievements() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/achievements");
        setAchievements(res.data);
      } catch (err) {
        console.error("Failed to fetch achievements:", err);
      }
    };
    fetchAchievements();
  }, []);

  return (
    <section
      id="achievements"
      className="py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black text-gray-200 relative overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 
        bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 
        bg-clip-text text-transparent"
      >
        🚀 Achievements
      </motion.h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {achievements.length > 0 ? (
          achievements.map((ach, i) => (
            <motion.div
              key={ach._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative p-6 bg-gray-800/60 backdrop-blur-lg 
              border border-gray-700 rounded-xl shadow-lg 
              hover:shadow-purple-500/30 transition duration-300 hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-purple-300 mb-2">
                {ach.title}
              </h3>
              <p className="text-xs text-gray-400 italic mb-2">
                {ach.date}
              </p>
              <p className="text-sm text-gray-300 line-clamp-3">
                {ach.description}
              </p>

              <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-sm col-span-full">
            No achievements found.
          </p>
        )}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Make sure to include this in your index.html or _app.js:
// <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet">

export default function Hero() {
  const [displayName, setDisplayName] = useState("");
  const fullName = "Hi, I am Saurabh Sharma";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayName(fullName.slice(0, index + 1));
      index++;
      if (index === fullName.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black"
    >
      {/* Profile with simple ring */}
      <motion.div
        className="relative w-48 h-48 mb-6 z-10 flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Simple subtle ring */}
        <div className="absolute w-52 h-52 rounded-full border-4 border-purple-600/30" />
        <img
          src="https://i.postimg.cc/DZf7Wzb6/saurabh-photo.jpg"
          alt="Saurabh Sharma"
          className="w-44 h-44 rounded-full object-cover border-2 border-gray-900 shadow-xl relative z-10"
        />
      </motion.div>

      {/* Name in cursive */}
      <motion.h1
        className="text-4xl md:text-5xl text-white tracking-wide animate-pulse"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {displayName}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl mt-2 text-gray-300 italic z-10"
      >
        Aspiring Full Stack Developer
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex gap-5 mt-6 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <button
          onClick={scrollToContact}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
        >
          Contact Me
        </button>
        <a
          href="https://drive.google.com/file/d/1l4sQ5N1hIdGCeBDWjsy82D3Dsm3b5yKY/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/50 transition transform hover:scale-105"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 z-10 flex flex-col items-center text-gray-400"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span className="text-sm tracking-wide">Scroll Down</span>
        <div className="w-5 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-1 mt-1">
          <motion.div
            className="w-1.5 h-2 bg-gray-400 rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

// About.jsx
import { motion } from "framer-motion";
import { FaLaptopCode, FaGamepad, FaBook } from "react-icons/fa";

export default function About() {
  const skills = [
    "JavaScript", "React.js", "Node.js",
    "Express.js", "MongoDB", "HTML",
    "CSS", "Tailwind CSS"
  ];

  const stats = [
    { label: "Projects Completed", value: 3 },
    { label: "Technologies Learned", value: 2 },
    { label: "Years of Experience", value: 3 }
  ];

  const hobbies = [
    { icon: <FaGamepad />, label: "Gaming" },
    { icon: <FaBook />, label: "Reading" }
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-10 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden text-gray-300"
    >
      {/* Floating Neon Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl"
          style={{
            width: `${Math.random() * 120 + 60}px`,
            height: `${Math.random() * 120 + 60}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 30 - 15],
            y: [0, Math.random() * 30 - 15],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: Math.random() * 12 + 6, repeat: Infinity, repeatType: "mirror" }}
        />
      ))}

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-pink-400 to-purple-400 animate-shimmer"
      >
        👨‍💻 About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-gray-300 text-base leading-relaxed">
            I’m a final-year <span className="text-indigo-400 font-semibold">Computer Science</span> student at 
            <span className="text-indigo-400 font-semibold"> Centurion University</span>. I build <span className="text-pink-400 font-semibold">full-stack web apps</span> with elegant UI and smooth animations.
          </p>

          <h3 className="text-xl font-semibold text-indigo-300">Skills</h3>
          <div className="flex flex-wrap gap-3 mt-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.15, rotate: 3, backgroundColor: "#6d28d9", color: "#fff" }}
                className="px-3 py-1 rounded-full border-2 border-transparent bg-gradient-to-r from-indigo-700/20 to-purple-700/20 backdrop-blur-md text-indigo-200 text-xs cursor-pointer font-medium transition-all duration-300 hover:border-indigo-400 hover:shadow-lg"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Fun Stats */}
          <div className="flex flex-wrap gap-6 mt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center w-40 shadow-md hover:shadow-indigo-500/50 transition-shadow duration-300"
              >
                <span className="text-2xl font-bold text-indigo-300">{stat.value}+</span>
                <span className="text-xs text-gray-400">{stat.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Hobbies/Interests */}
          <div className="flex flex-wrap gap-6 mt-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-md hover:shadow-pink-400/40 transition-shadow duration-300 cursor-pointer"
              >
                {hobby.icon}
                <span className="text-xs text-gray-300">{hobby.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column - 3D Interactive Icon Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center perspective"
        >
          <motion.div
            whileHover={{ rotateY: 20, rotateX: 10, scale: 1.05 }}
            className="relative w-56 h-56 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-center transition-transform duration-500"
          >
            <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-3xl -z-10 opacity-0 hover:opacity-100 transition-opacity duration-500" />
            <FaLaptopCode className="text-indigo-400 text-7xl z-10 drop-shadow-lg" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/projects`);
        setProjects(res.data);
      } catch (err) {
        console.error("Failed to fetch projects:", err);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="py-16 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
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
            x: [0, Math.random() * 30 - 15],
            y: [0, Math.random() * 30 - 15],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 10 + 6,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-gray-400 to-purple-300 animate-shimmer"
      >
        🚀 Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {projects.length > 0 ? (
          projects.map((project, i) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ scale: 1.03 }}
              className="relative p-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 shadow-sm hover:shadow-purple-500/20 transition-transform duration-300 group"
            >
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-indigo-500/10 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition"
              />
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-32 object-cover rounded-md mb-2"
                />
              )}
              <h3 className="font-semibold text-md mb-1 text-indigo-300">{project.name}</h3>
              <p className="mb-1 text-gray-300 text-xs line-clamp-3">{project.description}</p>
              <p className="text-[10px] mb-2 italic text-purple-400">{project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 underline text-xs"
              >
                🔗 View Project
              </a>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-sm">No projects found.</p>
        )}
      </div>
    </section>
  );
}

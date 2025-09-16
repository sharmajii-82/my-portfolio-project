import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="relative py-10 px-6 
      bg-gradient-to-b from-black via-gray-900 to-black 
      text-gray-300 overflow-hidden"
    >
      {/* Floating subtle orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-20 h-20 rounded-full bg-purple-600/20 blur-2xl"
          initial={{ x: Math.random() * window.innerWidth, y: -80 }}
          animate={{ y: [0, 500] }}
          transition={{
            duration: Math.random() * 12 + 8,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Content */}
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-gray-400"
        >
          Made with ❤️ by{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-semibold">
            Saurabh Kumar Sharma
          </span>
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6 text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href="https://www.linkedin.com/in/saurabh-kumar-sharma-5b03a1264/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sharmajii-82"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100 transition"
          >
            <FaGithub />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-xs text-gray-500"
        >
          &copy; {new Date().getFullYear()} Saurabh Kumar Sharma. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}

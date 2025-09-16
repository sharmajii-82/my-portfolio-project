import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const links = ["home", "about", "projects", "experience", "achievements", "contact"];

  const handleScroll = (id) => {
    setActive(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed w-full bg-gradient-to-r from-gray-900/80 via-gray-800/80 to-gray-900/80 dark:from-gray-900 dark:via-gray-800 dark:to-black backdrop-blur-md shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="text-lg md:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 tracking-wide cursor-pointer"
          onClick={() => handleScroll("home")}
        >
          Saurabh Kumar Sharma
        </motion.h1>

        {/* Links (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link, idx) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="group"
            >
              <button
                onClick={() => handleScroll(link)}
                className={`relative capitalize font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300 ${
                  active === link ? "text-indigo-400" : ""
                }`}
              >
                {link}
                <span
                  className={`absolute left-0 bottom-[-4px] h-[2px] bg-indigo-400 rounded-full transition-all duration-300 ${
                    active === link ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Social + Dark Mode */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            href="https://www.linkedin.com/in/saurabh-kumar-sharma-5b03a1264/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
            className="text-indigo-400 hover:text-pink-500 text-lg"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/sharmajii-82"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
            className="text-indigo-400 hover:text-pink-500 text-lg"
          >
            <FaGithub />
          </motion.a>
          <motion.button
            onClick={toggleDarkMode}
            whileHover={{ rotate: 20, scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-yellow-400 dark:text-indigo-400 text-lg focus:outline-none"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-indigo-400 text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col items-center space-y-4 py-6 bg-gray-900/90 dark:bg-black/90 backdrop-blur-lg"
        >
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleScroll(link)}
                className={`capitalize font-medium text-gray-300 hover:text-indigo-400 transition-colors duration-300 ${
                  active === link ? "text-indigo-400" : ""
                }`}
              >
                {link}
              </button>
            </li>
          ))}
          <div className="flex space-x-6 pt-4">
            <a href="https://www.linkedin.com/in/saurabh-kumar-sharma-5b03a1264/" target="_blank" className="text-indigo-400 hover:text-pink-500">
              <FaLinkedin />
            </a>
            <a href="https://github.com/sharmajii-82" target="_blank" className="text-indigo-400 hover:text-pink-500">
              <FaGithub />
            </a>
            <button onClick={toggleDarkMode} className="text-yellow-400 dark:text-indigo-400">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </motion.ul>
      )}
    </motion.nav>
  );
}

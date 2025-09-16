// Contact.jsx
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to send message");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-6 md:px-10 
      bg-gradient-to-b from-black via-gray-900 to-black 
      text-gray-200 overflow-hidden"
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
        📬 Contact Me
      </motion.h2>

      {/* Contact Form */}
      <div className="max-w-xl mx-auto relative z-10 w-full">
        {submitted && (
          <p className="text-green-400 mb-3 text-center font-medium">
            ✅ Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-500 mb-3 text-center font-medium">{error}</p>
        )}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 bg-gray-800/70 
          backdrop-blur-lg p-6 rounded-xl shadow-lg 
          border border-gray-700 hover:shadow-purple-500/30 
          transition"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="px-4 py-2 rounded-lg border border-gray-700 
            bg-black/50 text-gray-200 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-purple-500 
            transition"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="px-4 py-2 rounded-lg border border-gray-700 
            bg-black/50 text-gray-200 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-pink-500 
            transition"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="px-4 py-2 rounded-lg border border-gray-700 
            bg-black/50 text-gray-200 placeholder-gray-500 
            focus:outline-none focus:ring-2 focus:ring-blue-500 
            transition resize-none"
            rows={4}
            required
          />
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 12px #a855f7" }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-5 py-2.5 bg-gradient-to-r 
            from-purple-600 via-pink-600 to-blue-600 
            text-white font-medium rounded-lg shadow-md transition"
          >
            Send Message 🚀
          </motion.button>
        </motion.form>

        <p className="mt-6 text-center text-gray-400 text-sm">
          Or email me at{" "}
          <a
            href={`mailto:${import.meta.env.VITE_EMAIL_USER}`}
            className="text-purple-400 hover:text-pink-400 transition"
          >
            {import.meta.env.VITE_EMAIL_USER}
          </a>
        </p>
      </div>
    </section>
  );
}

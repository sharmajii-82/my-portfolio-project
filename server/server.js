// server/index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

const Contact = require("./models/Contact");
const Project = require("./models/Project");
const Experience = require("./models/Experience");
const Achievement = require("./models/Achievement");

dotenv.config();
const app = express();

// ---------------------- MIDDLEWARE ----------------------
app.use(express.json());

// Allow CORS for your frontend
app.use(cors({
  origin: process.env.FRONTEND_URL, // set in Render: your Vercel URL
  credentials: true
}));

// ---------------------- DATABASE CONNECTION ----------------------
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.error("MongoDB connection error:", err));

// ---------------------- ROOT ROUTE ----------------------
app.get("/", (req, res) => res.send("Portfolio Backend is running"));

// ---------------------- CONTACT ROUTE ----------------------
app.post("/api/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: { rejectUnauthorized: false },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Message from ${contact.name}`,
      text: `Name: ${contact.name}\nEmail: ${contact.email}\nMessage: ${contact.message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// ---------------------- PROJECT ROUTES ----------------------
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.get("/api/projects/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post("/api/projects", async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.delete("/api/projects/:id", async (req, res) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (!deletedProject) return res.status(404).json({ message: "Project not found" });
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------- EXPERIENCE ROUTES ----------------------
app.get("/api/experience", async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ createdAt: -1 });
    res.status(200).json(experiences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post("/api/experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(201).json(experience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------- ACHIEVEMENT ROUTES ----------------------
app.get("/api/achievements", async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ createdAt: -1 });
    res.status(200).json(achievements);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post("/api/achievements", async (req, res) => {
  try {
    const achievement = new Achievement(req.body);
    await achievement.save();
    res.status(201).json(achievement);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ---------------------- SERVER ----------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

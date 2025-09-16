const mongoose = require("mongoose");

const AchievementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Achievement", AchievementSchema);

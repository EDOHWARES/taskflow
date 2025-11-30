import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  deadline: { type: Date },
  priority: { type: String, enum: ["P1", "P2", "P3"], default: "P2" },
}, { timestamps: true });

export default mongoose.model("Task", taskSchema);

const mongoose = require("mongoose");
import { config } from "dotenv";

config();

const MONGO_URI =
  "mongodb+srv://admin:admin%40123@my-app-cluster.cgli7sm.mongodb.net/task-management?authSource=admin";

export const initializeDatabase = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};

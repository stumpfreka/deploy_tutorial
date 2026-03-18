import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("Missing MONGODB_URI in .env");

    const connectionInstance = await mongoose.connect(uri, {
      dbName: DB_NAME,
    });

    console.log(
      `MongoDB Connected: ${connectionInstance.connection.host}/${DB_NAME}`,
    );
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;

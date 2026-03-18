import "dotenv/config";
import connectDB from "./config/database.js";
import app from "./app.js";

const startServer = async () => {
  try {
    await connectDB();

    const port = process.env.PORT || 8000;

    const server = app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });

    server.on("error", (err) => {
      console.error("Server error:", err);
    });
  } catch (error) {
    console.log("MongoDB connection failed!", error);
  }
};

startServer();

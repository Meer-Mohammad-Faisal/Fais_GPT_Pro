import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./configs/database.js";
import Chat from "./models/Chat.js";
import main from "./utils/GeminiAPI.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Connect to MongoDB and Health check route
connectDB();
app.get("/", (req, res) => {
  res.send("Fais-GPT Pro Server is running...");
});

// Chat route
app.post("/chat", async (req, res) => {
  try {
    const { id, msg } = req.body;
    console.log("Incoming request body:", req.body);

    if (!id || !msg) {
      return res
        .status(400)
        .json({ error: "User ID and message are required." });
    }

    // Retrieve previous chat history
    const previousChats = await Chat.find({ userId: id });

    // Format prompt for Gemini
    const promptmessage = [
      ...previousChats.map((chat) => ({
        role: chat.role,
        parts: [{ text: chat.message }],
      })),
      { role: "user", parts: [{ text: msg }] },
    ];

    // Generate AI response
    const answer = await main(promptmessage);

    // Save chat history
    await Chat.create({ userId: id, role: "user", message: msg });
    await Chat.create({ userId: id, role: "model", message: answer });

    res.json({ reply: answer });
  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ error: "Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

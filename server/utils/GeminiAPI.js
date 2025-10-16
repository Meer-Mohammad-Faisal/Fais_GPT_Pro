import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const main = async (promptmessage) => {
  try {
    // Make sure promptmessage matches expected structure
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: promptmessage,
    });

    // Return model output correctly
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to fetch AI response.";
  }
};
export default main;
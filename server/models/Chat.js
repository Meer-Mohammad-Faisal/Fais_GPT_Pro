import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "model"],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;

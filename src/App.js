import ChatContainer from "./components/ChatContainer";
import useChatHistory from "./hooks/useChatHistory";
import useTheme from "./hooks/useTheme";
import { useEffect } from "react";

export default function App() {
  const [messages, setMessages] = useChatHistory();
  const [theme, toggleTheme] = useTheme();
  const userId = "faisal123";

  // Initialize with default welcome message if empty
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "model",
          text: "Hello! I'm Fais-GPT Pro — your enhanced AI assistant. How can I help you today?",
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  // Handle user sending a message
  const sendMessage = async (msg) => {
    if (!msg.trim()) return;

    const userMsg = { role: "user", text: msg, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId, msg }),
      });

      const data = await res.json();
      const botMsg = {
        role: "model",
        text: data.reply || "Sorry, I couldn’t get that.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Error: Unable to reach the server.",
          timestamp: new Date(),
        },
      ]);
    }
  };

  // Handle file uploads
  const handleFileUpload = (file) => {
    const fileData = {
      name: file.name,
      type: file.type,
      size: file.size,
    };
    const reader = new FileReader();
    reader.onload = () => {
      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          fileData: { ...fileData, data: reader.result },
          timestamp: new Date(),
        },
      ]);
    };
    if (file.type.startsWith("image/")) reader.readAsDataURL(file);
    else reader.readAsText(file);
  };

  // Clear chat but keep a friendly reset message
  const clearChat = () => {
    setMessages([
      {
        role: "model",
        text: "Chat history has been cleared. How can I help you today?",
        timestamp: new Date(),
      },
    ]);
  };

  // Export chat to a text file
  const exportChat = () => {
    const text = messages
      .map((m) => `[${m.role}] ${m.text || m.fileData?.name || ""}`)
      .join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "fais-gpt-chat.txt";
    a.click();
  };

  // UI layout
  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-zinc-900 to-indigo-950"
          : "bg-gradient-to-br from-indigo-100 to-white"
      }`}
    >
      <ChatContainer
        messages={messages}
        onSend={sendMessage}
        onClear={clearChat}
        onExport={exportChat}
        theme={theme}
        toggleTheme={toggleTheme}
        onFileUpload={handleFileUpload}
      />
    </div>
  );
}

import { useRef, useState } from "react";

export default function ChatInput({ onSend, onFileUpload }) {
  const [msg, setMsg] = useState("");
  const fileInputRef = useRef();

  const handleSend = () => {
    if (msg.trim()) {
      onSend(msg);
      setMsg("");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) onFileUpload(file);
  };

  return (
    <div className="p-4 bg-zinc-900/70 border-t border-white/10">
      <div className="flex items-center gap-3 mb-2">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 bg-zinc-800/60 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:from-violet-700 hover:to-indigo-700"
        >
          Send
        </button>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-400">
        <button
          onClick={() => fileInputRef.current.click()}
          className="border border-dashed border-gray-500 px-3 py-1.5 rounded-md hover:border-violet-400 hover:text-violet-300 transition"
        >
          📎 Upload File
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*,application/pdf"
        />
      </div>
    </div>
  );
}

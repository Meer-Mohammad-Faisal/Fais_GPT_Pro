import { useEffect, useState } from "react";

export default function useChatHistory() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("fais-gpt-history");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("fais-gpt-history", JSON.stringify(messages));
  }, [messages]);

  return [messages, setMessages];
}

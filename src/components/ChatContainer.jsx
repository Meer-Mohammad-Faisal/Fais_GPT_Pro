
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import ChatInput from "./ChatInput";

export default function ChatContainer({
  messages,
  onSend,
  onClear,
  onExport,
  theme,
  toggleTheme,
  onFileUpload,
}) {
  return (
    <div
      className={`w-full max-w-4xl h-[90vh] mx-auto rounded-2xl flex flex-col border border-violet-400/30 backdrop-blur-md shadow-2xl overflow-hidden ${
        theme === "dark"
          ? "bg-zinc-900/90 text-white"
          : "bg-white/90 text-gray-800"
      }`}
    >
      <ChatHeader
        onClear={onClear}
        onExport={onExport}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <MessageList messages={messages} />
      <ChatInput onSend={onSend} onFileUpload={onFileUpload} />
    </div>
  );
}

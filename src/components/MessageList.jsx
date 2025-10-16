import MessageBubble from "./MessageBubble";

export default function MessageList({ messages }) {
  return (
    <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 scroll-smooth">
      {messages.map((msg, i) => (
        <MessageBubble key={i} {...msg} />
      ))}
    </div>
  );
}

export default function MessageBubble({ role, text, fileData, timestamp }) {
  const isUser = role === "user";

  return (
    <div
      className={`max-w-[85%] rounded-2xl px-4 py-2 shadow-md relative ${
        isUser
          ? "self-end bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-br-md"
          : "self-start bg-zinc-800/80 text-gray-100 border border-violet-500/30 rounded-bl-md"
      }`}
    >
      {fileData ? (
        <div className="flex flex-col gap-2">
          {fileData.type?.startsWith("image/") && fileData.data && (
            <img
              src={fileData.data}
              alt="uploaded"
              className="rounded-lg max-w-[200px] shadow-lg"
            />
          )}
          <div className="text-sm opacity-80">
            {fileData.name} ({(fileData.size / 1024).toFixed(1)} KB)
          </div>
        </div>
      ) : (
        <p className="whitespace-pre-wrap">{text}</p>
      )}

      <div className="text-xs opacity-60 mt-1 text-right">
        {new Date(timestamp || Date.now()).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
}

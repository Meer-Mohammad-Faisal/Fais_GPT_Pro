export default function ChatHeader({ onClear, onExport, theme, toggleTheme }) {
  return (
    <header className="flex items-center justify-between px-5 py-3 bg-gradient-to-r from-violet-700 to-indigo-700 text-white border-b border-white/10">
      <div className="flex items-center gap-3 font-semibold text-lg">
        <span className="text-2xl">🅵</span> Fais-GPT Pro
      </div>
      <div className="flex gap-3">
        <button
          onClick={onClear}
          className="px-3 py-1.5 rounded-lg text-sm bg-white/10 hover:bg-white/20 transition"
        >
          Clear
        </button>
        <button
          onClick={onExport}
          className="px-3 py-1.5 rounded-lg text-sm bg-white/10 hover:bg-white/20 transition"
        >
          Export
        </button>
        <button
          onClick={toggleTheme}
          className="px-3 py-1.5 rounded-lg text-sm bg-white/10 hover:bg-white/20 transition"
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}

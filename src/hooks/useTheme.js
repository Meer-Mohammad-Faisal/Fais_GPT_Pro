import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("fais-gpt-theme") || "dark"
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("fais-gpt-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return [theme, toggleTheme];
}

"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "./UI/styles/UI.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Read theme from document attributes set by Layout script or localStorage fallback
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={styles.btnSecondary}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        padding: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid var(--card-border)",
        cursor: "pointer",
        transition: "all var(--transition-fast)"
      }}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun size={20} style={{ color: "#fbbf24" }} />
      ) : (
        <Moon size={20} style={{ color: "#4f46e5" }} />
      )}
    </button>
  );
}

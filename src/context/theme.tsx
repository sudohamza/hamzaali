import { createContext, useEffect, useState, ReactNode, useRef } from "react";

type Theme = "light" | "dark" | "";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const THEME_KEY = "theme_preference";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("");
  const userToggled = useRef(false); 
  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      userToggled.current = true;
      localStorage.setItem(THEME_KEY, next);
      return next;
    });
  };

  // Initial load: get from localStorage or system
  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Update HTML attributes for tailwindcss
  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Listen to system theme changes only if user hasn't toggled manually
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const systemChangeHandler = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem(THEME_KEY);
      if (!stored && !userToggled.current) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", systemChangeHandler);
    return () => media.removeEventListener("change", systemChangeHandler);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

import { createContext, useContext, useState, type ReactNode } from "react";

interface IThemeContext {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<null | IThemeContext>(null);
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

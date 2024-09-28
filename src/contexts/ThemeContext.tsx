import { createContext } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void; 
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark", 
  toggleTheme: () => {}, 
});

export { ThemeContext };

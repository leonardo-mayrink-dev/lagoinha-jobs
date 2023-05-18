import { createTheme, PaletteMode } from "@mui/material";
import { createContext } from "react";

// Define your light theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1f8ef1",
    },
    secondary: {
      main: "#725752",
    },
    background: {
      default: "#f5f6fa",
      paper: "#ffffff",
    },
    text: {
      primary: "#333",
      secondary: "#888",
      disabled: "#6E8387",
    },
    divider: "#fff"
  },
});

// Define your dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#ff9a",
    },
    background: {
      default: "#18181a",
      paper: "#2a2a2f",
    },
    text: {
      primary: "#fff",
      secondary: "#ddd",
      disabled: "#6E8387",
    },
    divider: "#333"
  },
});

// Define a function that returns the appropriate theme based on the mode state
export const getTheme = (mode: string) =>
  mode === "dark" ? darkTheme : lightTheme;

// Create a new context for the current mode state
type ThemeContextType = {
  mode: string;
  toggleMode: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  toggleMode: () => {},
});

import { createContext, useMemo, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Router } from "./router";
import { ThemeProvider } from "@mui/material";
import { ThemeContext, getTheme } from "./Theme";
import { CustomDrawer } from "./components/CustomDrawer/CustomDrawer";
import CustomAppBar from "./components/CustomAppBar/CustomAppBar";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerHandler = () => {
    setIsDrawerOpen(true);
  };
  const onCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode: handleModeChange }}>
      <ThemeProvider theme={getTheme(mode)}>
        <div
          className="App"
          style={{ background: getTheme(mode).palette.background.default }}
        >
          <BrowserRouter>
            <CustomAppBar
              drawerHandler={drawerHandler}
            />
            <CustomDrawer
              isDrawerOpen={isDrawerOpen}
              onCloseDrawer={onCloseDrawer}
              handleModeChange={handleModeChange}
            />
            <Router />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;

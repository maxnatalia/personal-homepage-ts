import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider as ThemeSwitcherProvider } from "./common/ThemeSwitcher/themeContext";
import App from "./core/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeSwitcherProvider>
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>
);

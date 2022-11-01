import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/pages/App/App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "./theme-code/providers/ThemeProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

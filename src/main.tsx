import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "next-themes";
import "./global.css";
import { Navbar } from "./components/navbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />
    </ThemeProvider>
  </React.StrictMode>
)

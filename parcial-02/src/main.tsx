import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Crear el BrowserRouter como provider principal */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

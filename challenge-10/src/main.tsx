import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GraphContextProvider } from "./contexts/GraphContext";
import { App } from "./App";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GraphContextProvider>
      <App />
    </GraphContextProvider>
  </StrictMode>
);

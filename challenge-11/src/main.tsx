import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { EcommerceContextProvider } from "./contexts/EcommerceContext";
import "./styles/index.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EcommerceContextProvider>
      <App />
    </EcommerceContextProvider>
  </StrictMode>,
);

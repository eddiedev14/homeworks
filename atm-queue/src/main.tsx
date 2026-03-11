import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { ATM } from "./ATM";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ATM />
  </StrictMode>
);

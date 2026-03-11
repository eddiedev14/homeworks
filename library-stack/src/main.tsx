import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Library } from "./Library";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Library />
  </StrictMode>
);

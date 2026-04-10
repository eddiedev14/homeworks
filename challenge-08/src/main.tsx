import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BinaryTree } from "./pages/BinaryTree";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BinaryTree />
  </StrictMode>,
);

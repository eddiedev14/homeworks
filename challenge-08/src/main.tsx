import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BinaryTree } from "./pages/BinaryTree";
import "./styles/index.css";
import { TreeContextProvider } from "./contexts/TreeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TreeContextProvider>
      <BinaryTree />
    </TreeContextProvider>
  </StrictMode>,
);

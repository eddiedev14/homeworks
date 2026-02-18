import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelloWorld } from "./HelloWorld";
import { PrintMessage } from "./PrintMessage";
import { Contador } from "./Contador";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <HelloWorld />
    <PrintMessage message="Como te va?" />
    <PrintMessage message="Soy tu respuesta! " />
    <Contador initial={100} />
  </StrictMode>
);

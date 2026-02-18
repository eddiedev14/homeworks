import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelloWorld } from "./HelloWorld";
import { PrintMessage } from "./PrintMessage";
import { Contador } from "./Contador";
import { Arrays } from "./Arrays";

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <HelloWorld />
    <PrintMessage message="Como te va?" value={30} />
    <PrintMessage message="Soy tu respuesta!" value={10} />
    <Contador initial={100} />
    <Arrays />
  </StrictMode>
);

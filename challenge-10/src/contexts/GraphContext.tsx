/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, type ReactNode } from "react";
import Graph from "../algorithms/Graph";

interface IProvider {
  children: ReactNode;
}

//* Create context
export const GraphContext = createContext<Graph | null>(null);

export function GraphContextProvider({ children }: IProvider) {
  const [graph] = useState<Graph>(() => new Graph());

  return (
    <GraphContext.Provider value={graph}>{children}</GraphContext.Provider>
  );
}

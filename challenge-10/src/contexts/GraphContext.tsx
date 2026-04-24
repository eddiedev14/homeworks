/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode } from "react";
import Graph from "../algorithms/Graph";
import { useGraphState } from "../hooks/useGraphState";
import type ICity from "../interfaces/city.interface";
import type IPerson from "../interfaces/person.interface";

interface GraphContextType {
  graph: Graph;
  addCity: (city: ICity) => void;
  addPerson: (person: IPerson, city: ICity) => void;
}

interface IProvider {
  children: ReactNode;
}

//* Create context
export const GraphContext = createContext<GraphContextType | null>(null);

export function GraphContextProvider({ children }: IProvider) {
  const data = useGraphState();

  return (
    <GraphContext.Provider value={data}>{children}</GraphContext.Provider>
  );
}

import { useState } from "react";
import Graph from "../algorithms/Graph";
import { cloneGraph } from "../utils/utils";
import type ICity from "../interfaces/city.interface";
import type IPerson from "../interfaces/person.interface";

export const useGraphState = () => {
  //* States
  const [graph, setGraph] = useState<Graph>(() => new Graph());

  const addCity = (city: ICity) => {
    const newGraph = cloneGraph(graph);
    newGraph.addCity(city);
    setGraph(newGraph);
  };

  const addPerson = (person: IPerson, city: ICity) => {
    const newGraph = cloneGraph(graph);
    newGraph.addPerson(person, city);
    setGraph(newGraph);
  };

  return {
    graph,
    addCity,
    addPerson,
  };
};

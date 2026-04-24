import Graph from "../algorithms/Graph";

//? Función para clonar grafo y actualizar el state correctamente con re-render
export function cloneGraph(oldGraph: Graph): Graph {
  const newGraph = new Graph();

  newGraph.people = [...oldGraph.people];
  newGraph.cities = [...oldGraph.cities];
  newGraph.adjList = new Map(oldGraph.adjList);

  return newGraph;
}

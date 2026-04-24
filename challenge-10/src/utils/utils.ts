import Graph, { type GraphNode } from "../algorithms/Graph";
import type { ViewLink, ViewNode } from "../interfaces/graphView.interface";

export function cloneGraph(oldGraph: Graph): Graph {
  const newGraph = new Graph();
  newGraph.people = [...oldGraph.people];
  newGraph.cities = [...oldGraph.cities];
  newGraph.adjList = new Map(oldGraph.adjList);
  return newGraph;
}

export function graphToView(graph: Graph) {
  const nodes: ViewNode[] = [];
  const links: ViewLink[] = [];

  const visitedNodes = new Set<string>();
  const visitedEdges = new Set<string>();

  const getId = (node: GraphNode): string =>
    "age" in node ? `person-${node.id}` : `city-${node.id}`;

  graph.adjList.forEach((neighbors, node) => {
    const id = getId(node);

    if (!visitedNodes.has(id)) {
      nodes.push({
        id,
        label: node.name,
        color: "age" in node ? "#4CAF50" : "#FF9800",
      });
      visitedNodes.add(id);
    }

    neighbors.forEach((neighbor) => {
      const targetId = getId(neighbor);
      const edgeKey = [id, targetId].sort().join("-");

      if (!visitedEdges.has(edgeKey)) {
        links.push({ source: id, target: targetId });
        visitedEdges.add(edgeKey);
      }
    });
  });

  return { nodes, links };
}

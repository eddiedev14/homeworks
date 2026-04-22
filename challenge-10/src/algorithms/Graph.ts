import type ICity from "../interfaces/city.interface";
import type IPerson from "../interfaces/person.interface";

type GraphNode = IPerson | ICity;

export default class Graph {
  private people: IPerson[];
  private cities: ICity[];
  //? Se usa map para que la key pueda ser un objeto IPerson o ICity directamente...
  private adjList: Map<GraphNode, GraphNode[]>;

  constructor() {
    this.people = [];
    this.cities = [];
    this.adjList = new Map();
  }

  //* Methods
  addPerson(node: IPerson, city: IPerson) {
    this.people.push(node);
    //? Como se esta usando Map, para agregar un nuevo elemento se usa set...
    this.adjList.set(node, []);

    // Ahora se añade la relación directamente con la ciudad
    this.addEdge(node, city);
  }

  addEdge(node1: GraphNode, node2: GraphNode) {
    //? Como se esta usando Map, para agregar un nuevo elemento se usa get...
    this.adjList.get(node1).push(node2);
    this.adjList.get(node2).push(node1);
  }

  searchNode(node: GraphNode) {
    if (!this.people.length && !this.cities.length) return false;
    return (
      this.people.find((person) => person === node) ||
      this.cities.find((city) => city === node)
    );
  }

  getAdjacencyList(node: GraphNode) {
    if (this.searchNode(node)) {
      return this.adjList.get(node);
    }
  }
}

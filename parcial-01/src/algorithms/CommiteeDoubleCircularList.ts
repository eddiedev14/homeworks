import type IComittee from "../interfaces/ICommitee";

class Node {
  //* Properties
  public value: IComittee;
  public next: Node | null;
  public prev: Node | null;

  constructor(comittePerson: IComittee) {
    this.value = comittePerson;
    this.next = null;
    this.prev = null;
  }
}

export default class ComitteeCircularDoubleLinkedList {
  //* Properties
  public head: null | Node;
  public tail: null | Node;
  public length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //* Methods
  append(value: IComittee) {
    const newNode = new Node(value);

    // Si no hay ningun elemento aún
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      // Se apunta a sí mismo
      newNode.next = newNode;
      newNode.prev = newNode;

      this.length++;
      return;
    }

    // Si se añade un elemento nuevo al final actualizar prev y next
    if (this.tail) this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode; //Actualizar cola

    // Hacer circular
    this.tail.next = this.head;
    this.head.prev = this.tail;
  }
}

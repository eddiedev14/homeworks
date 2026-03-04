import type IPatient from "../interfaces/IPatient";

class Node {
  //* Properties
  public id: number; // Se agrega un id para facilitar la busqueda pues el value es un objeto
  public value: IPatient;
  public next: Node | null;

  constructor(patient: IPatient) {
    this.id = patient.id;
    this.value = patient;
    this.next = null;
  }
}

export default class SingleLinkedList {
  //* Properties
  private head: null | Node;
  private tail: null | Node;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //* Methods
  append(value: IPatient) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      // Si ya existe la cabeza, es el siguiente de la cola actual (se actualiza apuntador)
      if (this.tail) this.tail.next = newNode;
    }

    // Se actualiza la cola con el nuevo nodo
    this.tail = newNode;
    this.length++;
  }

  // La función de búsqueda se realizará por id
  peek(id: number) {
    let current = this.head;

    // Se recorre toda la lista
    while (current) {
      if (current.id === id) return current;

      // Continuar con el siguiente si no lo encontro
      current = current.next;
    }

    //Si no lo encontro retorna null
    return null;
  }
}

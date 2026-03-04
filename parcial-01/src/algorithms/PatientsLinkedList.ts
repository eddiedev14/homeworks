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
  public head: null | Node;
  public tail: null | Node;
  public length: number;

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

  remove(id: number) {
    if (id === undefined) return null;

    if (!this.head)
      //Si no hay cabeza no se puede eliminar nada (no hay elementos)
      return null;
    if (this.head.value.id === id) {
      // Si el valor que se quiere eliminar es la cabeza. La cabeza será el siguiente
      this.head = this.head.next;

      // Si después de mover la cabeza, ahora no existe cabeza, tampoco puede existir cola
      if (!this.head) {
        this.tail = null;
      }

      this.length--;
      return;
    }

    // Si no se empieza a recorrer uno por uno
    let current = this.head;
    while (current.next && current.next.value.id !== id) {
      current = current.next;
    }

    // Si el siguiente es el valor que se desea obtener para remover
    if (current.next) {
      current.next = current.next.next; // Se establece el next, con el siguiente del valor que se va a eliminar.
      if (!current.next) this.tail = current; // Si no hay siguiente, entonces es la cola
      this.length--;
    }
  }

  toArray() {
    let current = this.head;
    const array: IPatient[] = [];
    while (current) {
      array.push(current.value);
      current = current.next;
    }
    return array;
  }
}

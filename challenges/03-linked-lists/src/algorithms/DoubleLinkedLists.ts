import { pages } from '../data/pages.mock.data';
import type IPage from '../interfaces/page.interface';

class Node {
  //* Properties
  public id: number; // Se agrega un id para facilitar la busqueda pues el value es un objeto
  public value: IPage;
  public next: Node | null;
  public prev: Node | null;

  constructor(page: IPage) {
    this.id = page.id;
    this.value = page;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
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
  append(value: IPage) {
    const newNode = new Node(value);

    // Si no hay ningun elemento aún
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    // Si se añade un elemento nuevo al final actualizar prev y next
    if (this.tail) this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode; //Actualizar cola
    this.length++;
  }

  // La función de búsqueda se realizará por id
  peek(id: number | undefined) {
    if (id === undefined) return null;

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

  next(id: number | undefined) {
    if (id === undefined) return null;

    let current = this.head;

    // Se recorre toda la lista
    while (current) {
      // Si se encontró la canción actual se retorna la siguiente para avanzar
      if (current.id === id) return current.next;

      // Continuar con el siguiente si no lo encontro
      current = current.next;
    }

    //Si no hay siguiente canción
    return null;
  }

  prev(id: number | undefined) {
    if (id === undefined) return null;

    let current = this.head;

    // Se recorre toda la lista
    while (current) {
      // Si se encontró la canción actual se retorna la siguiente para avanzar
      if (current.id === id) return current.prev;

      // Continuar con el siguiente si no lo encontro
      current = current.next;
    }

    //Si no hay siguiente canción
    return null;
  }
}

//* Creaate DoubleLinkedList instance
const history = new DoubleLinkedList();

// Append pages
pages.forEach((page) => {
  history.append(page);
});

export default history;

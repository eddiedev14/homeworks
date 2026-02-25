class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //* Methods
  append(value) {
    const newNode = new Node(value);

    // Si no hay ningun elemento aún
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    // Si se añade un elemento nuevo al final actualizar prev y siguiente
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode; //Actualizar cola
    this.length++;
  }

  peek(value, current = this.head) {
    // Se recorre toda la lista
    while (current) {
      if (current.value === value) {
        return current;
      }

      // Continuar con el siguiente si no lo encontro
      current = current.next;
    }

    //Si no lo encontro retorna null
    return null;
  }

  size() {
    return this.length;
  }

  remove(value, current = this.head) {
    //Si no hay cabeza no se puede eliminar nada
    if (!this.head) return null;

    while (current) {
      if (current.value === value) {
        // Si es la cabeza
        if (current === this.head) {
          this.head = current.next;
          if (this.head) this.head.prev = null;
        }

        // Si es la cola
        if (current === this.tail) {
          this.tail = current.prev;
          if (this.tail) this.tail.next = null;
        }

        // Actualizar enlaces
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;

        this.size--;
        return current;
      }

      // Si no encuentra el valor
      current = current.next;
    }

    return null;
  }

  print() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }
}

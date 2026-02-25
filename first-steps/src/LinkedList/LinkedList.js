class Node {
  constructor(value) {
    this.value = value;
    // Por defecto inicia sin elemento siguiente
    this.next = null;
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

    if (!this.head) {
      this.head = newNode;
    } else {
      // Si ya existe la cabeza, es el siguiente de la cola actual
      this.tail.next = newNode;
    }

    // Se actualiza la cola con el nuevo nodo
    this.tail = newNode;
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

    // Si el valor que se quiere eliminar es la cabeza
    if (this.head.value === value) {
      // La cabeza será el siguiente
      this.head = this.head.next;

      // Si la nueva cabeza no existe, la cola es null
      if (!this.head) {
        this.tail = null;
      }

      this.length--;
      return;
    }

    // Si no se empieza a recorrer uno por uno
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    // Si el siguiente es el valor que se desea obtener
    if (current.next) {
      //Se asigna al actual el siguiente del siguiente como apuntador
      current.next = current.next.next;
      if (!current.next) this.tail = current; // Si no hay siguiente del siguiente, entonces es la cola
      this.length--;
    }
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

import Node from "./Node";

export default class BinaryTree {
  private raiz: Node | null;

  constructor() {
    this.raiz = null;
  }

  insertar(valor: number) {
    const nuevoNodo = new Node(valor);

    // Si no hay raíz, ese nodo es la raíz
    if (!this.raiz) {
      this.raiz = nuevoNodo;
      return;
    }

    let actual = this.raiz;
    while (true) {
      // Si el valor que quiero añadir, es menor que el actual se añade a la izquierda
      if (valor < actual.valor) {
        if (!actual.izquierda) {
          actual.izquierda = nuevoNodo;
          return;
        }

        actual = actual.izquierda; // recursividad
      }

      // Si el valor que quiero añadir, es mayor que el actual se añade a la derecha
      if (valor > actual.valor) {
        if (!actual.derecha) {
          actual.derecha = nuevoNodo;
          return;
        }

        actual = actual.derecha; // recursividad
      }
    }
  }

  // N-L-R
  preOrder(nodo: Node | null) {
    if (!nodo) return;

    // Recursividad...
    console.log(nodo.valor);
    this.preOrder(nodo.izquierda);
    this.preOrder(nodo.derecha);
  }

  // L-N-R
  inOrder(nodo: Node | null) {
    if (!nodo) return;

    // Recursividad...
    this.inOrder(nodo.izquierda);
    console.log(nodo.valor);
    this.inOrder(nodo.derecha);
  }

  // L-R-N
  postOrder(nodo: Node | null) {
    if (!nodo) return;

    // Recursividad...
    this.postOrder(nodo.izquierda);
    this.postOrder(nodo.derecha);
    console.log(nodo.valor);
  }
}

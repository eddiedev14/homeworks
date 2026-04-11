import type ID3 from "../interfaces/ID3";
import Node from "./Node";

export default class BinaryTree {
  private raiz: Node | null;

  constructor() {
    this.raiz = null;
  }

  insert(valor: number) {
    const nuevoNodo = new Node(valor);

    if (!this.raiz) {
      this.raiz = nuevoNodo;
      return;
    }

    let actual = this.raiz;

    while (true) {
      if (valor < actual.valor) {
        if (!actual.izquierda) {
          actual.izquierda = nuevoNodo;
          return;
        }
        actual = actual.izquierda;
      } else if (valor > actual.valor) {
        if (!actual.derecha) {
          actual.derecha = nuevoNodo;
          return;
        }
        actual = actual.derecha;
      } else {
        return;
      }
    }
  }

  // N-L-R
  printPreOrder(): string {
    // Array para almacenar los valores en el orden correcto
    const result: string[] = [];

    // Función recursiva para recorrer el árbol en preorden
    const preOrder = (nodo: Node | null) => {
      if (!nodo) return;

      result.push(String(nodo.valor));
      preOrder(nodo.izquierda);
      preOrder(nodo.derecha);
    };

    // Empezar el recorrido desde la raíz
    preOrder(this.raiz);
    return result.join(" ➟ ");
  }

  // L-N-R
  printInOrder(): string {
    // Array para almacenar los valores en el orden correcto
    const result: string[] = [];

    // Función recursiva para recorrer el árbol en inorder
    const inOrder = (nodo: Node | null) => {
      if (!nodo) return;

      // Recursividad...
      inOrder(nodo.izquierda);
      result.push(String(nodo.valor));
      inOrder(nodo.derecha);
    };

    // Empezar el recorrido desde la raíz
    inOrder(this.raiz);
    return result.join(" ➟ ");
  }

  // L-R-N
  printPostOrder(): string {
    // Array para almacenar los valores en el orden correcto
    const result: string[] = [];

    // Función recursiva para recorrer el árbol en postorden
    const postOrder = (nodo: Node | null) => {
      if (!nodo) return;

      postOrder(nodo.izquierda);
      postOrder(nodo.derecha);
      result.push(String(nodo.valor));
    };

    // Empezar el recorrido desde la raíz
    postOrder(this.raiz);
    return result.join(" ➟ ");
  }

  //* Método para clonar el árbol binario
  clone(): BinaryTree {
    // Crear un nuevo árbol binario
    const newTree = new BinaryTree();

    // Función recursiva para copiar los nodos del árbol original al nuevo árbol
    const copy = (nodo: Node | null): Node | null => {
      if (!nodo) return null;

      const nuevo = new Node(nodo.valor);
      nuevo.izquierda = copy(nodo.izquierda);
      nuevo.derecha = copy(nodo.derecha);

      return nuevo;
    };

    // Empezar la copia desde la raíz del árbol original
    newTree.raiz = copy(this.raiz);
    return newTree;
  }

  //* Método para convertir el árbol binario a un formato compatible con react-d3-tree
  toD3Format(): ID3[] {
    // Función recursiva para construir el formato de react-d3-tree
    const build = (nodo: Node | null): ID3 | null => {
      if (!nodo) return null;

      const children: ID3[] = [];

      const left = build(nodo.izquierda);
      const right = build(nodo.derecha);

      if (left) children.push(left);
      if (right) children.push(right);

      return {
        name: String(nodo.valor),
        children,
      };
    };

    // Empezar a construir desde la raíz del árbol
    const root = build(this.raiz);
    return root ? [root] : [];
  }
}

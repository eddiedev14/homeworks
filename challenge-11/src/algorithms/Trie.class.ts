import type { IProduct } from "../interfaces/product.interface";
import TrieNode from "./Node.class";

export default class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode(); // Nodo raíz
  }

  // Inserta un producto en el Trie
  insert(product: IProduct): void {
    let current = this.root;

    for (const char of product.name.toLowerCase()) {
      // Si no existe el nodo hijo para este caracter
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }

      // Avanza al nodo hijo
      current = current.children[char];
    }

    // Marca el nodo final de la palabra
    current.isEndOfWord = true;

    // Guarda el producto (IProduct)
    current.products.push(product);
  }

  // Busca una palabra en el Trie (con prefijo)
  searchByPrefix(prefix: string): IProduct[] {
    let current = this.root;

    //* Se recorre el prefijo
    for (const char of prefix.toLowerCase()) {
      // Si no existe el nodo hijo para este caracter, no hay palabras con ese prefijo en el Trie
      if (!current.children[char]) {
        return [];
      }

      // Avanza al nodo hijo
      current = current.children[char];
    }

    // Recolectar todas las palabras que comienzan con el prefijo
    const results: IProduct[] = [];
    this.collectProducts(current, results);
    return results;
  }

  //* Helper para recolectar productos a partir de un nodo dado (recursividad)
  private collectProducts(node: TrieNode, results: IProduct[]): void {
    // Si es fin de palabra agregar sus productos
    if (node.isEndOfWord) {
      results.push(...node.products);
    }

    // Recorrer hijos
    for (const char in node.children) {
      this.collectProducts(node.children[char], results);
    }
  }
}

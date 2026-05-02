import TrieNode from "./Node.class";

export default class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode(null);
  }

  // Inserta una palabra en el Trie
  insert(word: string): void {
    let current = this.root;

    for (const char of word) {
      // Si no existe el nodo hijo para este caracter
      if (!current.children[char]) {
        current.children[char] = new TrieNode(char);
      }

      // Avanza al nodo hijo
      current = current.children[char];
    }

    // Marca el nodo final de la palabra
    current.isEndOfWord = true;
  }

  // Busca una palabra en el Trie (con prefijo)
  searchByPrefix(prefix: string): string[] {
    let current = this.root;

    //* Se recorre el prefijo
    for (const char of prefix) {
      // Si no existe el nodo hijo para este caracter, no hay palabras con ese prefijo en el Trie
      if (!current.children[char]) {
        return [];
      }

      // Avanza al nodo hijo
      current = current.children[char];
    }

    // Recolectar todas las palabras que comienzan con el prefijo
    const words: string[] = [];
    this.collectWords(current, prefix, words);
    return words;
  }

  //* Helper para recolectar palabras a partir de un nodo dado (recursividad)
  private collectWords(node: TrieNode, word: string, results: string[]): void {
    // Si es fin de palabra
    if (node.isEndOfWord) {
      results.push(word);
    }

    // Recorrer hijos
    for (const char in node.children) {
      // Se le va agregando el caracter al prefijo para formar la palabra completa
      this.collectWords(node.children[char], word + char, results);
    }
  }
}

import type { ISong } from "../interfaces/ISong.interface";
import TrieNode from "./TrieNode.class";

export default class Trie {
  private root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  //* INSERTAR CANCIÓN
  insert(song: ISong): void {
    let current = this.root;

    for (const char of song.title.toLowerCase()) {
      // Si no existe el nodo hijo
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }

      // Avanzar al hijo
      current = current.children[char];
    }

    // Marcar fin de palabra
    current.isEndOfWord = true;

    // Guardar canción
    current.songs.push(song);
  }

  //* BUSCAR CANCIÓN EXACTA
  searchExact(title: string): boolean {
    let current = this.root;

    for (const char of title.toLowerCase()) {
      // Si no existe el caracter
      if (!current.children[char]) {
        return false;
      }

      current = current.children[char];
    }

    // Solo existe si termina exactamente ahí
    return current.isEndOfWord;
  }

  //* BUSCAR POR PREFIJO
  searchByPrefix(prefix: string): ISong[] {
    let current = this.root;

    // Recorrer prefijo
    for (const char of prefix.toLowerCase()) {
      // Si no existe el prefijo
      if (!current.children[char]) {
        return [];
      }

      current = current.children[char];
    }

    // Recolectar canciones
    const results: ISong[] = [];
    this.collectSongs(current, results);

    return results;
  }

  //* RECOLECTAR CANCIONES RECURSIVAMENTE
  private collectSongs(node: TrieNode, results: ISong[]): void {
    // Si es fin de palabra
    if (node.isEndOfWord) {
      results.push(...node.songs);
    }

    // Recorrer hijos
    for (const char in node.children) {
      this.collectSongs(node.children[char], results);
    }
  }
}
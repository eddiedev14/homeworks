export default class TrieNode {
  value: string | null; //? El valor del nodo, en este caso, sería el nombre del producto
  isEndOfWord: boolean;
  children: Record<string, TrieNode>;

  constructor(value: string | null) {
    this.value = value;
    this.isEndOfWord = false;
    this.children = {};
  }
}

import type { IProduct } from "../interfaces/product.interface";

export default class TrieNode {
  isEndOfWord: boolean;
  children: Record<string, TrieNode>;
  //? Se toma como array porque podrían haber varios productos con el mismo nombre, pero diferente popularidad.
  products: IProduct[];

  constructor() {
    this.isEndOfWord = false;
    this.children = {};
    this.products = [];
  }
}

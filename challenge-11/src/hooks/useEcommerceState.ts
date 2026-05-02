import { useState } from "react";
import Trie from "../algorithms/Trie.class";
import MaxHeap from "../algorithms/Heap.class";
import { mockProducts } from "../data/products.mock.data";
import { type IProduct } from "../interfaces/product.interface";

export const useEcommerceState = () => {
  //* States
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [isSearched, setIsSearched] = useState(false);

  const [trie] = useState(() => {
    const trie = new Trie();

    // Insertar mock data
    products.forEach((product) => {
      trie.insert(product);
    });

    return trie;
  });

  //* Functions
  const addProduct = (name: string, popularity: number) => {
    const newProduct = { name, popularity };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    trie.insert(newProduct);
  };

  const searchTopK = (query: string, k: number) => {
    //? Buscar coincidencias en el trie
    const matchedProducts = trie.searchByPrefix(query);

    //? Crear heap con los productos
    const heap = new MaxHeap(matchedProducts);

    //? Extraer Top K
    const topProducts = [];

    // Recorrer los productos según k
    for (let i = 0; i < k; i++) {
      const product = heap.pop(); // Obtiene el de mayor puntuación
      if (!product) break;
      topProducts.push(product);
    }

    setIsSearched(true);
    setFilteredProducts(topProducts);
  };

  const resetQuery = () => {
    setIsSearched(false);
    setFilteredProducts([]);
  };

  return {
    products,
    filteredProducts,
    isSearched,

    addProduct,
    searchTopK,
    resetQuery,
  };
};

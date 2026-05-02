import { useState } from "react";
import Trie from "../algorithms/Trie.class";
import { mockProducts } from "../data/products.mock.data";

export const useEcommerceState = () => {
  //* States
  const [products] = useState(mockProducts);

  const [trie] = useState(() => {
    const trie = new Trie();

    // Insertar mock data
    products.forEach((product) => {
      trie.insert(product.name);
    });

    return trie;
  });

  return {
    products,
    trie,
  };
};

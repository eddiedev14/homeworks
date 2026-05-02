import { useState } from "react";
import Trie from "../algorithms/Trie.class";
import { mockProducts } from "../data/products.mock.data";

export const useEcommerceState = () => {
  //* States
  const [products, setProducts] = useState(mockProducts);

  const [trie] = useState(() => {
    const trie = new Trie();

    // Insertar mock data
    products.forEach((product) => {
      trie.insert(product.name);
    });

    return trie;
  });

  //* Functions
  const addProduct = (name: string, popularity: number) => {
    const newProduct = { name, popularity };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    trie.insert(name);
  };

  return {
    products,
    trie,

    addProduct,
  };
};

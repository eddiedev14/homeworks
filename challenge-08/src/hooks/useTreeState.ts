import { useState } from "react";
import BinaryTree from "../algorithms/BinaryTree";

const initialValues = [50, 30, 70, 20, 40, 60, 80];

export const useTreeState = () => {
  //* States
  const [tree, setTree] = useState(() => {
    const newTree = new BinaryTree();

    // Insert initial values
    initialValues.forEach((value) => newTree.insert(value));
    return newTree;
  });

  const [order, setOrder] = useState("");

  //* Functions
  const appendValue = (value: number) => {
    // Actualizar el árbol con el nuevo valor
    setTree((prevTree) => {
      const newTree = prevTree.clone();
      newTree.insert(value);
      return newTree;
    });

    // Limpiar el orden actual
    setOrder("");
  };

  const handlePreorder = () => {
    setOrder(tree.printPreOrder());
  };

  const handleInorder = () => {
    setOrder(tree.printInOrder());
  };

  const handlePostorder = () => {
    setOrder(tree.printPostOrder());
  };

  return {
    tree,
    order,
    appendValue,
    handlePreorder,
    handleInorder,
    handlePostorder,
  };
};

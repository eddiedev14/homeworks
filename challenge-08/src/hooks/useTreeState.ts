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

  const appendValue = (value: number) => {
    setTree((prevTree) => {
      const newTree = prevTree.clone();
      newTree.insert(value);
      return newTree;
    });
  };

  return {
    tree,
    appendValue,
  };
};

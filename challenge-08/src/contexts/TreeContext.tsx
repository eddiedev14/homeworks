/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode } from "react";
import type BinaryTree from "../algorithms/BinaryTree";
import { useTreeState } from "../hooks/useTreeState";

interface ITreeContext {
  tree: BinaryTree;
  order: string;

  appendValue: (value: number) => void;
  handlePreorder: () => void;
  handleInorder: () => void;
  handlePostorder: () => void;
}

interface IProvider {
  children: ReactNode;
}

//* Create context
export const TreeContext = createContext<ITreeContext | null>(null);

export function TreeContextProvider({ children }: IProvider) {
  // ? Llamar al custom hook
  const data = useTreeState();

  return <TreeContext.Provider value={data}>{children}</TreeContext.Provider>;
}

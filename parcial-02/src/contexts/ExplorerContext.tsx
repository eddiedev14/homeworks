/* eslint-disable react-refresh/only-export-components */
import { createContext, type ReactNode } from "react";
import type { NodeInput } from "../types/node.types";
import type { Filter } from "../hooks/firebase/useCollection";
import { useExplorerState } from "../hooks/explorer/useExplorerState";
import type TreeNode from "../algoritmhs/TreeNode";

interface IExplorerContext {
  tree: TreeNode[];
  selectedNodeId: string | null;
  isFetched: boolean;
  loading: boolean;
  error: string | null;

  newNode: (data: NodeInput) => Promise<boolean>;
  getAllNodes: (filters?: Filter[]) => Promise<void>;
  handleNodeSelect: (nodeId: string) => void;
  getCurrentLevelNodes: () => TreeNode[];
  getPath: (tree: TreeNode[], nodeId: string) => TreeNode[];
  goBack: () => void;
}

interface IProvider {
  children: ReactNode;
}

//* Crear context
export const ExplorerContext = createContext<null | IExplorerContext>(null);

//* Provider
export const ExplorerContextProvider = ({ children }: IProvider) => {
  //? Llamar al custom hook
  const contextData = useExplorerState();

  return (
    <ExplorerContext.Provider value={contextData}>
      {children}
    </ExplorerContext.Provider>
  );
};

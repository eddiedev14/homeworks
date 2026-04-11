/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import TreeNode from "../algorithms/TreeNode";
import { useSidebarState } from "../hooks/useSidebarState";

interface ISidebarContext {
  tree: TreeNode;
  activeNode: TreeNode | null;
  setActiveNode: Dispatch<SetStateAction<TreeNode | null>>;
}

interface IProvider {
  children: ReactNode;
}

//* Crear el contexto
export const SidebarContext = createContext<ISidebarContext | undefined>(
  undefined,
);

//* Crear el provider
export const SidebarProvider = ({ children }: IProvider) => {
  const data = useSidebarState();

  return (
    <SidebarContext.Provider value={data}>{children}</SidebarContext.Provider>
  );
};

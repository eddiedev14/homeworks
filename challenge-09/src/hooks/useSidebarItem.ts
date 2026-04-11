import type TreeNode from "../algorithms/TreeNode";
import { useState } from "react";
import { useSidebar } from "./useSidebar";

export const useSidebarItem = (node: TreeNode) => {
  //* States
  const [open, setOpen] = useState(false);

  //* Contexts
  const { activeNode, setActiveNode } = useSidebar();

  //* Variables
  const isNavigable = node.isNavigable();
  const hasChildren = node.hasChildren();
  const isActive = node.link === activeNode?.link;

  //* Handlers
  const handleClick = () => {
    if (hasChildren) {
      // Si el nodo tiene hijos, alternamos su estado de abierto/cerrado
      setOpen(!open);
    } else {
      setActiveNode(node); // Establecer el nodo activo en el contexto
    }
  };

  return { open, isNavigable, hasChildren, isActive, handleClick };
};

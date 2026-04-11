/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { sidebarData } from "../data/sidebar.data";
import { buildTree } from "../utils/utils";
import type TreeNode from "../algorithms/TreeNode";
import { useLocation } from "react-router-dom";

export const useSidebarState = () => {
  //* States
  const [tree] = useState(() => buildTree(sidebarData));
  const [activeNode, setActiveNode] = useState<TreeNode | null>(null);

  //* Location
  const location = useLocation();

  //* Effects
  useEffect(() => {
    //? Función recursiva para encontrar el nodo que coincide con la ruta actual
    const findNodeByPath = (node: TreeNode): TreeNode | null => {
      if (node.link === location.pathname) return node;

      for (const child of node.children) {
        const found = findNodeByPath(child);
        if (found) return found;
      }

      return null;
    };

    const matchedNode = findNodeByPath(tree);
    setActiveNode(matchedNode);
  }, [location.pathname, tree]);

  return {
    tree,
    activeNode,
    setActiveNode,
  };
};

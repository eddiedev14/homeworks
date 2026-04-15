import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useExplorer } from "./useExplorer";
import type TreeNode from "../../algoritmhs/TreeNode";

export const useExplorerDashboard = () => {
  //* Contexts
  const {
    tree,
    isFetched,
    selectedNodeId,
    loading,
    error,
    getAllNodes,
    getCurrentLevelNodes,
    getPath,
  } = useExplorer();

  //* Custom hooks
  const navigate = useNavigate();

  // Current level nodes
  const currentNodes = getCurrentLevelNodes();

  //* Effects
  useEffect(() => {
    const fetchNodes = async () => {
      //* Obtener todas las nodos de ese usario en concreto
      if (isFetched) return; // Si ya se tienen en memoria no hacerlo.

      await getAllNodes();
      if (error) toast.error(error);
    };

    fetchNodes();
  }, []);

  //* Functions
  const handleNewNodeClick = () => {
    navigate("/explorer/form");
  };

  const getCurrentPath = (): TreeNode[] => {
    if (!selectedNodeId) return [];
    return getPath(tree, selectedNodeId);
  };

  return {
    currentNodes,
    loading,
    handleNewNodeClick,
    getCurrentPath,
  };
};

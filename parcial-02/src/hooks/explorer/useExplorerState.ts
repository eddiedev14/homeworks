import { useState } from "react";
import type { Node, NodeInput } from "../../types/node.types";
import { useCollection, type Filter } from "../firebase/useCollection";
import { useAuth } from "../auth/useAuth";
import TreeNode from "../../algoritmhs/TreeNode";

export const useExplorerState = () => {
  //* Contexts
  const { getUserId } = useAuth();

  //* States
  const [tree, setTree] = useState<TreeNode[]>([]);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [isFetched, setIsFetched] = useState(false);

  //* Custom hook
  const { add, getAll, isPending, error } = useCollection<NodeInput>(
    `users/${getUserId()}/explorer`,
  );

  //* Functions
  //? Obtener todos los nodos desde Firestore y construir el árbol
  const getAllNodes = async (filters: Filter[] = []): Promise<void> => {
    const nodes = await getAll(filters);
    setTree(buildTree(nodes));
    setIsFetched(true);
  };

  //? Construir el árbol a partir de los nodos (firebase)
  const buildTree = (nodes: Node[]): TreeNode[] => {
    const roots: TreeNode[] = [];

    // Crear nodos base
    const nodeList: TreeNode[] = nodes.map(
      (n) => new TreeNode(n.id, n.name, n.type, n.email),
    );

    // Construir jerarquía
    nodes.forEach((n) => {
      const node = nodeList.find((x) => x.id === n.id);

      if (!node) return;

      if (n.parentId) {
        const parent = nodeList.find((x) => x.id === n.parentId);
        parent?.addChild(node);
      } else {
        roots.push(node);
      }
    });

    return roots;
  };

  // ? Insertar un nuevo nodo en Firestore y actualizar el árbol
  const newNode = async (data: NodeInput): Promise<boolean> => {
    const docId = await add(data);
    if (!docId) return false;
    await getAllNodes();
    return true;
  };

  //? Manejar la selección de un nodo
  const handleNodeSelect = (nodeId: string) => {
    setSelectedNodeId(nodeId);
  };

  //? Función para obtener los nodos de un nivel del arbol
  const getCurrentLevelNodes = (): TreeNode[] => {
    if (!selectedNodeId) return tree;

    for (const root of tree) {
      const found = root.find(selectedNodeId);
      if (found) return found.children;
    }

    return [];
  };

  //? Funcion para obtener ruta actual
  const getPath = (tree: TreeNode[], nodeId: string): TreeNode[] => {
    for (const node of tree) {
      if (node.id === nodeId) return [node];

      const childPath = getPath(node.children, nodeId);
      if (childPath.length > 0) return [node, ...childPath];
    }

    return [];
  };

  //? Función para regresar
  const goBack = () => {
    if (!selectedNodeId) return;

    // Buscar el padre del nodo seleccionado
    for (const root of tree) {
      const parent = root.findParent(selectedNodeId);
      if (parent) {
        setSelectedNodeId(parent.id);
        return;
      }
    }

    setSelectedNodeId(null);
  };

  return {
    // Values / states
    tree,
    selectedNodeId,
    isFetched,
    loading: isPending,
    error,

    // Functions
    newNode,
    getAllNodes,
    handleNodeSelect,
    getCurrentLevelNodes,
    getPath,
    goBack,
  };
};

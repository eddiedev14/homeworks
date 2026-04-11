import type { INodeData } from "../interfaces/INodeData.interface";
import TreeNode from "../algorithms/TreeNode";
import { Route } from "react-router-dom";
import type { ReactNode } from "react";

//* Función para convertir JSON a un único TreeNode
export const buildTree = ({
  title,
  link,
  component,
  children,
}: INodeData): TreeNode => {
  // ? Crear el nodo raíz
  const node = new TreeNode(title, link, component);

  // ? Recursivamente agregar hijos
  children.forEach((child) => {
    node.addChild(buildTree(child));
  });

  return node;
};

//* Función para crear rutas dinámicamente a partir de un TreeNode
export const renderRoutes = (node: TreeNode): ReactNode[] => {
  // Crear un array para almacenar las rutas
  const routes: ReactNode[] = [];

  if (node.isNavigable()) {
    const Component = node.component!;

    routes.push(
      <Route key={node.link} path={node.link} element={<Component />} />,
    );
  }

  // Recursivamente renderizar rutas para los hijos
  node.children.forEach((child) => {
    routes.push(...renderRoutes(child));
  });

  return routes;
};

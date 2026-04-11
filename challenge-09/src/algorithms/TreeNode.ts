import type { ComponentType } from "react";

export default class TreeNode {
  title: string;
  link?: string;
  component?: ComponentType;
  children: TreeNode[];

  constructor(title: string, link?: string, component?: ComponentType) {
    this.title = title;
    this.link = link;
    this.component = component;
    this.children = [];
  }

  addChild(node: TreeNode): void {
    this.children.push(node);
  }

  isNavigable(): boolean {
    // ? Retorna true si el nodo tiene un link y un componente asociado, lo que indica que es una ruta navegable
    return !!this.link && !!this.component;
  }

  hasChildren(): boolean {
    return this.children.length > 0;
  }
}

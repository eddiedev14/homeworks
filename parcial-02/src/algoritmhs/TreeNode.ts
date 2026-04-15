export default class TreeNode {
  id: string;
  name: string;
  type: "folder" | "file";
  email: string;
  children: TreeNode[];

  constructor(
    id: string,
    name: string,
    type: "folder" | "file",
    email: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.type = type;
    this.children = [];
  }

  addChild(node: TreeNode): void {
    if (this.type === "folder") {
      this.children.push(node);
    }
  }

  insert(parentId: string, newNode: TreeNode): boolean {
    // Si este es el nodo padre
    if (this.id === parentId) {
      this.addChild(newNode);
      return true;
    }

    // Buscar en hijos
    for (const child of this.children) {
      const inserted = child.insert(parentId, newNode);
      if (inserted) return true;
    }

    return false;
  }

  find(nodeId: string): TreeNode | null {
    if (this.id === nodeId) return this;

    for (const child of this.children) {
      const found = child.find(nodeId);
      if (found) return found;
    }

    return null;
  }

  findParent(
    targetId: string,
    parent: TreeNode | null = null,
  ): TreeNode | null {
    if (this.id === targetId) return parent;

    for (const child of this.children) {
      const found = child.findParent(targetId, this);
      if (found) return found;
    }

    return null;
  }
}

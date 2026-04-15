export type Node = {
  id: string;
  name: string;
  type: "file" | "folder";
  parentId: string | null;
  email: string;
};

export type NodeInput = Omit<Node, "id">;

import type TreeNode from "../../algorithms/TreeNode";
import { SidebarItem } from "./SidebarItem";

interface Props {
  tree: TreeNode;
}

export const Sidebar = ({ tree }: Props) => {
  return (
    <aside className="bg-slate-900 *:text-white p-6">
      <h3 className="text-2xl font-bold">{tree.title}</h3>

      <ul className="flex flex-col gap-4 mt-4">
        {tree.children.map((node, index) => (
          <SidebarItem key={index} node={node} />
        ))}
      </ul>
    </aside>
  );
};

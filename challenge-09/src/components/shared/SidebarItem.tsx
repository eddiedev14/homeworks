import type TreeNode from "../../algorithms/TreeNode";
import { useSidebarItem } from "../../hooks/useSidebarItem";
import { Link } from "react-router-dom";

interface Props {
  node: TreeNode;
}

export const SidebarItem = ({ node }: Props) => {
  //* Hooks
  const { open, isNavigable, hasChildren, isActive, handleClick } =
    useSidebarItem(node);

  return (
    <li>
      <div>
        {hasChildren && <span className="mr-2">{open ? "▲" : "▼"}</span>}

        {isNavigable ? (
          <Link
            to={node.link!}
            className={`
    inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200
    ${
      isActive
        ? "bg-sky-100 text-sky-700 font-semibold"
        : "text-white hover:bg-gray-100 hover:text-gray-900"
    }
  `}
            onClick={handleClick}
          >
            {node.title}
          </Link>
        ) : (
          <span
            onClick={handleClick}
            className={`text-lg ${hasChildren ? "cursor-pointer hover:underline" : ""}`}
          >
            {node.title}
          </span>
        )}
      </div>

      {/* Mostrar hijos (recursividad) */}
      {hasChildren && open && (
        <ul className="flex flex-col gap-4 mt-4 ml-8">
          {node.children.map((child, index) => (
            <SidebarItem key={index} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

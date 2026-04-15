import type TreeNode from "../../algoritmhs/TreeNode";
import { Button } from "../shared/Button";
import { useExplorer } from "../../hooks/explorer/useExplorer";

interface Props {
  node: TreeNode;
}

export const NodeCard = ({ node }: Props) => {
  const { handleNodeSelect } = useExplorer();

  return (
    <div className="">
      <div
        className={`${node.type === "folder" ? "bg-yellow-100/50" : "bg-white"} w-sm flex flex-col relative p-4 gap-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100`}
      >
        <div className="absolute top-4 right-4 bg-white rounded-full size-10 flex items-center justify-center shadow-sm cursor-pointer transition-transform hover:scale-110">
          {node.type === "folder" ? "📁" : "📄"}
        </div>

        <div>
          <h3 className="font-medium text-gray-800">{node.name}</h3>
          <span className="font-light">Creador: {node.email}</span>
        </div>

        {node.type === "folder" && (
          <Button
            type="button"
            text="Abrir Carpeta"
            variant="secondary"
            onClick={() => handleNodeSelect(node.id)}
          />
        )}
      </div>
    </div>
  );
};

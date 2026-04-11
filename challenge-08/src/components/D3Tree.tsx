import Tree from "react-d3-tree";
import { useTree } from "../hooks/useTree";

const translate = { x: 625, y: 50 };

export const D3Tree = () => {
  const { tree } = useTree();

  // Convertir el árbol a un formato compatible con react-d3-tree para imprimirlo
  const data = tree.toD3Format();

  return (
    <div className="w-full h-dvh">
      <Tree
        key={JSON.stringify(data)}
        data={data}
        orientation="vertical"
        pathFunc="step"
        zoom={0.7}
        translate={translate}
      />
    </div>
  );
};

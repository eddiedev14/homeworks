import { useTree } from "../hooks/useTree";
import { Button } from "./shared/Button";
import { Card } from "./shared/Card";

export const TreePrint = () => {
  //* Context
  const { order, handlePreorder, handleInorder, handlePostorder } = useTree();

  return (
    <>
      <div className="w-fit mx-auto flex items-center gap-4 mt-4">
        <Button
          text="Mostrar Preorder"
          type="button"
          onClick={handlePreorder}
          variant="secondary"
          size="sm"
        />
        <Button
          text="Mostrar Inorder"
          type="button"
          onClick={handleInorder}
          variant="secondary"
          size="sm"
        />
        <Button
          text="Mostrar Postorder"
          type="button"
          onClick={handlePostorder}
          variant="secondary"
          size="sm"
        />
      </div>

      {order && <Card title="Orden del Árbol:" text={order} />}
    </>
  );
};

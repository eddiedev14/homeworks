import { ToastContainer } from "react-toastify";
import { Header } from "../components/shared/Header";
import { TreeForm } from "../components/TreeForm";
import { D3Tree } from "../components/D3Tree";

export const BinaryTree = () => {
  return (
    <>
      <ToastContainer />

      <Header
        title="Binary Tree"
        paragraph="Añade números al siguiente árbol binario y visualiza su estructura."
      />

      <TreeForm />
      <D3Tree />
    </>
  );
};

import { useSearchForm } from "../hooks/useSearchForm";
import { Button } from "./shared/Button";

export const SearchForm = () => {
  const { title, handleTitleChange, handleSubmit } = useSearchForm();

  return (
    <>
      <h2 className="text-2xl font-bold">Buscar canción</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input className="w-full p-2 border border-gray-300 rounded-md" type="text" placeholder="Titulo" value={title} onChange={handleTitleChange} />
        <Button type="submit" text="Buscar canción" variant="primary" size="lg" />
      </form>
    </>
  );
};

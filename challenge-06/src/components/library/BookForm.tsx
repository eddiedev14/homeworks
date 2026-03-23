import { useBookForm } from "../../hooks/library/useBookForm";
import type IBook from "../../interfaces/book.interface";

interface Props {
  onAddBook: (book: IBook) => void;
  onTakeBook: () => void;
}

export const BookForm = ({ onAddBook, onTakeBook }: Props) => {
  const {
    isbn,
    name,
    author,
    editorial,
    handleIsbnChange,
    handleNameChange,
    handleAuthorChange,
    handleEditorialChange,
    handleSubmit,
  } = useBookForm(onAddBook);

  return (
    <section>
      <h2 className="text-3xl font-bold">Nuevo Libro</h2>
      <p className="text-sm font-light text-slate-800">
        Agrega un nuevo libro a tu librería.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="isbn" className="font-medium">
            ISBN:
          </label>
          <input
            type="text"
            id="isbn"
            value={isbn}
            onChange={handleIsbnChange}
            className="max-w-md p-2 font-light border border-gray-300 shadow-sm rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="max-w-md p-2 font-light border border-gray-300 shadow-sm rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="author" className="font-medium">
            Autor:
          </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
            className="max-w-md p-2 font-light border border-gray-300 shadow-sm rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="editorial" className="font-medium">
            Editorial:
          </label>
          <input
            type="text"
            id="editorial"
            value={editorial}
            onChange={handleEditorialChange}
            className="max-w-md p-2 font-light border border-gray-300 shadow-sm rounded"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="w-48 py-2 bg-black text-white font-semibold rounded-md cursor-pointer transition-transform hover:scale-105"
          >
            Guardar
          </button>
          <button
            type="button"
            className="w-48 py-2 border border-black text-black font-semibold rounded-md cursor-pointer transition-transform hover:scale-105"
            onClick={onTakeBook}
          >
            Tomar un libro
          </button>
        </div>
      </form>
    </section>
  );
};

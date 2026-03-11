import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { toast } from "react-toastify";
import type IBook from "../interfaces/book.interface";

interface Props {
  onAddBook: (book: IBook) => void;
  onTakeBook: () => void;
}

export const BookForm = ({ onAddBook, onTakeBook }: Props) => {
  //* States
  const [isbn, setIsbn] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [editorial, setEditorial] = useState("");

  //* Handlers
  const handleIsbnChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    setIsbn(e.target.value);
  };

  const handleNameChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    setName(e.target.value);
  };

  const handleAuthorChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    setAuthor(e.target.value);
  };

  const handleEditorialChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    setEditorial(e.target.value);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    //* Form Validations
    // Check if data is empty
    if (
      isbn.trim() === "" ||
      name.trim() === "" ||
      author.trim() === "" ||
      editorial.trim() === ""
    ) {
      toast.error("¡Todos los campos son obligatorios!");
      return;
    }

    // Create the contact following the IContact structure
    const newBook: IBook = {
      isbn: Number(isbn),
      name,
      author,
      editorial,
    };

    // Call the function passed as a prop
    onAddBook(newBook);
    toast.success("Libro agregado correctamente!");

    // Reset the states (form)
    setIsbn("");
    setName("");
    setAuthor("");
    setEditorial("");
  };

  return (
    <section>
      <h2 className="text-3xl font-bold">Nuevo Libro</h2>
      <p className="text-sm font-light text-slate-800">
        Agrega un nuevo libro a tu librería.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">
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
          <label htmlFor="phone" className="font-medium">
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
          <label htmlFor="name" className="font-medium">
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
          <label htmlFor="name" className="font-medium">
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

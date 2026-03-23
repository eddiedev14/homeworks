import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { toast } from "react-toastify";
import type IBook from "../interfaces/book.interface";

export const useBookForm = (onAddBook: (book: IBook) => void) => {
  //* States
  const [isbn, setIsbn] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [editorial, setEditorial] = useState("");

  //* Handlers
  const handleIsbnChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setIsbn(e.target.value);
  };

  const handleNameChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setName(e.target.value);
  };

  const handleAuthorChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setAuthor(e.target.value);
  };

  const handleEditorialChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
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

    // Create the book following the IBook structure
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

  return {
    //* States
    isbn,
    name,
    author,
    editorial,

    //* Functions
    handleIsbnChange,
    handleNameChange,
    handleAuthorChange,
    handleEditorialChange,
    handleSubmit,
  };
};

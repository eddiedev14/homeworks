import { useState } from "react";
import { Header } from "./components/Header";
import { LibraryList } from "./components/LibraryList";
import { Footer } from "./components/Footer";

import { Stack } from "./algorithms/Stack.class";

// https://fkhadra.github.io/react-toastify/
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { booksMock } from "./data/books.mock.data";
import { BookForm } from "./components/BookForm";
import type IBook from "./interfaces/book.interface";

export const Library = () => {
  //* States (Stack)
  const [libraryStack, setLibraryStack] = useState(() => {
    const stack = new Stack();
    booksMock.forEach((book) => {
      stack.push(book);
    });
    return stack;
  });

  //* Handlers
  const handleAddBook = (book: IBook) => {
    setLibraryStack((prev) => {
      const newStack = new Stack();

      // Hacer una copia de la stack anterior
      prev.items.forEach((book) => {
        newStack.push(book);
      });

      // Añadir el nuevo libro
      newStack.push(book);
      return newStack;
    });
  };

  const handleTakeBook = () => {
    let bookTook: IBook | undefined | null;

    setLibraryStack((prev) => {
      const newStack = new Stack();

      // Copiar los elementos de la pila
      prev.items.forEach((book) => {
        newStack.push(book);
      });

      // Eliminar el libro
      bookTook = newStack.pop();
      return newStack;
    });

    if (bookTook) {
      toast.success(`El libro '${bookTook.name}' ha sido tomado correctamente`);
    } else {
      toast.error(`No hay más libros en la librería`);
    }
  };

  return (
    <>
      <ToastContainer />

      <Header
        title="Library Stack"
        paragraph="Gestiona tus libros desde un solo lugar!"
      />

      <main className="grid grid-cols-2 columns-2xl py-12 px-16 gap-8">
        <BookForm onAddBook={handleAddBook} onTakeBook={handleTakeBook} />
        <LibraryList books={libraryStack.items} />
      </main>

      <Footer />
    </>
  );
};

import { useState } from "react";
import { toast } from "react-toastify";
import { Stack } from "../../algorithms/Stack.class";
import { booksMock } from "../../data/books.mock.data";
import type IBook from "../../interfaces/book.interface";

export const useLibrary = () => {
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
    const newStack = new Stack();

    libraryStack.items.forEach((book) => {
      newStack.push(book);
    });

    const bookTook = newStack.pop();

    setLibraryStack(newStack);

    if (bookTook) {
      toast.success(`El libro '${bookTook.name}' ha sido tomado correctamente`);
    } else {
      toast.error(`No hay más libros en la librería`);
    }
  };

  return {
    libraryStack,
    handleAddBook,
    handleTakeBook,
  };
};

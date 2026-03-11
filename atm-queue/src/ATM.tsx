import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// https://fkhadra.github.io/react-toastify/
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Queue from "./algorithms/Queue.class";

import { atmRecordsMock } from "./data/ATM.data";

export const ATM = () => {
  //* States (Stack)
  const [libraryQueue, setLibraryQueue] = useState(() => {
    const queue = new Queue();

    // Ordenar la mock data
    const sortedRecords = [...atmRecordsMock].sort(
      (a, b) => a.dateTimeEntry.getTime() - b.dateTimeEntry.getTime()
    );

    sortedRecords.forEach((book) => {
      queue.enqueue(book);
    });

    return queue;
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

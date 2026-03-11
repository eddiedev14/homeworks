import type IBook from "../interfaces/book.interface";
import { BookCard } from "./BookCard";

interface Props {
  books: IBook[];
}

export const LibraryList = ({ books }: Props) => {
  return (
    <section>
      <h2 className="text-3xl font-bold">Tu Librería</h2>
      <p className="text-sm font-light text-slate-800">
        Aquí aparecerán todos tus libros guardados en el sistema.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {books
          .slice()
          .reverse()
          .map(({ isbn, name, author, editorial }, index) => (
            <BookCard
              key={index}
              id={index}
              isbn={isbn}
              name={name}
              author={author}
              editorial={editorial}
            />
          ))}
      </div>
    </section>
  );
};

import { Navbar } from "../components/shared/NavBar";
import { Header } from "../components/shared/Header";
import { BookForm } from "../components/library/BookForm";
import { LibraryList } from "../components/library/LibraryList";
import { Footer } from "../components/shared/Footer";
import { useLibrary } from "../hooks/library/useLibrary";

export const Library = () => {
  const { libraryStack, handleAddBook, handleTakeBook } = useLibrary();

  return (
    <>
      <Navbar />
      <Header
        title="Library Stack"
        paragraph="Gestiona tus libros desde un solo lugar!"
      />

      <main className="grid grid-cols-2 columns-2xl py-12 px-16 gap-8">
        <BookForm onAddBook={handleAddBook} onTakeBook={handleTakeBook} />
        <LibraryList books={libraryStack.items} />
      </main>

      <Footer project="Library Stack" />
    </>
  );
};

import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";
import { ContactList } from "./components/ContactList";

export const ContactApp = () => {
  //* States
  const [loading, setLoading] = useState(true);

  //* Effects
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <Header
        title="Contact App"
        paragraph="¡Administra todos tus contactos desde un solo lugar!"
      />

      <main className="grid grid-cols-2 py-12 px-16 gap-2">
        <ContactList />
      </main>
    </>
  );
};

import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Loader } from "./components/Loader";

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
      <Header
        title="Contact App"
        paragraph="¡Administra todos tus contactos desde un solo lugar!"
      />
      {loading && <Loader />}
    </>
  );
};

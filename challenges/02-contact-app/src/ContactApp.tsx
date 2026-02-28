import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Loader } from './components/Loader';
import { ContactList } from './components/ContactList';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { initialContacts } from './data/contacts.mock.data';
import type IContact from './interfaces/contact.interface';

// https://fkhadra.github.io/react-toastify/
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactApp = () => {
  //* States
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState(initialContacts);

  //* Effects
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  //* Handlers
  const handleAddContact = (contact: IContact) => {
    setContacts((prev) => [...prev, contact]);
  };

  const handleRemoveContact = (id: number) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <ToastContainer />
      {loading && <Loader />}

      <Header
        title="Contact App"
        paragraph="¡Administra todos tus contactos desde un solo lugar!"
      />

      <main className="grid grid-cols-2 columns-2xl py-12 px-16 gap-8">
        <ContactList contacts={contacts} onRemoveContact={handleRemoveContact} />
        <ContactForm onAddContact={handleAddContact} />
      </main>

      <Footer />
    </>
  );
};

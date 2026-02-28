import { useState, type ChangeEvent, type SubmitEvent } from 'react';
import type IContact from '../interfaces/contact.interface';
import { toast } from 'react-toastify';

interface Props {
  onAddContact: (contact: IContact) => void;
}

// Regular expression to check phone format: https://uibakery.io/regex-library/phone-number
const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;

export const ContactForm = ({ onAddContact }: Props) => {
  //* States
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  //* Handlers
  const handleNameChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    //* Form Validations
    // Check if data is empty
    if (name.trim() === '' || phone.trim() === '') {
      toast.error('¡Todos los campos son obligatorios!');
      return;
    }

    // Check the phone number format with a regular expression
    if (!phoneRegex.test(phone)) {
      toast.error('¡El teléfono ingresado no es válido!');
      return;
    }

    // Create the contact following the IContact structure
    const newContact: IContact = {
      id: Date.now(),
      name,
      phone,
    };

    // Call the function passed as a prop
    onAddContact(newContact);
    toast.success('¡Contacto agregado correctamente!');

    // Reset the states (form)
    setName('');
    setPhone('');
  };

  return (
    <section>
      <h2 className="text-3xl font-bold">Nuevo Contacto</h2>
      <p className="text-sm font-light text-slate-800">Agrega un nuevo contacto a tu lista.</p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">
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
          <label htmlFor="phone" className="font-medium">
            Teléfono:
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            className="max-w-md p-2 font-light border border-gray-300 shadow-sm rounded"
          />
        </div>
        <button
          type="submit"
          className="w-48 py-2 bg-black text-white font-semibold rounded-md cursor-pointer transition-transform hover:scale-105"
        >
          Guardar
        </button>
      </form>
    </section>
  );
};

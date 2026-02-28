import type IContact from "../interfaces/contact.interface";
import { ContactCard } from "./ContactCard";

interface Props {
  contacts: IContact[];
}

export const ContactList = ({ contacts }: Props) => {
  return (
    <section>
      <h2 className="text-3xl font-bold">Tus Contactos</h2>
      <p className="text-sm font-light text-slate-800">
        Aquí aparecerán todos tus contactos guardados en el sistema.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {contacts.map(({ id, name, phone }) => (
          <ContactCard key={id} id={id} name={name} phone={phone} />
        ))}
      </div>
    </section>
  );
};

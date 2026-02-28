export const ContactForm = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold">Nuevo Contacto</h2>
      <p className="text-sm font-light text-slate-800">
        Agrega un nuevo contacto a tu lista.
      </p>
      <form className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
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

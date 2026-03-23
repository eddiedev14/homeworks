import type IATMRecord from "../../interfaces/IATMRecord.interface";
import { useATMForm } from "../../hooks/atm/useATMForm,";

interface Props {
  onAddATMRecord: (record: IATMRecord) => void;
  onWithdrawal: () => void;
}

export const ATMForm = ({ onAddATMRecord, onWithdrawal }: Props) => {
  const {
    person,
    description,
    amount,
    handlePersonChange,
    handleDescriptionChange,
    handleAmountChange,
    handleSubmit,
  } = useATMForm(onAddATMRecord);

  return (
    <section>
      <h2 className="text-3xl font-bold">Nueva Persona</h2>
      <p className="text-sm font-light text-slate-800">
        Agrega un nueva persona para retirar dinero en el ATM a la cola.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="person" className="font-medium">
            Persona:
          </label>
          <input
            type="text"
            id="person"
            value={person}
            onChange={handlePersonChange}
            className="max-w-md p-2 font-light border border-gray-300 shadow-sm rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="font-medium">
            Descripción:
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="max-w-md p-2 font-light border border-gray-300 shadow-sm rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="font-medium">
            Cantidad ($):
          </label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="max-w-md p-2 font-light border border-gray-300 shadow-sm rounded"
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="w-48 py-2 bg-black text-white font-semibold rounded-md cursor-pointer transition-transform hover:scale-105"
          >
            Guardar
          </button>
          <button
            type="button"
            className="w-48 py-2 border border-black text-black font-semibold rounded-md cursor-pointer transition-transform hover:scale-105"
            onClick={onWithdrawal}
          >
            Retirar dinero
          </button>
        </div>
      </form>
    </section>
  );
};

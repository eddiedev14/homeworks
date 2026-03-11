import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { toast } from "react-toastify";
import type IATMRecord from "../interfaces/IATMRecord.interface";
import { randomArrivalDate } from "../utils/functions";

interface Props {
  onAddATMRecord: (record: IATMRecord) => void;
  onWithdrawal: () => void;
}

export const ATMForm = ({ onAddATMRecord, onWithdrawal }: Props) => {
  //* States
  const [person, setPerson] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  //* Handlers
  const handlePersonChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    setPerson(e.target.value);
  };

  const handleDescriptionChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    setDescription(e.target.value);
  };

  const handleAmountChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    //* Form Validations
    // Check if data is empty
    if (
      person.trim() === "" ||
      description.trim() === "" ||
      amount.trim() === ""
    ) {
      toast.error("¡Todos los campos son obligatorios!");
      return;
    }

    // Create the contact following the IATMRecord structure
    const newATMRecord: IATMRecord = {
      dateTimeEntry: randomArrivalDate(),
      person,
      description,
      amount: Number(amount),
    };

    // Call the function passed as a prop
    onAddATMRecord(newATMRecord);
    toast.success("Persona agregada a la cola del ATM correctamente!");

    // Reset the states (form)
    setPerson("");
    setDescription("");
    setAmount("");
  };

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

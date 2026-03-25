import { useState, type ChangeEvent, type SubmitEvent } from "react";
import { toast } from "react-toastify";
import type IATMRecord from "../../interfaces/IATMRecord.interface";

export const useATMForm = (onAddATMRecord: (record: IATMRecord) => void) => {
  //* States
  const [person, setPerson] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  //* Handlers
  const handlePersonChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setPerson(e.target.value);
  };

  const handleDescriptionChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setDescription(e.target.value);
  };

  const handleAmountChange = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
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
      arrivalDate: new Date(), // Fecha actual
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

  return {
    //* States
    person,
    description,
    amount,

    //* Functions
    handlePersonChange,
    handleDescriptionChange,
    handleAmountChange,
    handleSubmit,
  };
};

import { useState } from "react";
import { Header } from "./components/Header";
import { ATMForm } from "./components/ATMForm";
import { ATMList } from "./components/ATMList";
import { Footer } from "./components/Footer";

// https://fkhadra.github.io/react-toastify/
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Queue from "./algorithms/Queue.class";
import { atmRecordsMock } from "./data/ATM.data";
import type IATMRecord from "./interfaces/IATMRecord.interface";

export const ATM = () => {
  //* States (Queue)
  const [ATMQueue, setATMQueue] = useState(() => {
    const queue = new Queue();

    // Ordenar la mock data según la fecha de llegada (random)
    const sortedRecords = [...atmRecordsMock].sort(
      (a, b) => a.arrivalDate.getTime() - b.arrivalDate.getTime()
    );

    console.log(sortedRecords)

    sortedRecords.forEach((book) => {
      queue.enqueue(book);
    });

    return queue;
  });

  //* Handlers
  const handleAddRecord = (record: IATMRecord) => {
    setATMQueue((prev) => {
      const newQueue = new Queue();

      // Hacer una copia de la queue anterior
      prev.items.forEach((book) => {
        newQueue.enqueue(book);
      });

      // Añadir el nuevo registro
      newQueue.enqueue(record);
      return newQueue;
    });
  };

  const handleWithdrawal = () => {
    let withdrawal: IATMRecord | undefined | null;

    setATMQueue((prev) => {
      const newQueue = new Queue();

      // Copiar los elementos de la cola
      prev.items.forEach((book) => {
        newQueue.enqueue(book);
      });

      // Eliminar el registro de la cola
      withdrawal = newQueue.dequeue();
      return newQueue;
    });

    if (withdrawal) {
      toast.success(`'${withdrawal.person}' ha retirado su dinero correctamente!`);
    } else {
      toast.error(`No hay más personas en la cola para el ATM`);
    }
  };

  return (
    <>
      <ToastContainer />

      <Header
        title="ATM Queue"
        paragraph="Gestiona tu atención de ATM desde un solo lugar!"
      />

      <main className="grid grid-cols-2 columns-2xl py-12 px-16 gap-8">
        <ATMForm onAddATMRecord={handleAddRecord} onWithdrawal={handleWithdrawal} />
        <ATMList records={ATMQueue.items} />
      </main>

      <Footer />
    </>
  );
};

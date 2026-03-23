import { useState } from "react";
import { toast } from "react-toastify";
import Queue from "../../algorithms/Queue.class";
import { atmRecordsMock } from "../../data/ATM.mock.data";
import type IATMRecord from "../../interfaces/IATMRecord.interface";

export const useATM = () => {
  //* States (Queue)
  const [ATMQueue, setATMQueue] = useState(() => {
    const queue = new Queue();

    // Ordenar la mock data según la fecha de llegada (random)
    const sortedRecords = [...atmRecordsMock].sort(
      (a, b) => a.arrivalDate.getTime() - b.arrivalDate.getTime(),
    );

    console.log(sortedRecords);

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
    const newQueue = new Queue();

    // Copiar los elementos de la cola
    ATMQueue.items.forEach((book) => {
      newQueue.enqueue(book);
    });

    // Eliminar el registro de la cola
    const withdrawal = newQueue.dequeue();

    setATMQueue(newQueue);

    if (withdrawal) {
      toast.success(
        `'${withdrawal.person}' ha retirado su dinero correctamente!`,
      );
    } else {
      toast.error(`No hay más personas en la cola para el ATM`);
    }
  };

  return {
    //* States
    ATMQueue,

    //* Functions
    handleAddRecord,
    handleWithdrawal,
  };
};

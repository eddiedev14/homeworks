import { useState } from "react";
import ComitteeCircularDoubleLinkedList from "../algorithms/CommiteeDoubleCircularList";
import { commitee } from "../data/commitee.mock.data";
import { Button } from "./Button";

export const AdministrativeCommittee = () => {
  //* States
  const [committeeList, setCommitteeList] = useState(() => {
    const list = new ComitteeCircularDoubleLinkedList();
    commitee.forEach((person) => {
      list.append(person);
    });
    return list;
  });
  const [currentPerson, setCurrentPerson] = useState(committeeList.head);

  //* Handlers
  const handlePrevRecord = () => {
    if (!currentPerson) return;
    setCurrentPerson(currentPerson.prev);
  };

  const handleNextRecord = () => {
    if (!currentPerson) return;
    setCurrentPerson(currentPerson.next);
  };

  return (
    <div className="mx-auto">
      <h2 className="text-2xl font-bold">Comité Administrativo</h2>
      {currentPerson && (
        <div className="mt-4 py-6 px-4 border border-gray-200 rounded-md shadow">
          <h4 className="text-sm text-slate-700">Directivo actual:</h4>
          <h3 className="text-xl font-bold">{currentPerson.value.name}</h3>
          <p className="text-sm text-slate-800 font-semibold">
            Número de Identificación: {currentPerson.value.id}
          </p>
          <p className="text-sm text-slate-800 font-semibold">
            Cargo: {currentPerson.value.role}
          </p>
          <Button text="Anterior Registro" onClick={handlePrevRecord} />
          <Button text="Siguiente Registro" onClick={handleNextRecord} />
        </div>
      )}
    </div>
  );
};

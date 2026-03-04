import type IPatient from "../interfaces/IPatient";
import { Button } from "./Button";

interface Props {
  currentPatient: IPatient | undefined; // undefined porque puede ser que no haya un siguiente paciente
  onAttendPatient: () => void;
}

export const Patient = ({ currentPatient, onAttendPatient }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Gestión de Pacientes en Cola</h2>
      {currentPatient && (
        <div className="mt-4 py-6 px-4 border border-gray-200 rounded-md shadow">
          <h4 className="text-sm text-slate-700">Paciente actual:</h4>
          <h3 className="text-xl font-bold">{currentPatient.name}</h3>
          <p className="text-sm text-slate-800 font-semibold">
            Número de Identificación: {currentPatient.id}
          </p>
          <p className="text-sm text-slate-800 font-semibold">
            Edad: {currentPatient.age}
          </p>
          <Button text="Marcar como 'Atendido'" onClick={onAttendPatient} />
        </div>
      )}
      {!currentPatient && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">
            No hay más pacientes en cola
          </h3>
          <p className="text-sm font-light text-slate-700">
            ¡Todos han sido atendidos correctamente!
          </p>
        </div>
      )}
    </div>
  );
};

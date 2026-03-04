import type IHistoryRecord from "../interfaces/IHistoryRecord";
import { Button } from "./Button";

interface Props {
  currentHistoryRecord: IHistoryRecord | undefined; // undefined porque puede ser que no haya un siguiente paciente
}

export const History = ({ currentHistoryRecord }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Historial de Atención</h2>
      {currentHistoryRecord && (
        <div className="mt-4 py-6 px-4 border border-gray-200 rounded-md shadow">
          <h4 className="text-sm text-slate-700">Paciente del Historial:</h4>
          <h3 className="text-xl font-bold">
            {currentHistoryRecord.patient.name}
          </h3>
          <p className="text-sm text-slate-800 font-semibold">
            Número de Identificación: {currentHistoryRecord.patient.id}
          </p>
          <h4 className="text-sm text-slate-700">Médico que atendió:</h4>
          <h3 className="text-xl font-bold">
            {currentHistoryRecord.doctor.name}
          </h3>
          <p className="text-sm text-slate-800 font-semibold">
            Número de Identificación: {currentHistoryRecord.doctor.id}
          </p>
          <p className="text-sm text-slate-800 font-semibold">
            Cargo: {currentHistoryRecord.doctor.role}
          </p>
          <Button text="Anterior Registro" onClick={() => {}} />
          <Button text="Siguiente Registro" onClick={() => {}} />
        </div>
      )}
    </div>
  );
};

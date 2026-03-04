import type IHistoryRecord from "../interfaces/IHistoryRecord";
import { Button } from "./Button";

interface Props {
  currentHistoryRecord: IHistoryRecord | undefined;
  onPrevRecord: () => void;
  onNextRecord: () => void;
  prevDisabled: boolean;
  nextDisabled: boolean;
}

export const History = ({
  currentHistoryRecord,
  onPrevRecord,
  onNextRecord,
  prevDisabled,
  nextDisabled,
}: Props) => {
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
          <hr />
          <h4 className="text-sm text-slate-700 mt-2">Médico que atendió:</h4>
          <h3 className="text-xl font-bold">
            {currentHistoryRecord.doctor.name}
          </h3>
          <p className="text-sm text-slate-800 font-semibold">
            Número de Identificación: {currentHistoryRecord.doctor.id}
          </p>
          <p className="text-sm text-slate-800 font-semibold">
            Cargo: {currentHistoryRecord.doctor.role}
          </p>
          <Button
            text="Anterior Registro"
            onClick={onPrevRecord}
            disabled={prevDisabled}
          />
          <Button
            text="Siguiente Registro"
            onClick={onNextRecord}
            disabled={nextDisabled}
          />
        </div>
      )}
    </div>
  );
};

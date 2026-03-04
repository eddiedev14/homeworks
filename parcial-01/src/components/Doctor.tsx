import type IDoctor from "../interfaces/IDoctor";

interface Props {
  currentDoctor: IDoctor | undefined;
}

export const Doctor = ({ currentDoctor }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Gestión de Doctores</h2>
      {currentDoctor && (
        <div className="mt-4 py-6 px-4 border border-gray-200 rounded-md shadow">
          <h4 className="text-sm text-slate-700">Doctor en guardia:</h4>
          <h3 className="text-xl font-bold">{currentDoctor.name}</h3>
          <p className="text-sm text-slate-800 font-semibold">
            Número de Identificación: {currentDoctor.id}
          </p>
          <p className="text-sm text-slate-800 font-semibold">
            Edad: {currentDoctor.age}
          </p>
          <p className="text-sm text-slate-800 font-semibold">
            Cargo: {currentDoctor.role}
          </p>
        </div>
      )}
    </div>
  );
};

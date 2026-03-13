interface Props {
  id: number;
  arrivalDate: Date;
  person: string;
  description: string;
  amount: number;
}

export const ATMCard = ({
  id,
  arrivalDate,
  person,
  description,
  amount,
}: Props) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 shadow transition-transform hover:scale-105 relative">
      <div className="flex justify-between items-center w-full">
        <div>
          <span className="text-1xl font-extrabold absolute w-8 h-8 p-2 right-3 flex justify-center items-center bg-orange-300 rounded-full">
            {id + 1}°
          </span>
          <p className="text-sm font-light text-slate-900">
            {arrivalDate.toLocaleString("es-CO")}
          </p>
          <h3 className="text-lg font-semibold">{person}</h3>
          <p className="text-sm font-light text-slate-800">
            Descripción: {description}
          </p>
          <p className="text-sm font-light text-slate-800">
            Cantidad: ${amount}
          </p>
        </div>
      </div>
    </div>
  );
};

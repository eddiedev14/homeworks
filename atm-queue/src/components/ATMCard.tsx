interface Props {
  dateTimeEntry: Date;
  person: string;
  description: string;
  amount: number;
}

export const ATMCard = ({
  dateTimeEntry,
  person,
  description,
  amount,
}: Props) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 shadow transition-transform hover:scale-105">
      <div className="flex justify-between items-center w-full">
        <div>
          <span className="text-xl font-extrabold">
            {dateTimeEntry.toLocaleString("es-CO")}
          </span>
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

import type IATMRecord from "../interfaces/IATMRecord.interface";
import { ATMCard } from "./ATMCard";

interface Props {
  records: IATMRecord[];
}

export const ATMList = ({ records }: Props) => {
  return (
    <section>
      <h2 className="text-3xl font-bold">Tu Librería</h2>
      <p className="text-sm font-light text-slate-800">
        Aquí aparecerán todos tus libros guardados en el sistema.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {records.map(
          ({ arrivalDate, person, description, amount }, index) => (
            <ATMCard
              key={index}
              id={index}
              arrivalDate={arrivalDate}
              person={person}
              description={description}
              amount={amount}
            />
          )
        )}
      </div>
    </section>
  );
};

interface Props {
  id: number;
  isbn: number;
  name: string;
  author: string;
  editorial: string;
}

export const BookCard = ({ id, isbn, name, author, editorial }: Props) => {
  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 shadow transition-transform hover:scale-105 relative">
      <div className="flex justify-between items-center w-full">
        <div>
          <span className="text-1xl font-extrabold absolute w-8 h-8 p-2 right-3 flex justify-center items-center bg-purple-300 rounded-full">
            {id + 1}°
          </span>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm font-light text-slate-800">ISBN: {isbn}</p>
          <p className="text-sm font-light text-slate-800">Autor: {author}</p>
          <p className="text-sm font-light text-slate-800">
            Editorial: {editorial}
          </p>
        </div>
      </div>
    </div>
  );
};

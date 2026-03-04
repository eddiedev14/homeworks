interface Props {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: Props) => {
  return (
    <button
      className="mt-2 py-2 px-4 mx-auto rounded-xl border shadow transition-all bg-sky-500 text-white border-gray-200 hover:scale-105 hover:bg-sky-700 cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

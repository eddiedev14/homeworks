interface Props {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: Props) => {
  return (
    <button
      className="py-2 px-4 mx-auto rounded-xl border border-gray-200 cursor-pointer shadow transition-transform hover:scale-105"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

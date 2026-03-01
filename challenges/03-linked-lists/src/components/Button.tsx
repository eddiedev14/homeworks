interface Props {
  text: string;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({ text, disabled, onClick }: Props) => {
  return (
    <button
      className={`
        py-2 px-4 mx-auto rounded-xl border shadow transition-all
        ${
          disabled
            ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
            : 'bg-white text-gray-800 border-gray-200 hover:scale-105 hover:bg-gray-50 cursor-pointer'
        }
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

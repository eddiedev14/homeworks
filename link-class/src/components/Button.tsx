interface Props {
    text: string;
    onClick: () => void;
}

export const Button = ({ text, onClick }: Props) => {
    return (
        <button
            type="button"
            className="py-2 px-4 mx-auto rounded-xl border shadow transition-all bg-white text-gray-800 border-gray-200 hover:scale-105 hover:bg-gray-50 cursor-pointer"
            onClick={onClick}
        >
            {text}
        </button >
    );
};
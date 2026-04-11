interface CardProps {
  title: string;
  text: string;
}

export const Card = ({ title, text }: CardProps) => {
  return (
    <div className="max-w-md mt-4 mx-auto flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
};

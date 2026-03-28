interface Props {
  text: string;
}

export const CommonLoader = ({ text }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 mt-5">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
};

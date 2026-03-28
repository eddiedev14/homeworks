interface Props {
  text: string;
  type: "submit" | "button";
  variant?: "primary" | "secondary" | "destructive";
  onClick?: () => void;
}

export const Button = ({
  text,
  type,
  variant = "secondary",
  onClick,
}: Props) => {
  const baseStyles =
    "px-4 py-2 font-semibold rounded-md cursor-pointer transition-all border";

  const variantStyles = {
    primary: "bg-black text-white hover:bg-green-700",
    secondary:
      "bg-transparent text-black border-black hover:bg-black hover:text-white",
    destructive: "bg-red-500 text-white border-red-500 hover:bg-red-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {text}
    </button>
  );
};

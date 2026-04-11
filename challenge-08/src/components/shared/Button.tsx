interface Props {
  text: string;
  type: "submit" | "button";
  variant?: "primary" | "secondary" | "destructive";
  onClick?: () => void;
}

const baseStyles =
  "w-auto py-2 font-semibold rounded-md cursor-pointer transition-all border";

const variantStyles = {
  primary: "bg-black text-white hover:bg-green-700",
  secondary: "bg-sky-500 text-white hover:bg-sky-700",
  destructive: "bg-red-500 text-white border-red-500 hover:bg-red-600",
};

export const Button = ({
  text,
  type,
  variant = "secondary",
  onClick,
}: Props) => {
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

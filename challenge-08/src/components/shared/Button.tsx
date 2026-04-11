interface Props {
  text: string;
  type: "submit" | "button";
  variant?: "primary" | "secondary" | "destructive";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const baseStyles =
  "w-auto font-semibold rounded-md cursor-pointer transition-all border";

const variantStyles = {
  primary: "bg-sky-500 text-white hover:bg-sky-700",
  secondary: "text-black border border-gray-300 hover:bg-gray-200",
  destructive: "bg-red-500 text-white border-red-500 hover:bg-red-600",
};

const sizeStyles = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = ({
  text,
  type,
  variant = "secondary",
  size = "md",
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {text}
    </button>
  );
};

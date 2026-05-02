interface Props {
  text: string;
  type: "submit" | "button";
  variant?: "primary" | "secondary" | "gray";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const baseStyles =
  "font-semibold rounded-md cursor-pointer transition-all border";

const variantStyles = {
  primary:
    "bg-blue-500 text-white transition-all hover:bg-sky-700 hover:translate-y-[-2px]",
  secondary: "border border-blue-500 text-white hover:bg-sky-500",
  gray: "text-gray-700 hover:bg-gray-200 hover:translate-y-[-2px]",
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

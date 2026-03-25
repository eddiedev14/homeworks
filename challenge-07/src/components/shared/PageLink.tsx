import { Link } from "react-router-dom";

interface Props {
  path: string;
  text: string;
  small?: boolean;
  bordered?: boolean;
}

export const PageLink = ({
  path,
  text,
  small = false,
  bordered = false,
}: Props) => {
  const baseStyles = "inline-block w-fit rounded-md transition-all font-medium";

  const sizeStyles = small ? "text-sm px-3 py-1.5" : "text-base px-4 py-2";

  const variantStyles = bordered
    ? "border border-black text-black hover:bg-black hover:text-white"
    : "text-white bg-black";

  return (
    <Link to={path} className={`${baseStyles} ${sizeStyles} ${variantStyles}`}>
      {text}
    </Link>
  );
};

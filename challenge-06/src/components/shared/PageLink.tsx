import { Link } from "react-router-dom";

interface Props {
  path: string;
  text: string;
  small?: boolean;
}

export const PageLink = ({ path, text, small = false }: Props) => {
  const baseStyles =
    "inline-block w-fit bg-black text-white rounded-xl shadow-md transition-all";

  const sizeStyles = small
    ? "text-sm px-3 py-1.5 mt-2"
    : "text-lg px-6 py-3 mt-4";

  return (
    <Link to={path} className={`${baseStyles} ${sizeStyles}`}>
      {text}
    </Link>
  );
};

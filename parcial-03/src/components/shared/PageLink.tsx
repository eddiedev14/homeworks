import { Link } from "react-router-dom";

interface Props {
    path: string;
    text: string;
    small?: boolean;
    bordered?: boolean;
    inline?: boolean;
    className?: string;
}

export const PageLink = ({
    path,
    text,
    small = false,
    bordered = false,
    inline = false,
    className = "",
}: Props) => {
    // Estilo base
    const baseStyles = inline
        ? "text-blue-500 underline hover:text-blue-600 transition-colors font-medium"
        : "inline-block w-fit rounded-md transition-all font-medium";

    // Tamaño (solo para botones)
    const sizeStyles = inline
        ? ""
        : small
            ? "text-sm px-3 py-1.5"
            : "text-base px-4 py-2";

    // Variantes (solo para botones)
    const variantStyles = inline
        ? ""
        : bordered
            ? "border border-black text-black hover:bg-black hover:text-white"
            : "text-white bg-black";

    return (
        <Link
            to={path}
            className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
        >
            {text}
        </Link>
    );
};
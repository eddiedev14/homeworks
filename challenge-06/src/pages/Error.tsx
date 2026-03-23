import NotAllowedIllustration from "/403.png";
import NotFoundIllustration from "/404.png";
import { errorMessages } from "../data/error.messages.data";
import { Link } from "react-router-dom";

interface Props {
  errorCode: "403" | "404";
}

export const Error = ({ errorCode }: Props) => {
  const imgSrc =
    errorCode === "404" ? NotFoundIllustration : NotAllowedIllustration;

  return (
    <div className="flex flex-col items-center">
      <img src={imgSrc} alt={`${errorCode} Illustration`} className="size-96" />
      <h2 className="text-2xl font-semibold">{errorMessages[errorCode]}</h2>
      <Link
        to="/"
        className="inline-block text-lg bg-black text-white px-6 py-3 mt-4 rounded-xl shadow-md"
      >
        Volver al Inicio
      </Link>
    </div>
  );
};

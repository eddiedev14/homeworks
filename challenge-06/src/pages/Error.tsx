import NotAllowedIllustration from "/403.png";
import NotFoundIllustration from "/404.png";
import { errorMessages } from "../data/error.messages.data";
import { PageLink } from "../components/PageLink";

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
      <PageLink path="/" text="Volver al inicio" />
    </div>
  );
};

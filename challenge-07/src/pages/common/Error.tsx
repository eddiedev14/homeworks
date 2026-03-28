import { PageLink } from "../../components/shared/PageLink";
import NotFoundIllustration from "/404.png";

export const Error = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={NotFoundIllustration}
        alt="404 Illustration"
        className="size-96"
      />
      <h2 className="text-2xl font-semibold mb-4">
        ¡La página a la que tratas de acceder no existe!
      </h2>
      <PageLink path="/" text="Volver al inicio" />
    </div>
  );
};

import { PageLink } from "./PageLink";

interface CardProps {
  title: string;
  description: string;
  emoji: string;
  path: string;
}

export const Card = ({ title, description, emoji, path }: CardProps) => {
  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow w-full max-w-sm">
      <div className="text-3xl bg-yellow-400 size-14 flex items-center justify-center rounded-full shrink-0">
        {emoji}
      </div>
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <PageLink path={path} text="Ir a challenge" small />
      </div>
    </div>
  );
};

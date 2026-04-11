interface Props {
  title: string;
  paragraph: string;
}

export const Header = ({ title, paragraph }: Props) => {
  return (
    <header className="mt-6 flex flex-col gap-2 mb-6">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p className="font-light text-slate-800">{paragraph}</p>
    </header>
  );
};

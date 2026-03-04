interface Props {
  title: string;
  paragraph: string;
}

export const Header = ({ title, paragraph }: Props) => {
  return (
    <header className="mt-6 flex flex-col items-center gap-2">
      <h1 className="text-5xl font-extrabold">{title}</h1>
      <p className="font-light text-slate-800">{paragraph}</p>
    </header>
  );
};

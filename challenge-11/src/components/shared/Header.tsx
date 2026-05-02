interface Props {
  title: string;
  paragraph: string;
}

export const Header = ({ title, paragraph }: Props) => {
  return (
    <header className="my-6 flex flex-col text-center gap-2">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p className="font-light text-slate-800">{paragraph}</p>
    </header>
  );
};

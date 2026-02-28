interface Props {
  title: string;
  paragraph: string;
  onLinkifyMusicClick: () => void;
  onNodeHistoryClick: () => void;
}

export const Header = ({ title, paragraph, onLinkifyMusicClick, onNodeHistoryClick }: Props) => {
  return (
    <header className="mt-6 flex flex-col items-center gap-2">
      <h1 className="text-5xl font-extrabold">{title}</h1>
      <p className="font-light text-slate-800">{paragraph}</p>
      <div className="flex gap-4 *:py-2 *:px-4 *:rounded-xl *:border *:border-gray-200 *:cursor-pointer *:shadow *:transition-transform *:hover:scale-105">
        <button onClick={onLinkifyMusicClick}>LinkifyMusic (Linked List)</button>
        <button onClick={onNodeHistoryClick}>HistoryNode (Double Linked List)</button>
      </div>
    </header>
  );
};

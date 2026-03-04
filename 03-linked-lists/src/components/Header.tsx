import { Button } from './Button';

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
      <div className="flex gap-4">
        <Button text="LinkifyMusic (Linked List)" onClick={onLinkifyMusicClick} />
        <Button text="HistoryNode (Double Linked List)" onClick={onNodeHistoryClick} />
      </div>
    </header>
  );
};

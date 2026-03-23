import ProfilePicture from "/profile-picture.png";

interface Props {
  title: string;
  paragraph: string;
  showImage?: boolean;
}

export const Header = ({ title, paragraph, showImage = false }: Props) => {
  return (
    <header className="mt-6 flex flex-col items-center gap-2">
      {showImage && (
        <img
          src={ProfilePicture}
          alt="Profile Picture"
          className="object-cover size-32"
        />
      )}
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p className="font-light text-slate-800">{paragraph}</p>
    </header>
  );
};

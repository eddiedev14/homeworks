import { pages } from '../data/pages.mock.data';

export const NodeHistory = () => {
  return (
    <main className="flex justify-center items-center flex-wrap gap-6 mt-12 pb-8">
      {pages.map(({ id, title, url, icon }) => (
        <div
          key={id}
          className="w-48 py-4 px-6 flex flex-col gap-2 border border-gray-200 shadow rounded-lg cursor-pointer transition-transform hover:scale-105"
        >
          <div className="w-16 h-16 p-3 border border-gray-200 shadow rounded-full ">
            <img src={icon} alt={`${title} icon`} />
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <a
            href={url}
            target="_blank"
            className="w-fit py-2 px-4 border border-gray-200 shadow rounded-lg"
          >
            Visitar
          </a>
        </div>
      ))}
    </main>
  );
};

import { pages } from '../data/pages.mock.data';

export const NodeHistory = () => {
  return (
    <main className="flex justify-center items-center mt-12 pb-8">
      {pages.map(({ id, title, url }) => (
        <p key={id}>{id}</p>
      ))}
    </main>
  );
};

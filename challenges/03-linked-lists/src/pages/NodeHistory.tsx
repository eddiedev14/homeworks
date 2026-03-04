import { useState } from 'react';
import { pages } from '../data/pages.mock.data';
import { Button } from '../components/Button';
import DoubleLinkedList from '../algorithms/DoubleLinkedLists';

export const NodeHistory = () => {
  //* States
  const [history, setHistory] = useState(() => {
    const list = new DoubleLinkedList()
    pages.forEach(page => {
      list.append(page)
    })
    return list;
  })
  const [currentPage, setCurrentPage] = useState(history.peek(1));

  //* Handlers
  const handlePreviousPage = () => {
    setCurrentPage(history.prev(currentPage?.id));
  };

  const handleNextPage = () => {
    setCurrentPage(history.next(currentPage?.id));
  };

  return (
    <main className="flex justify-center items-center flex-wrap gap-6 mt-12 pb-8">
      {pages.map((page) => (
        <div
          key={page.id}
          className={`w-48 py-4 px-6 flex flex-col gap-2 border border-gray-200 shadow rounded-lg cursor-pointer transition-transform hover:scale-105 
            ${page.id === currentPage?.id ? 'bg-emerald-400 text-white' : 'bg-white text-black'}`}
        >
          <div className="w-16 h-16 p-3 border border-gray-200 shadow rounded-full ">
            <img src={page.icon} alt={`${page.title} icon`} />
          </div>
          <h3 className="text-2xl font-bold">{page.title}</h3>
          {page.id === currentPage?.id && (
            <a
              href={page.url}
              target="_blank"
              className="w-fit py-2 px-4 border border-gray-200 shadow rounded-lg"
            >
              Visitar
            </a>
          )}
        </div>
      ))}
      <div className="flex gap-4">
        <Button
          text="Anterior Página"
          onClick={handlePreviousPage}
          disabled={!history.prev(currentPage?.id)}
        />
        <Button
          text="Siguiente Página"
          onClick={handleNextPage}
          disabled={!history.next(currentPage?.id)}
        />
      </div>
    </main>
  );
};

import { useState } from 'react';
import { Header } from './components/Header';
import { LinkifyMusic } from './pages/LinkifyMusic';
import { NodeHistory } from './pages/NodeHistory';

// Union type for pages
type Pages = 'linkify-music' | 'node-history';

export const App = () => {
  //* States
  const [currentPage, setCurrentPage] = useState<Pages>('linkify-music');

  //* Handlers
  const handleLinkifyMusicClick = () => {
    setCurrentPage('linkify-music');
  };

  const handleNodeHistoryClick = () => {
    setCurrentPage('node-history');
  };

  return (
    <>
      <Header
        title="Linked & Double List"
        paragraph="Navega y explora proyectos relacionados con las Linked y Double Lists"
        onLinkifyMusicClick={handleLinkifyMusicClick}
        onNodeHistoryClick={handleNodeHistoryClick}
      />

      {currentPage === 'linkify-music' && <LinkifyMusic />}
      {currentPage === 'node-history' && <NodeHistory />}
    </>
  );
};
